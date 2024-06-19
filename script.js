fetch("https://hplussport.com/api/products?order=price")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    for(items in jsonData) {
        // Display all of the product names
        var productName = jsonData[items].name;
        var products = document.createElement("li");
        products.innerHTML = productName;
        document.body.appendChild(products);

        // Display all of the product images
        var productImage = jsonData[items].image;
        var image = document.createElement("img");
        image.setAttribute("src", productImage);
        document.body.appendChild(image);

        // Display all of the product prices
        var price = jsonData[items].price;
        var priceElement = document.createElement("h6");
        priceElement.innerHTML = price;
        document.body.appendChild(priceElement);
    }
});