from geopy.distance import geodesic
from geopy.geocoders import Nominatim
from typing import Tuple

def getCoordinates(address: str):
    geolocator = Nominatim(user_agent="FYDP")
    location = geolocator.geocode(address)

    return location.latitude, location.longitude


def getDistanceMiles(source_coords: Tuple[float, float], dest_coords: Tuple[float, float]):
    return geodesic(source_coords, dest_coords).miles


def gramsToLbs(grams: float):
    return grams / 454.0


def getCarbonFootprintTruck(weight, distance):
    """
    `weight`: weight in grams
    `distance`: distances in miles

    returns the grams of CO2 emitted by an average US freight truck for the weight and distance provided.


    "average freight truck in the U.S. emits 161.8 grams of CO2 per ton-mile"
    - where "ton" is 2000 lbs
    """
    tons = gramsToLbs(weight) / 2000.0
    
    ton_mile = tons * distance
    grams_CO2 = 161.8 / ton_mile
    return grams_CO2


def getCarbonFootprint(order):
    total_weight_grams = order.total_weight
    total_distance_miles = 0.0 # distance in miles
    for line_item in order.line_items:
        if line_item.requires_shipping:
            if line_item.origin_location is not None:
                # Get source coordinates
                address = line_item.origin_location["address1"] + " " + line_item.origin_location["city"]
                source_coordinates: Tuple[float, float] = getCoordinates(address)
                
                # Get distance to destination
                dest_coordinates = (order.shipping_address["latitude"], order.shipping_address["longitude"])
                distance_miles = getDistanceMiles(source_coordinates, dest_coordinates)

                total_distance_miles += distance_miles
    
    if total_distance_miles != 0:
        grams_CO2 = getCarbonFootprintTruck(total_weight_grams, total_distance_miles)
        return grams_CO2

    return None
                