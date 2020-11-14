import json
import os
import requests
from dataclasses import dataclass
from dotenv import load_dotenv
from requests.auth import HTTPBasicAuth
from typing import Any, Dict, List, Optional


DOMAIN = "fydp.myshopify.com"


load_dotenv()


API_KEY = os.getenv("API_KEY")
API_PASSWORD = os.getenv("API_PASSWORD")


@dataclass(frozen=True)
class Order:
    """
    The date and time (ISO 8601 format) when the order was closed.
    E.g: "closed_at": "2008-01-10T11:00:00-05:00"
    """
    created_at: str
    currency: str
    """
    The status of payments associated with the order. Can only be set when the order is created
    "financial_status": "authorized"
    """    
    financial_status: str
    """
    The order's status in terms of fulfilled line items. Valid values:
        fulfilled: Every line item in the order has been fulfilled.
        null: None of the line items in the order have been fulfilled.
        partial: At least one line item in the order has been fulfilled.
        restocked: Every line item in the order has been restocked and the order canceled.
    e.g. "fulfillment_status": "partial"
    """
    fulfillment_status: str
    """
    A list of line item objects, each containing information about an item in the order. Each object has the following properties:
        fulfillable_quantity: The amount available to fulfill, calculated as follows:
        quantity - max(refunded_quantity, fulfilled_quantity) - pending_fulfilled_quantity - open_fulfilled_quantity
        fulfillment_service: The service provider that's fulfilling the item. Valid values: manual, or the name of the provider, such as amazon or shipwire.
        fulfillment_status: How far along an order is in terms line items fulfilled. Valid values: null, fulfilled, partial, and not_eligible.
        grams: The weight of the item in grams.
        id: The ID of the line item.
        price: The price of the item before discounts have been applied in the shop currency.
        price_set: The price of the line item in shop and presentment currencies.
        product_id: The ID of the product that the line item belongs to. Can be null if the original product associated with the order is deleted at a later date.
        quantity: The number of items that were purchased.
        requires_shipping: Whether the item requires shipping.
        sku: The item's SKU (stock keeping unit).
        title: The title of the product.
        variant_id: The ID of the product variant.
        variant_title: The title of the product variant.
        vendor: The name of the item's supplier.
        name: The name of the product variant.
        gift_card: Whether the item is a gift card. If true, then the item is not taxed or considered for shipping charges.
        properties: An array of custom information for the item that has been added to the cart. Often used to provide product customization options. For more information, see The line_item object.
        taxable: Whether the item was taxable.
        tax_lines: A list of tax line objects, each of which details a tax applied to the item.
        title: The name of the tax.
        price: The amount added to the order for this tax in the shop currency.
        price_set: The amount added to the order for this tax in shop and presentment currencies.
        rate: The tax rate applied to the order to calculate the tax price.
        tip_payment_gateway: The payment gateway used to tender the tip, such as shopify_payments. Present only on tips.
        tip_payment_method: The payment method used to tender the tip, such as Visa. Present only on tips.
        total_discount: The total amount of the discount allocated to the line item in the shop currency. This field must be explictly set using draft orders, Shopify scripts, or the API. Instead of using this field, Shopify recommends using discount_allocations, which provides the same information.
        total_discount_set: The total amount allocated to the line item in the presentment currency. Instead of using this field, Shopify recommends using discount_allocations, which provides the same information.
        discount_allocations: An ordered list of amounts allocated by discount applications. Each discount allocation is associated to a particular discount application.
        amount: The discount amount allocated to the line in the shop currency.
        discount_application_index: The index of the associated discount application in the order's discount_applications list.
        amount_set: The discount amount allocated to the line item in shop and presentment currencies.
        origin_location: The location of the line item’s fulfillment origin.
        id: The location ID of the line item’s fulfillment origin. Used by Shopify to calculate applicable taxes. This is not the ID of the location where the order was placed. You can use the FulfillmentOrder resource to determine the location an item will be sourced from.
        country_code: The two-letter code (ISO 3166-1 format) for the country of the item's supplier.
        province_code: The two-letter abbreviation for the region of the item's supplier.
        name: The name of the item's supplier.
        address1: The street address of the item's supplier.
        address2: The suite number of the item's supplier.
        city: The city of the item's supplier.
        zip: The zip of the item's supplier.
        duties: A list of duty objects, each containing information about a duty on the line item.
    """
    line_items: Dict[str, Any]
    """
    The ID of the physical location where the order was processed. This property refers to the POS location. location_id will always be set to null for online orders. 
    If you need to reference the location against an order, then use the FulfillmentOrder resource.
    e.g: "location_id": 49202758
    """
    location_id: int
    """
    The mailing address to where the order will be shipped. This address is optional and will not be available on orders that do not require shipping
    "shipping_address": {
        "address1": "123 Amoebobacterieae St",
        "address2": "",
        "city": "Ottawa",
        "company": null,
        "country": "Canada",
        "first_name": "Bob",
        "last_name": "Bobsen",
        "latitude": "45.41634",
        "longitude": "-75.6868",
        "phone": "555-625-1199",
        "province": "Ontario",
        "zip": "K2P0V6",
        "name": "Bob Bobsen",
        "country_code": "CA",
        "province_code": "ON"
    }
    """
    shipping_address: str
    """
    An array of objects, each of which details a shipping method used. Each object has the following properties:
        code: A reference to the shipping method.
        discounted_price: The price of the shipping method after line-level discounts have been applied. Doesn't reflect cart-level or order-level discounts.
        discounted_price_set: The price of the shipping method in both shop and presentment currencies after line-level discounts have been applied.
        price: The price of this shipping method in the shop currency. Can't be negative.
        price_set: The price of the shipping method in shop and presentment currencies.
        source: The source of the shipping method.
        title: The title of the shipping method.
        tax_lines: A list of tax line objects, each of which details a tax applicable to this shipping line.
        carrier_identifier: A reference to the carrier service that provided the rate. Present when the rate was computed by a third-party carrier service.
        requested_fulfillment_service_id: A reference to the fulfillment service that is being requested for the shipping method. Present if the shipping method requires processing by a third party fulfillment service; null otherwise.
    """
    shipping_lines: List[Dict[str, Any]]
    """
    Whether this is a test order (true/false)
    """
    test: bool
    """
    The sum of all line item weights in grams.
    """
    total_weight: int
    """
    The date and time ( ISO 8601 format) when the order was canceled.
    "cancelled_at": null
    """
    cancelled_at: Optional[str] = None
    customer: Optional[Dict[str, Any]] = None


if __name__ == "__main__":
    # Get the orders from the shop
    url = f"https://{DOMAIN}/admin/api/2020-10/orders.json"    
    auth = HTTPBasicAuth(API_KEY, API_PASSWORD)
    r = requests.get(url, auth=auth)

    # Parse the response
    json_result: Dict[str, str] = json.loads(r.text)
    orders: List[Order] = []
    for order_dict in json_result["orders"]:
        # Unpack into object
        clean_dict = {}
        for field_name, _ in Order.__dataclass_fields__.items():
            if field_name in order_dict: # Some values can be null, and thus would not be sent back in the response.
                clean_dict[field_name] = order_dict[field_name]
        
        order = Order(**clean_dict)
        print(order)
        orders.append(order)
