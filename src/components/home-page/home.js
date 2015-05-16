define(["knockout", "text!./home.html"], function(ko, homeTemplate, ProductModel) {

	function HomeViewModel(params) {
		var self = this;

		// Settings
		self.pageSize = 10;

		self.productService = params.productService;

		self.products = ko.observableArray();

	    //INIT
		var serviceProducts = self.productService.getProducts(0, self.pageSize);
		self.products.push.apply(self.products, serviceProducts);
	};

	HomeViewModel.prototype.scrolled = function(data, event) {
        var elem = event.target;
        if (elem.scrollTop > (elem.scrollHeight - elem.offsetHeight - 200)) {
            var skip = data.products().length;
            var serviceProducts = data.productService.getProducts(skip, data.pageSize);
            data.products.push.apply(data.products, serviceProducts);
        }
    }

	return { viewModel: HomeViewModel, template: homeTemplate };

});
