define(["knockout", "text!./login.html"], function(ko, loginTemplate) {

	function LoginViewModel(params) {
		var self = this;

		self.loginService = params.loginService;

		self.email = ko.observable("");
		self.password = ko.observable("");

		self.isLoggedIn = ko.observable(false);

		self.login = function() {
			self.loginService.login(self.email(), self.password());
			var loginSuccess = self.loginService.isLoggedIn();
			self.isLoggedIn(loginSuccess);
		}
	};

	return { viewModel: LoginViewModel, template: loginTemplate };

});
