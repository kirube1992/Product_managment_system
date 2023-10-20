// Add your JavaScript code here
 // Add your JavaScript code here
 const { MongoClient } = require('mongodb');
 const url = 'mongodb://localhost:27017';
const dbName = 'your-database-name';
var products = [];

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const names = document.getElementById("name").value;
  const description = document.getElementById("dis").value;
  const price = document.getElementById("price").value;
  const stock = document.getElementById("stock").value;

  // Create an object to represent the product
  var product = {
    name: names,
    description: description,
    price: price,
    stock: stock
  };

  // Add the product to the array
  products.push(product);

  // Clear the input fields
  document.getElementById("name").value = "";
  document.getElementById("dis").value = "";
  document.getElementById("price").value = "";
  document.getElementById("stock").value = "";

  // Display the list of products
  displayProducts();
});

function displayProducts() {
  var outputElement = document.getElementById('result');
  outputElement.innerHTML = "";

  // Iterate over the products array and create a list item for each product
  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    var listItem = document.createElement('li');
    listItem.textContent = "Product Name: " + product.name + ", Description: " + product.description + ", Price: " + product.price + ", Quantity in Stock: " + product.stock;

    outputElement.appendChild(listItem);
  }
}
 



    
    




