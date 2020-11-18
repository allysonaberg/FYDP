import unittest
import json
from APIs.shopify import createOrderObject

fake_line_item = """
{
    "id": 123456,
    "fulfillment_service": "manual",
    "requires_shipping": true,
    "grams": 300000,
    "fulfillment_status": null,
    "origin_location": {
        "country_code": "CA",
        "province_code": "ON",
        "name": "Store Name",
        "address1": "123 Somewhere Place",
        "address2": "",
        "city": "Los Angeles",
        "zip": "12345"
    }
}
"""
fake_order = """
{
    "id": 123,
    "created_at": "2020-11-15T13:50:18-05:00",
    "test": true,
    "total_weight": 300000,
    "fulfillment_status": null,
    "line_items": [],
    "shipping_lines": [],
    "shipping_address": {
        "latitude": 43.5719217,
        "longitude": -79.6832517
    }
}
"""

class ShopifyTest(unittest.TestCase):      

    def testExtractOrderFieldsOfInterest(self):
        # Should be no errors
        fake_order_dict = json.loads(fake_order)
        fake_line_item_dict = json.loads(fake_line_item)
        fake_order_dict["line_items"].append(fake_line_item_dict)
        
        result = createOrderObject(fake_order_dict)

        # Should give an error for missing required fields
        del fake_order_dict["shipping_lines"]

        with self.assertRaises(TypeError):
            result = createOrderObject(fake_order_dict)


