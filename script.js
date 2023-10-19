// Add your JavaScript code here
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const names = document.getElementById("name").value;
    const description = document.getElementById("dis").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;
  
    var outputElement = document.getElementById('result');
    outputElement.textContent = "name" + names + "description" + description;
    
  
    console.log(outputElement);
  });
 



    
    




