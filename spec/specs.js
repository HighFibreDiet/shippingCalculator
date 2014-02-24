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
  });

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

  
