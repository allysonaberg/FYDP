const suggestions_dict = require('../content/suggestions');
const analyses_dict = require("../content/analyses");
const calculate_footprint = require("../calculations/footprint");
const calculate_rank = require("../calculations/rank");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

/* A parsed product looks like:
{
      id: 1,
      name: 'Cozy Fleece Perfect 2" Sweatshort',
      carbon: '42.6',
      rank: 'A',
      image: shorts,
      material1: '78% cotton',
      material2: '22% Polyester',
      analysis: 'The production of polyester uses harmful chemicals, including carcinogens, and if emitted to water and air untreated, can cause significant environmental damage. Most polyester is produced in countries such as China, Indonesia and Bangladesh',
      suggestion: 'Consider swapping linen for cotton to reduce this item’s carbon footprint by 8.1 CO2'
    }
*/

class Material {
    constructor(name, ratio, kg_carbon) {
        this.name = name;
        this.ratio = ratio;
        this.kg_carbon = kg_carbon;
    }
}
class Product {
    constructor(id, name, product_type, kg_carbon, stock, rank, image, materials, analyses, suggestions) {
        this.id = id;
        this.name = name;
        this.product_type = product_type;
        this.kg_carbon = kg_carbon;
        this.stock = stock;
        this.rank = rank;
        this.image = image;
        this.materials = materials; // List of type Material
        this.analyses = analyses;
        this.suggestions = suggestions;
    }
    add_image(url) {
        this.image = url;
    }
}

/* The JSON returned from the Shopify endpoint looks like: 
{
    "id": 6073135694005,
    "title": "chain mail suit",
    "body_html": "<p>Materials</p>\n<p>50% cotton</p>\n<p>50% polyester</p>",
    "vendor": "FYDP Development Store",
    "product_type": "Suit",
    "status": "active",
    "published_scope": "web",
    "tags": "",
    "variants": [
        {
            "grams": 500,
            "inventory_quantity": 18,
            ...
        }
    ],
    "options": [
        {
            "id": 7761447289013,
            "product_id": 6073135694005,
            "name": "Title",
            "position": 1,
            "values": [
                "Default Title"
            ]
        }
    ],
    "images": [
        
    ],
    "image": {
        ...
        "src": "https://cdn.shopify.com/s/files/1/0512/2064/4021/products/chainmail.jpg?v=1605330798",
        ...
    }
}
*/


// function to encode image file in base64 string
function encode_image(path) {
    var fs = require('fs');
    return fs.readFileSync(path, 'base64');
}

async function ShopifyJSONToProduct(json_in) {
    var id = json_in.id;
    var name = json_in.title;
    var product_type = json_in.product_type.replace(/-/g,"").toLowerCase();
    var image = encode_image(json_in.image.src);

    // TODO get other variants, not just the first? (would need to split them up into many products?)
    var grams = json_in.variants[0].grams;
    var stock = json_in.variants[0].inventory_quantity;
    var materials = []; // An array of type Material
    var body_html = json_in.body_html;

    /* Need a DOM parser since the material breakdown is provided to us wrwapped  in html */
	var dom = new JSDOM(body_html);
    var p_tags = Array.from(dom.window.document.querySelectorAll('p'));
    var total_kg_carbon = 0.00;

    // iterate until you find "Materials"
    var found_materials = false;
    await Promise.all(p_tags.map(async (p_tag) => {
        if (p_tag.innerHTML.toLowerCase() == 'materials') {
            found_materials = true;
        }
        else if (found_materials) {
            // Get the percentage and the name of the material
            var innerHTML = p_tag.innerHTML;
            var split = innerHTML.split(" ");
            var ratio = parseFloat(split[0]) / 100.0;
            var material_name = split[1];

            var kg_carbon = await calculate_footprint(grams, material_name, ratio);
            total_kg_carbon += kg_carbon;
            
            // Append to materials array
            const material = new Material(material_name, ratio, kg_carbon.toFixed(2));
            materials.push(material);
        }
    }));
    
    var rank = calculate_rank(product_type, total_kg_carbon);
    
    var analyses = [];
    var suggestions = [];
    materials.forEach(function (material) {
        if (material.name in analyses_dict) {
            analyses.push(analyses_dict[material.name]);    
        }
        if (material.name in suggestions_dict) {
            suggestions.push(suggestions_dict[material.name]);
        }
        else {
            suggestions.push(suggestions_dict["general"]);
        }
    });
    let product = new Product(
        id, 
        name,
        product_type,
        total_kg_carbon.toFixed(2),
        stock,
        rank, 
        image, 
        materials,
        analyses, 
        suggestions
        );

    return product
}

module.exports = ShopifyJSONToProduct;