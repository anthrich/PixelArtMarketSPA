define(['components/home-page/home', 'services/MockProductService'], function(homePage, MockProductService) {
  var HomePageViewModel = homePage.viewModel;

  describe('Home page view model', function() {

    var homePageParams = {};

    beforeEach(function() {
      homePageParams = {
        route: {},
        productService: new MockProductService()
      };
    });

    it('should have an observable array of products', function() {
      var instance = new HomePageViewModel(homePageParams);

      expect(instance.products.length).toEqual(jasmine.any(Number));
    });

  });

});
