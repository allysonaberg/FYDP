const suggestions = require('../content/suggestions');
const analyses = require("../content/analyses");
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

class Product {
    constructor(id, name, kg_carbon, rank, image, materials, analysis, suggestion) {
        this.id = id;
        this.name = name;
        this.kg_carbon = kg_carbon;
        this.rank = rank;
        this.image = image;
        this.materials = materials;
        this.analysis = analysis;
        this.suggestion = suggestion;
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
    "product_type": "",
    "status": "active",
    "published_scope": "web",
    "tags": "",
    "variants": [
        {
            "grams": 500,
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
    var image = encode_image(json_in.image.src);

    // TODO get other variants, not just the first? (would need to split them up into many products?)
    var grams = json_in.variants[0].grams;
    var materials = [];
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
            var percentage = parseFloat(split[0]) / 100.0;
            var material = split[1];

            var kg_carbon = await calculate_footprint(grams, material, percentage);
            total_kg_carbon += kg_carbon;
            
            // Append to materials array
            materials.push(innerHTML);
        }
    }));
    
    var rank = calculate_rank(total_kg_carbon);
    

    /* For now, get a random analysis */
    var analysis = analyses[Math.floor(Math.random() * analyses.length)];

    /* For now, get a random suggestion */
    var suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    let product = new Product(id, name, total_kg_carbon.toFixed(2), rank, image, materials, analysis, suggestion);

    return product
}

module.exports = ShopifyJSONToProduct;