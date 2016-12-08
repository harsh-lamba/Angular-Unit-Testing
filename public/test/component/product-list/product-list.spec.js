'use strict';

describe('Component: productList', function () {
  var controller;
  var productAPI;
  var scope;

  beforeEach(module('module.productService'));
  beforeEach(module('myApp'));
  beforeEach(module('templates'));
  beforeEach(inject(function(_$rootScope_, _$componentController_, _productAPI_) {
    var $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    productAPI = _productAPI_;
    var $componentController = _$componentController_;
    controller = $componentController('productList', {$scope: scope});
  }));

  describe('Function should be defined', function() {
    it('function: routerOnActivate', function() {
      expect(controller.$routerOnActivate).toBeDefined();      
    });
    it('function: navigateToProductDetails', function() {
      expect(controller.navigateToProductDetails).toBeDefined();      
    });
    it('function: deleteProduct', function() {
      expect(controller.deleteProduct).toBeDefined();      
    });
    it('function: open', function() {
      expect(controller.open).toBeDefined();      
    });
  });

  describe('Function: routerOnActivate', function() {
    var productsData;
    beforeEach(inject(function(_$q_) {
      productsData = [{"id":138,"sku":5053,"name":"Aramusk Bath Soap For Men   ","description":"","price":108,"mrp":108,"stock":100,"image":"aramusk-bath-soap-for-men-3-x-125-g.png","packing":"3 X 125 g ","status":"Active"},{"id":248,"sku":386,"name":"Adidas Deo Ice Dive Deo Body Spray   ","description":"","price":199,"mrp":199,"stock":20,"image":"adidas-adidas-body-deo-ice-dive-150-ml.png","packing":"150 ml ","status":"Inactive"},{"id":318,"sku":6124,"name":"Baba Ramdev Patanjali Anti Bacterial Herbal Hand Wash Refill   ","description":"Hand Wash","price":40,"mrp":40,"stock":50,"image":"baba-ramdev-patanjali-anti-bacterial-herbal-hand-wash-refill-200-ml.png","packing":"200 ml ","status":"Active"},{"id":432,"sku":5625,"name":"Adidas Ice Dive Shower Gel   ","description":"Shower Gel","price":150,"mrp":150,"stock":10,"image":"adidas-ice-dive-shower-gel-250-ml.png","packing":"250 ml ","status":"Active"},{"id":448,"sku":2298,"name":"Axe Denim Cologne Talc   ","description":"Talc","price":115,"mrp":115,"stock":0,"image":"1327941212-Jan30-1147.png","packing":"300 g ","status":"Active"},{"id":490,"sku":8909,"name":"All Out Off Family Insect Repellent Lotion   ","description":"Lotion","price":39,"mrp":39,"stock":30,"image":"missingimagegr200.png","packing":"50 ml ","status":"Active"},{"id":589,"sku":4202,"name":"Baba Ramdev Patanjali Gulab Jal   ","description":"Gulab Jal","price":25,"mrp":25,"stock":20,"image":"patanjali-gulab-jal-120-ml.png","packing":"120 ml ","status":"Active"},{"id":769,"sku":8152,"name":"18 Herbs K-Oil 100% Herbal Care   ","description":"Hair Oil","price":275,"mrp":275,"stock":100,"image":"18-herbs-18-herbs-k-oil-100-herbal-care-100-ml-1.png","packing":"100 ml ","status":"Active"},{"id":797,"sku":8273,"name":"Baba Ramdev Patanjali Kesh Kanti Anti Dandruff Hair Cleanser With Natural Conditioner   ","description":"Anti Dandruff Shampoo","price":110,"mrp":110,"stock":22,"image":"baba-ramdev-patanjali-kesh-kanti-hair-cleanser-with-natural-conditioner-200-ml.png","packing":"200 ml ","status":"Active"},{"id":901,"sku":3936,"name":"Roots Hair Brush 2011   ","description":"Hair Brush","price":175,"mrp":175,"stock":5,"image":"roots-hair-brush-2011-1-pc.png","packing":"1 pc ","status":"Active"},{"id":918,"sku":4273,"name":"Biotique Bio Henna Fresh Powder Hair Color   ","description":"Powder","price":199,"mrp":199,"stock":50,"image":"biotique-bio-henna-fresh-powder-hair-color-90-g.png","packing":"90 g ","status":"Active"},{"id":943,"sku":7904,"name":"Brylcreem Anti Dandruff Aqua Oxy Hair Gel   ","description":"Hair Gel","price":400,"mrp":40,"stock":15,"image":"brylcreem-brylcreem-anti-dandruff-aqua-oxy-hair-gel-50-g.png","packing":"50 g ","status":"Inactive"},{"name":"Johnson baby powder","description":"Johnson baby powder","price":"100","stock":"20","packing":"100gm","status":"Active","id":944},{"name":"Vegetable Oil","description":"Vegetable Oil","price":"250","stock":"100","packing":"5L","status":"Active","id":945},{"name":"Himalaya Baby Oil","description":"Himalaya Baby Oil","price":"500","stock":"5000","packing":"1L","status":"Active","id":946},{"name":"Johnson Baby Lotion","description":"Johnson Baby Lotion","price":"350","stock":"200","packing":"100gm","status":"Active","id":948},{"name":"Johnson Baby Soap","description":"Johnson Baby Soap","price":"300","stock":"100","packing":"100gm","status":"Active","id":949}];
      var $q = _$q_;
      var deferred = $q.defer();
      spyOn(productAPI, 'get').and.returnValue(deferred.promise);
      controller.$routerOnActivate();
      deferred.resolve(productsData);
      scope.$apply();
    }));
    
    it('ProductAPI get() to have been called', function() {
      expect(productAPI.get).toHaveBeenCalled();
      expect(productAPI.get).toHaveBeenCalledWith('products');
    });

    it('Product List should be populated', function() {
      expect(controller.products).toBeDefined();
    });

    describe('DOM Testing', function() {
      var element;
      var isolateScope;
      beforeEach(inject(function(_$compile_) {
        var $compile = _$compile_;        
        element = angular.element('<product-list></product-list>');
        element = $compile(element)(scope);
        scope.$apply();
        isolateScope = element.isolateScope();
        isolateScope.$ctrl = controller;
        isolateScope.$apply();
        spyOn(isolateScope.$ctrl, 'open').and.returnValue(true);
        spyOn(isolateScope.$ctrl, 'deleteProduct').and.returnValue(true);
      }));

      it('Element should be compiled into a template function', function() {
        expect(element.html()).toExist();        
      });

      it('DOM should be populated with the product records', function() {        
        expect(element[0].querySelectorAll('.record> tr').length).toEqual(17);
      });

      it('Click on delete button should call deleteProduct function', function() {
        var deleetBtn = element[0].querySelector('button.fa-trash-o');
        deleetBtn.click();
        expect(isolateScope.$ctrl.deleteProduct).toHaveBeenCalled();
      });

      it('Click on add/edit button should call open function', function() {
        var addButton = element[0].querySelector('button.add-new-product');
        addButton.click();
        expect(isolateScope.$ctrl.open).toHaveBeenCalled();
      });

    });

  });


});
