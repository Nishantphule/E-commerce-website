function filterProducts() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();

    var products = document.querySelectorAll(".product-card");

    if (searchTerm === "") {
        products.forEach(function (product) {
            product.style.display = "block";
            found = true;
        });
    }

    var found = false;

    products.forEach(function (product) {
        var title = product.querySelector("h3").textContent.toLowerCase();
        var description = product.querySelector("p:nth-of-type(1)").textContent.toLowerCase();
        var price = product.querySelector("p:nth-of-type(2)").textContent.toLowerCase();
        var addToCart = product.querySelector("button").textContent.toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm) || price.includes(searchTerm) || addToCart.includes(searchTerm)) {
            product.style.display = "block";
            found = true;
        } else {
            product.style.display = "none";
        }
    });

    if (!found) {
        document.getElementById("noResultMessage").style.display = "block";
    } else {
        document.getElementById("noResultMessage").style.display = "none";
    }
}




document.getElementById("searchInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        filterProducts();
    }
});