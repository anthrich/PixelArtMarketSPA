define(["knockout", "text!./login.html"], function(ko, loginTemplate) {

	function LoginViewModel(params) {
		var self = this;

		self.username = "";
		self.password = "";
	};

	return { viewModel: LoginViewModel, template: loginTemplate };

});
