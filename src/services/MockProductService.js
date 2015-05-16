define(['../models/ProductModel'], function (ProductModel) {
    function MockProductService() {
    }

    MockProductService.prototype.getProducts = function (skip, take) {
        var products = [];
        // TODO: Use services to get this shit
        for (var i = skip; i < take + skip; i++) {
            products.push(new ProductModel({
                id: i,
                name: "Product " + i,
                price: "£" + Math.floor((Math.random() * 40) + 1),
                imgUrl: "img/placeholder_png.jpg",
                description: "Random desc for product " + i
            }));
        };

        return products;
    };

    return MockProductService;
});