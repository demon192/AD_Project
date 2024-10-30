from pymongo import MongoClient
import pandas as pd

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['ecommerce']

# Load and insert e-commerce sales data
sales_data_df = pd.read_csv('ecommerce_dataset\product_details.csv')
db.products.insert_many(sales_data_df.to_dict('records'))
