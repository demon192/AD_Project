import pandas as pd
from sqlalchemy import create_engine

# Connect to SQL database (replace with your credentials)
engine = create_engine('mysql+pymysql://root:root@localhost/ecommerce')

# Load and store customer_details
customer_df = pd.read_csv('ecommerce_dataset\customer_details.csv')
customer_df.to_sql('customers', con=engine, index=False, if_exists='replace')

# Load and store product_details
product_df = pd.read_csv('ecommerce_dataset\E-commerece sales data 2024.csv')
product_df.to_sql('sales', con=engine, index=False, if_exists='replace')
