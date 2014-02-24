describe("Triangle", function() {
  describe("invalid", function() {
    it("should return true if the three sides do not make a triangle", function() {
      var testTriangle = Object.create(Triangle);
      testContact.side1 = 1;
      testContact.side2 = 2;
      testContact.side3 = 11;
      testContact.invalid().should.equal(true);
    });
  });
});

  
