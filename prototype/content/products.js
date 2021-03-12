const dir = __dirname;
const shirt = dir + '/Assets/shirt.png'
const shorts = dir + '/Assets/shorts.png'
const pants = dir + '/Assets/pants.png'
const bodysuit = dir + '/Assets/bodysuit.png'

/* JSON response from the shopify /products endpoint looks like:
"products": [
        {
            "id": 6073135694005,
            "title": "chain mail suit",
            "body_html": "<p>Materials</p>\n<p>50% cotton</p>\n<p>50% polyester</p>",
            "vendor": "FYDP Development Store",
            "product_type": "",
            "created_at": "2020-11-14T00:13:16-05:00",
            "handle": "chain-mail-suit",
            "updated_at": "2021-03-11T13:29:44-05:00",
            "published_at": "2020-11-14T00:19:41-05:00",
            "template_suffix": "",
            "status": "active",
            "published_scope": "web",
            "tags": "",
            "admin_graphql_api_id": "gid://shopify/Product/6073135694005",
            "variants": [
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
                "id": 22782694162613,
                "product_id": 6073135694005,
                "position": 1,
                "created_at": "2020-11-14T00:13:18-05:00",
                "updated_at": "2020-11-14T00:13:18-05:00",
                "alt": null,
                "width": 679,
                "height": 1015,
                "src": "https://cdn.shopify.com/s/files/1/0512/2064/4021/products/chainmail.jpg?v=1605330798",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/22782694162613"
            }
        },
        {
            "id": 6074075087029,
            "title": "omelette dress",
            "body_html": "",
            "vendor": "FYDP Development Store",
            "product_type": "",
            "created_at": "2020-11-14T20:44:03-05:00",
            "handle": "omelette-dress",
            "updated_at": "2020-12-18T14:34:56-05:00",
            "published_at": "2020-11-14T20:44:48-05:00",
            "template_suffix": "",
            "status": "active",
            "published_scope": "web",
            "tags": "",
            "admin_graphql_api_id": "gid://shopify/Product/6074075087029",
            "variants": [
                
            ],
            "options": [
                {
                    "id": 7762604654773,
                    "product_id": 6074075087029,
                    "name": "Size",
                    "position": 1,
                    "values": [
                        "s",
                        "m",
                        "l"
                    ]
                }
            ],
            "images": [
                
            ],
            "image": {
                "id": 22792264286389,
                "product_id": 6074075087029,
                "position": 1,
                "created_at": "2020-11-14T20:44:05-05:00",
                "updated_at": "2020-11-14T20:44:05-05:00",
                "alt": null,
                "width": 1200,
                "height": 1200,
                "src": "https://cdn.shopify.com/s/files/1/0512/2064/4021/products/eggdress.jpg?v=1605404645",
                "variant_ids": [],
                "admin_graphql_api_id": "gid://shopify/ProductImage/22792264286389"
            }
        }
    ]
    */

    /*
const productList = [
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
    },
    {
      id: 2,
      name: 'Gonzalo T-shirt',
      carbon: '202.8',
      rank: 'C',
      image: shirt,
      material1: '12% cotton',
      material2: '88% Polyester',
      analysis: 'This is a cool shirt but it has a ton of polyester lolz',
      suggestion: 'Consider swapping polyester for silk ooh la la. Also, will write some random text here so that we can see what this shiz looks like when it is many many many lines longggggggggg.'
    },
    {
      id: 3,
      name: 'Skyline Pant',
      carbon: '100.4',
      rank: 'B',
      image: pants,
      material1: '18% cotton',
      material2: '82% Polyester',
      analysis: 'This product also has a lot of polyester. Blah Blah blooh shirtz yay!! This is more text to fill the void',
      suggestion: 'Sick pants. Gonna write some text here so that we can have multiple linezzz'
    },
    {
      id: 4,
      name: 'Contour Crewneck Longsleeve Bodysuit',
      carbon: '400.5',
      rank: 'D',
      image: bodysuit,
      material1: '80% cotton',
      material2: '20% Polyester',
      analysis: 'This has like no polyester but a ton of carbon is released while making it',
      suggestion: 'This is a really long suggestion but it has nothing to say haha haha haha text text text text text. Consider doing other things'
    }
]*/
raw_products = [
  {
    "id": 1,
    "title": 'Cozy Fleece Perfect 2" Sweatshort',
    "body_html": "<p>Materials</p>\n<p>78% cotton</p>\n<p>22% polyester</p>",
    "vendor": "FYDP Development Store",
    "product_type": "",
    "status": "active",
    "tags": "",
    "variants": [
      {
        "grams": 1234
      }
    ],
    "options": [],
    "image": {
        "id": 22782694162613,
        "product_id": 6073135694005,
        "position": 1,
        "src": shorts,
        "variant_ids": [],
    }
  },

  {
    "id": 2,
    "title": 'Gonzalo T-shirt',
    "body_html": "<p>Materials</p>\n<p>12% cotton</p>\n<p>88% polyester</p>",
    "vendor": "FYDP Development Store",
    "product_type": "",
    "status": "active",
    "tags": "",
    "variants": [
      {
        "grams": 14
      }
    ],
    "options": [],
    "image": {
        "id": 22782694162613,
        "product_id": 6073135694005,
        "position": 1,
        "src": shirt,
        "variant_ids": [],
    }
  },
  {
    "id": 3,
    "title": 'Skyline Pant',
    "body_html": "<p>Materials</p>\n<p>18% cotton</p>\n<p>82% polyester</p>",
    "vendor": "FYDP Development Store",
    "product_type": "",
    "status": "active",
    "tags": "",
    "variants": [
      {
        "grams": 100
      }
    ],
    "options": [],
    "image": {
        "id": 22782694162613,
        "product_id": 6073135694005,
        "position": 1,
        "src": pants,
        "variant_ids": [],
    }
  },
  {
    "id": 4,
    "title": 'Contour Crewneck Longsleeve Bodysuit',
    "body_html": "<p>Materials</p>\n<p>80% cotton</p>\n<p>20% polyester</p>",
    "vendor": "FYDP Development Store",
    "product_type": "",
    "status": "active",
    "tags": "",
    "variants": [
      {
        "grams": 100
      }
    ],
    "options": [],
    "image": {
        "id": 22782694162613,
        "product_id": 6073135694005,
        "position": 1,
        "src": bodysuit,
        "variant_ids": [],
    }
  },
  
]
module.exports = raw_products;