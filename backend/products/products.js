// Function to fetch product details from the backend API
async function fetchProduct(productId) {
    try {
        const response = await fetch(`http://localhost:27017/api/products/${productId}`);
        if (!response.ok) {
            throw new Error('Product not found');
        }
        const product = await response.json();
        displayProduct(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        document.getElementById("product-name").textContent = "Product not found";
    }
}

// Function to display product details on the page
function displayProduct(product) {
    document.getElementById("product-name").textContent = product.ProductName;
    document.getElementById("product-image").src = product.Image;
    document.getElementById("product-image").alt = product.ProductName;
    document.getElementById("product-brand").textContent = product.BrandName;
    document.getElementById("product-category").textContent = product.Category;
    document.getElementById("list-price").textContent = product.ListPrice;
    document.getElementById("selling-price").textContent = product.SellingPrice;
    document.getElementById("product-description").textContent = product.ProductDescription;
    document.getElementById("technical-details").textContent = product.TechnicalDetails;
    document.getElementById("stock").textContent = product.Stock;
    document.getElementById("variants").textContent = product.Variants ? product.Variants.join(", ") : "None";
}

// Assuming we get product ID from URL query parameter, e.g., ?id=product123
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id') || 'default-product-id';

// Fetch and display product details on page load
fetchProduct(productId);
