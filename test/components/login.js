define(
    ['knockout','components/login-page/login', 'services/MockLoginService'],
    function(ko, loginPage, MockLoginService) {

        var LoginViewModel = loginPage.viewModel;

        describe('Login component view model', function() {

            var loginComponentParams = {};

            beforeEach(function() {
                loginComponentParams = {
                    route: {},
                    loginService: MockLoginService
                };
            });

            it('should have an email observable', function() {
                var instance = new LoginViewModel(loginComponentParams);

                var isObservable = ko.isObservable(instance.email);
                expect(isObservable).toEqual(true);
            });

            it('should have a password observable', function() {
                var instance = new LoginViewModel(loginComponentParams);

                var isObservable = ko.isObservable(instance.password);
                expect(isObservable).toEqual(true);
            });

            it('should have a isLoggedIn observable', function() {
                var instance = new LoginViewModel(loginComponentParams);

                var isObservable = ko.isObservable(instance.isLoggedIn);
                expect(isObservable).toEqual(true);
            });

            describe('login function', function() {
                var testUserEmail = "test.user@test.com",
                    testUserPassword = "password1234";

                beforeEach(function() {
                    loginComponentParams.loginService.logout();
                    loginComponentParams.loginService.createUser(testUserEmail, testUserPassword);
                });

                it('should set isLoggedIn observable to true on success', function() {
                    var instance = new LoginViewModel(loginComponentParams);
                    instance.email(testUserEmail);
                    instance.password(testUserPassword);
                    instance.login();

                    expect(instance.isLoggedIn()).toEqual(true);
                });

                it('should set isLoggedIn observable to false on login fail', function() {
                    var instance = new LoginViewModel(loginComponentParams);
                    instance.email(testUserEmail);
                    instance.password(testUserPassword + "wrongPass");
                    instance.login();

                    expect(instance.isLoggedIn()).toEqual(false);
                });
            });
        });
    }
);
