import os
import matplotlib.pyplot as plt
import pandas as pd
from matplotlib.dates import DateFormatter, DayLocator
from datetime import datetime, date

from dotenv import load_dotenv
from model import getCarbonFootprint
from shopify import getOrders, getFulfillment
from typing import Tuple



load_dotenv()


API_KEY = os.getenv("API_KEY")
API_PASSWORD = os.getenv("API_PASSWORD")
DOMAIN = os.getenv("DOMAIN")


if __name__ == "__main__":
	# Get the orders from the shop
	orders = getOrders(DOMAIN, API_KEY, API_PASSWORD)

	date_range = pd.date_range(end=datetime.utcnow(), periods=100)
	carbon_footprints = {date(_date.year, _date.month, _date.day).strftime("%Y-%m-%d"): 0.0 for _date in date_range}
	
	
	for order in orders:
		carbon_footprint = getCarbonFootprint(order)
		_date = datetime.fromisoformat(order.created_at)
		utc_date = _date - _date.utcoffset()
		day = date(utc_date.year, utc_date.month, utc_date.day).strftime("%Y-%m-%d")
		
		carbon_footprints[day] += carbon_footprint

	print(carbon_footprints)

	fig, ax = plt.subplots()
	ax.plot(*carbon_footprints.items())
	
	# Setup formatting of dates


	fig.suptitle("Carbon Footprint Over Time")
	plt.xlabel("Date")
	plt.ylabel("CO2 [g]")
	#fig.savefig('plot.png')
	plt.show()