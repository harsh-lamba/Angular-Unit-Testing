// index.html
describe('product management app', function() {
  var firstProductId;
  it('should automatically redirect to ProductList when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

// Product List Page
  describe('Product List View', function() {
    beforeEach(function() {
      browser.get('index.html');
    });

    it('should navigate to the product list page', function() {
      var pageTitle = element(by.css('.page-header')).getText();
      // Print on console
      /*pageTitle.then(function(text) {
        console.log(text);
      });*/
      expect(pageTitle).toEqual('Products Management System');
    });

    it('Product list should be populated', function() {
      var records = element.all(by.repeater('product in $ctrl.products')).count();
      expect(records).toBeGreaterThan(0);
    });

    it('Product rows should be filtered on entering the search criteria', function() {
      element(by.model('filterProduct')).sendKeys('vegetable oil');    
      var records = element.all(by.repeater('product in $ctrl.products')).count();
      expect(records).toBe(1);
    });

    it('should be navigated to Product Details page on click of a product id', function() {
      var firstProduct = element.all(by.repeater('product in $ctrl.products')).first();
      firstProductId = firstProduct.element(by.css('td a')).getText();
      firstProductId.then(function(text) {
        firstProduct.all(by.css('td')).first().click();
        expect(browser.getLocationAbsUrl()).toEqual("/"+text);
      });
    });

  });
  
  // Product Detail Page
  describe('Product Detail View', function() {
    it('should load detail page', function(){
      firstProductId.then(function(text) {
        browser.get('index.html#!/'+text);
        var pageTitle = element(by.css('h4')).getText();
        expect(pageTitle).toEqual('Products Details for Product ID : '+text);
      });      
    });    
  });
});
