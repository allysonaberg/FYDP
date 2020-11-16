import argparse
import os
import csv
import matplotlib.pyplot as plt
import pandas as pd
from matplotlib.dates import DateFormatter, DayLocator, date2num
from datetime import datetime, date

from dotenv import load_dotenv
from model import getCarbonFootprint
from shopify import getOrders, getFulfillment
from typing import Tuple






load_dotenv()


API_KEY = os.getenv("API_KEY")
API_PASSWORD = os.getenv("API_PASSWORD")
DOMAIN = os.getenv("DOMAIN")

print("PYTHON TESTTTYYYY")

def writeToCSV(csv_filename, data):
	with open(csv_filename, 'w') as f:
		# Write to text file
		writer = csv.writer(f, delimiter='\t')
		
		writer.writerow(["date", "grams_carbon"])
		for _date, grams_carbon in data.items():
			writer.writerow([_date, grams_carbon])

def plotToPNG(carbon_footprints):
	x, y = zip(*carbon_footprints.items())
	fig = plt.figure()
	fig.suptitle("Carbon Footprint Over Time")

	# Setup formatting of dates
	plt.plot_date(date2num(x), y, fmt="bo", tz=None, xdate=True)	
	
	plt.xlabel("Date")
	plt.ylabel("CO2 [g]")
	plt.xticks(rotation=45)
	plt.tight_layout()
	
	fig.savefig('plot.png')


if __name__ == "__main__":
	# Parse command line arguments
	# parser = argparse.ArgumentParser("Calculate Carbon Footprint")
	# parser.add_argument("csv_filename", type=str, help="Absolute path to the csv file to write data to.")
	# args = parser.parse_args()

	# Get the orders from the shop

	print("STARTING THE SCRIPT")
	orders = getOrders(DOMAIN, API_KEY, API_PASSWORD)

	date_range = pd.date_range(end=datetime.utcnow(), periods=100)
	carbon_footprints = {_date.date(): 0.0 for _date in date_range}
	
	
	for order in orders:
		carbon_footprint = getCarbonFootprint(order)
		_date = datetime.fromisoformat(order.created_at)
		utc_date = _date - _date.utcoffset()
		day = utc_date.date()
		
		carbon_footprints[day] += carbon_footprint

	# writeToCSV(args.csv_filename, carbon_footprints)

	# plotToPNG(carbon_footprints)
	for date, grams_carbon in carbon_footprints.items():
		print(f"{date},{grams_carbon},")

