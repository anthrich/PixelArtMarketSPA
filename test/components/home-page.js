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

        describe('scroll handler', function() {

            var event = {};

            beforeEach(function() {
                event = {};
                event.target = {
                  scrollTop: 0,
                  scrollHeight: 1924,
                  offsetHeight: 875
                }
            });

            it('should load new products when scroll is near bottom', function() {
                event.target.scrollTop = 900;

                var instance = new HomePageViewModel(homePageParams);
                var initialNumberOfProducts = instance.products().length;
                instance.scrolled(instance, event);
                var postScrollProductCount = instance.products().length;

                expect(postScrollProductCount).toEqual(initialNumberOfProducts + instance.pageSize);
            });

            it('should not load unless scroll is near bottom', function() {
                var instance = new HomePageViewModel(homePageParams);
                var initialNumberOfProducts = instance.products().length;
                instance.scrolled(instance, event);
                var postScrollProductCount = instance.products().length;

                expect(postScrollProductCount).toEqual(initialNumberOfProducts);
            });
        });
    });
});
