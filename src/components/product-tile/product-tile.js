define(['knockout', 'text!./product-tile.html', '../../models/ProductModel'], function(ko, template, ProductModel) {

	function ProductTileViewModel(params) {
		this.data = new ProductModel(params.data);
	}

	return { viewModel: ProductTileViewModel, template: template };
});
