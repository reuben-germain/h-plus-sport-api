fetch("https://hplussport.com/api/products")
.then(function(response) {
    return response.json();
})
.then(function(jsonData) {
    console.log(jsonData);
    var name = jsonData[0].name;
    console.log(name);

    var product = document.createElement("li");
})