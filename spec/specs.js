describe("Package", function() {
  describe("shippingCost", function() {
    it("should return the base rate for a 0lb package", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 0;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.shippingCost().should.equal(3);
    });

    it("should return the normal economy shipping rate for a 1lb package shipped within the same domestic zip code", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 1;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.shippingCost().should.equal(15);
    });

    it("should return the normal economy shipping rate for a 2lb package shipped within the same domestic zip code", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.shippingCost().should.equal(27);
    });

    it("should return the normal economy shipping rate for a 2lb package shipped domestically to a close zip code", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97217";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.shippingCost().should.equal(33);
    });

    it("should return the normal economy shipping rate for a 2lb package shipped domestically to a non-close zip code", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "15770";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.shippingCost().should.equal(37);
    });
    it("should return one more than the normal economy shipping rate for a 2lb package shipped domestically to a non-close zip code with pickup", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "15770";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = true;
      testPackage.shippingCost().should.equal(38);
    });
    it("should return the overnight shipping rate for a 7lb package shipped internationally", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "Canada" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "5770";
      testPackage.weight = 7;
      testPackage.shippingSpeed = "overnight";
      testPackage.pickUp = false;
      testPackage.shippingCost().should.equal(528);
    });
  });

  describe("shippingRate", function() {
    it("should equal 12 for a same-zip domestic economy shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(12);
    });
    it("should equal 24 for a same-zip domestic 2-day shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "2-day";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(24);
    });
    it("should equal 36 for a same-zip domestic overnight shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "overnight";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(36);
    });
    it("should equal 15 for a close-zip domestic economy shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "90239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(15);
    });
    it("should equal 30 for a close-zip domestic 2-day shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "90239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "2-day";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(30);
    });
    it("should equal 45 for a close-zip domestic overnight shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "90239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "overnight";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(45);
    });
    it("should equal 17 for a far-zip domestic economy shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "05770";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(17);
    });
    it("should equal 34 for a far-zip domestic 2-day shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "05770";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "2-day";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(34);
    });
    it("should equal 51 for a far-zip domestic overnight shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "05770";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "overnight";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(51);
    });
    it("should equal 25 for an international economy speed shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "Venezuela" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(25);
    });
    it("should equal 50 for an international 2-day speed shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "Venezuela" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "2-day";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(50);
    });
    it("should equal 75 for an international overnight speed shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "Venezuela" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "overnight";
      testPackage.pickUp = false;
      testPackage.shippingRate().should.equal(75);
    });
  });

  describe("distanceRate", function() {
    it("should equal 12 for a same-zip domestic shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.distanceRate().should.equal(12);
    });
    it("should equal 15 for a close-zip domestic shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "90239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.distanceRate().should.equal(15);
    });
    it("should equal 17 for a far-zip domestic shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "USA" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "05770";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.distanceRate().should.equal(17);
    });
    it("should equal 25 for an international economy speed shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "Venezuela" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.distanceRate().should.equal(25);
    });
  });
  describe("speedRate", function() {
    it("should equal 1 for an economy speed shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "Venezuela" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "economy";
      testPackage.pickUp = false;
      testPackage.speedRate().should.equal(1);
    });
    it("should equal 2 for a 2-day speed shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "Venezuela" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "2-day";
      testPackage.pickUp = false;
      testPackage.speedRate().should.equal(2);
    });
    it("should equal 3 for an overnight speed shipment", function() {
      var testPackage = Object.create(Package);
      testPackage.originCountry = "USA";
      testPackage.destinationCountry = "Venezuela" ;
      testPackage.originZipCode = "97239";
      testPackage.destinationZipCode = "97239";
      testPackage.weight = 2;
      testPackage.shippingSpeed = "overnight";
      testPackage.pickUp = false;
      testPackage.speedRate().should.equal(3);
    });
  });
});

  
