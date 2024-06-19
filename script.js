fetch("https://hplussport.com/api/products")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData);
    var description = jsonData[0].description;
    console.log(description);
})