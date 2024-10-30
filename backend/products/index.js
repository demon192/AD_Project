const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Product schema
const productSchema = new mongoose.Schema({
  UniqeId: String,
  ProductName: String,
  BrandName: String,
  Category: String,
  ListPrice: Number,
  SellingPrice: Number,
  ProductSpecification: String,
  TechnicalDetails: String,
  Image: String,
  Variants: [String],
  Stock: Number,
  ProductDescription: String,
  // Add other fields as needed
});

const Product = mongoose.model('Product', productSchema);

// Endpoint to get a product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ UniqeId: req.params.id });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
