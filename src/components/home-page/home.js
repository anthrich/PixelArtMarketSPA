define(["knockout", "text!./home.html"], function(ko, homeTemplate, ProductModel) {

	function HomeViewModel(params) {
		var self = this;

		self.products = ko.observableArray();

	    //INIT
		var serviceProducts = params.productService.getProducts(0, 10);
		self.products.push.apply(self.products, serviceProducts);
		
		console.log();
	};

	HomeViewModel.prototype.doSomething = function() {
		this.message('You invoked doSomething() on the viewmodel.');
	};

	return { viewModel: HomeViewModel, template: homeTemplate };

});
