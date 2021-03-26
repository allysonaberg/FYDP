
const productModule = require("../product/product");
const dbModule = require('../db/db_methods');

/* Example of what to expect from Shopify JSON object representing a product */
const goodProduct = {
    "id": 1,
    "title": 'Good Product',
    "body_html": "<p>Materials</p>\n<p>98% wool</p>\n<p>2% polyester</p>",
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
    }
  }

/* Example of a test product that would be sent to use from the front-end */
const testProduct = {
  "product_type": "sweater",
  "grams": 158,
  "materials": [
    {"name": "nylon6", "ratio": 0.3},
    {"name": "cotton", "ratio": 0.7}
  ]
}

/* Tests for the product-parsing functionality */
describe('ShopifyJSONToProduct', function() {
  describe('Parse JSON response from Shopify', function() {
    const getCOPerKgMock = jest.spyOn(dbModule, "get_CO_kg_per_kg_for_material");    
    getCOPerKgMock.mockImplementation((material) => 4.0); // Some fake value

    test('should succeed and return a Product object', function() {
      return productModule.ShopifyJSONToProduct(goodProduct).then(parsed => {
        expect(parsed.name).toBe('Good Product');
        expect(parsed.materials.length).toBe(2);
        expect(parsed.id).toBe(1);
        expect(parsed.product_type).toBe('short');
      });
    });

    test('should succeed and return a TestProduct object', function() {
      return productModule.TestJSONToProduct(testProduct).then(parsed => {
        expect(parsed.materials.length).toBe(2);
        expect(parsed.product_type).toBe('sweater');
      });
    });
  });
});