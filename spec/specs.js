describe("Triangle", function() {
  describe("invalid", function() {
    it("should return true if the three sides do not make a triangle", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 1;
      testTriangle.side2 = 2;
      testTriangle.side3 = 11;
      testTriangle.invalid().should.equal(true);
    });

    it("should return false if the three sides DO make a triangle", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 4;
      testTriangle.side2 = 5;
      testTriangle.side3 = 7;
      testTriangle.invalid().should.equal(false);
    });

    it("should return false if the sides are 2, 10, 11", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 2;
      testTriangle.side2 = 10;
      testTriangle.side3 = 11;
      testTriangle.invalid().should.equal(false);
    });
  });

  describe("badSide", function() {
    it("should return true for a triangle with zero or negative side length", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = -1;
      testTriangle.side2 = 10;
      testTriangle.side3 = 11;
      testTriangle.badSide().should.equal(true);
    });
    it("should return false for a triangle without zero or negative side length", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 100;
      testTriangle.side2 = 10;
      testTriangle.side3 = 11;
      testTriangle.badSide().should.equal(false);
    });
  })


  describe("badSideRatio", function() {
    it("should return true a set of sides with one side too long to make a triangle with the other two", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 100;
      testTriangle.side2 = 10;
      testTriangle.side3 = 11;
      testTriangle.badSideRatio().should.equal(true);
    });
    it("should return false for a triangle with no side too long to make a triangle with the other two sides", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 10;
      testTriangle.side2 = 10;
      testTriangle.side3 = 11;
      testTriangle.badSideRatio().should.equal(false);
    });
  })

  describe("type", function() {
    it("should return equilateral if all three sides are equal", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 4;
      testTriangle.side2 = 4;
      testTriangle.side3 = 4;
      testTriangle.type().should.equal("equilateral");
    });
    it("should return isosceles if any two sides are equal", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 3;
      testTriangle.side2 = 4;
      testTriangle.side3 = 4;
      testTriangle.type().should.equal("isosceles");
    });
    it("should return scalene if all sides are different", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.side1 = 3;
      testTriangle.side2 = 4;
      testTriangle.side3 = 5;
      testTriangle.type().should.equal("scalene");
    });
  });

});

  
