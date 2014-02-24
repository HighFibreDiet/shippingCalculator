var Package = {
  shippingRate: function() {
    return this.distanceRate() * this.speedRate();
  },

  speedRate: function() {
    var speedRates = {"economy" : 1, "2-day" : 2, "overnight" : 3};
    return speedRates[this.shippingSpeed];
  },

  distanceRate: function() {
    if (this.originCountry === this.destinationCountry) {
      if (parseInt(this.destinationZipCode) === parseInt(this.originZipCode)) {
        return 12;
      } else if (Math.abs(parseInt(this.destinationZipCode) - parseInt(this.originZipCode)) < 10000) {
        return 15;
      } else {
        return 17;
      }
    } else {
      return 25;
    }
  },

  shippingCost: function() {
    var rate = this.shippingRate();
    var baseRate = 3 + this.pickUp;
    return (rate * this.weight) + baseRate;
  }
};

$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var inputtedSide1 = parseFloat($("input#new-side1").val());
    var inputtedSide2 = parseFloat($("input#new-side2").val());
    var inputtedSide3 = parseFloat($("input#new-side3").val());
    var newTriangle = Object.create(Triangle);
    newTriangle.side1 = inputtedSide1;
    newTriangle.side2 = inputtedSide2;
    newTriangle.side3 = inputtedSide3;

    if(!newTriangle.invalid()) {
      var resultType = newTriangle.type();
    
      $("ul#" + resultType).append("<li><span class='" + resultType + "'>" 
          + newTriangle.side1 + ", " 
          + newTriangle.side2 + ", " 
          + newTriangle.side3 + "</span></li>");
    } else {
      alert('Please enter a valid triangle!')
    }

    this.reset();
  });
});
  
