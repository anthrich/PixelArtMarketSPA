define([], function () {
    function MockLoginService() {}

    var closure = this;

    closure.users = {};
    closure.isLoggedIn = false;

    /// Create users for mock service. Not a method in actual service.
    MockLoginService.prototype.createUser = function(username, password) {
        closure.users[username] = password;
    }

    MockLoginService.prototype.login = function (username, password) {
        if(closure.users[username] === password)
        {
            closure.isLoggedIn = true;
        }
    };

    MockLoginService.prototype.logout = function() {
        closure.isLoggedIn = false;
    };

    MockLoginService.prototype.isLoggedIn = function() {
        return closure.isLoggedIn;
    }

    return new MockLoginService();
});