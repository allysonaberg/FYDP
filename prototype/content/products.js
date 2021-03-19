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
              {
                "id": 39446439297205,
                    "product_id": 6582691922101,
                    "title": "Default Title",
                    "price": "32.00",
                    "sku": "",
                    "position": 1,
                    "inventory_policy": "deny",
                    "compare_at_price": null,
                    "fulfillment_service": "manual",
                    "inventory_management": "shopify",
                    "option1": "Default Title",
                    "created_at": "2021-03-14T18:29:38-04:00",
                    "updated_at": "2021-03-14T19:15:16-04:00",
                    "taxable": true,
                    "barcode": "",
                    "grams": 0,
                    "image_id": null,
                    "weight": 0.0,
                    "weight_unit": "kg",
                    "inventory_item_id": 41540470472885,
                    "inventory_quantity": 18,
                    "old_inventory_quantity": 18,
                    "requires_shipping": true,
                    "admin_graphql_api_id": "gid://shopify/ProductVariant/39446439297205"
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
        ...
    ]
    */

raw_products = [
  {
    "id": 1,
    "title": 'Cozy Fleece Perfect 2" Sweatshort',
    "body_html": "<p>Materials</p>\n<p>98% hemp</p>\n<p>2% polyester-re</p>",
    "vendor": "FYDP Development Store",
    "product_type": "Short",
    "status": "active",
    "tags": "",
    "variants": [
      {
        "grams": 150.796,
        "inventory_quantity": 5
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
    "product_type": "T-Shirt",
    "status": "active",
    "tags": "",
    "variants": [
      {
        "grams": 180,
        "inventory_quantity": 69
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
    "product_type": "Pant",
    "status": "active",
    "tags": "",
    "variants": [
      {
        "grams": 317,
        "inventory_quantity": 100
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
    "product_type": "Bodysuit",
    "status": "active",
    "tags": "",
    "variants": [
      {
        "grams": 200,
        "inventory_quantity": 18
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