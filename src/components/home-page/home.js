define(["knockout", "text!./home.html", "../../models/ProductModel"], function(ko, homeTemplate, ProductModel) {

	function HomeViewModel(route) {
		var self = this;

		self.products = ko.observableArray();

		for (var i = 0; i < 10; i++) {
			self.products.push(new ProductModel({
				id: i,
				name: "Product " + i,
				price: "£" + Math.floor((Math.random() * 40) + 1),
				imgUrl: "img/placeholder_png.jpg",
				description: "Random desc for product " + i
			}));
		};
	};

	HomeViewModel.prototype.doSomething = function() {
		this.message('You invoked doSomething() on the viewmodel.');
	};

	return { viewModel: HomeViewModel, template: homeTemplate };

});
