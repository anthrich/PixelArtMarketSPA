define([], function(){

	function ProductModel(data) {
		var self = this;

		self.id = data.id || null;
		self.name = data.name || null;
		self.price = data.price || null;
		self.imgUrl = data.imgUrl || null;
		self.description = data.description || null;
	}

	return ProductModel;
});