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
    var rate = parseFloat(this.shippingRate());
    var baseRate = 3 + this.pickUp;
    return (rate * this.weight) + baseRate;
  }
};

$(document).ready(function() {
  $("form#new-shipment").submit(function(event) {
    event.preventDefault();

    var originCountry = $("select#origin-country").val();
    var originZipCode = $("input#origin-zip").val();
    var destinationCountry = $("select#destination-country").val();
    var destinationZipCode = $("input#destination-zip").val();
    var shippingSpeed = $("select#shipping-speed").val();
    var pickUp = parseInt($("select#pick-up").val());
    var weight = parseFloat($("input#weight").val());
    var newPackage = Object.create(Package);

    newPackage.originCountry = originCountry;
    newPackage.originZipCode = originZipCode;
    newPackage.destinationCountry = destinationCountry;
    newPackage.destinationZipCode = destinationZipCode;
    newPackage.pickUp = pickUp;
    newPackage.weight = weight;
    newPackage.shippingSpeed = shippingSpeed;

    console.log(weight);

    if(originCountry === "USA" && destinationCountry === "USA" && (originZipCode.length != 5 || destinationZipCode.length != 5)){
      alert("US Zip Codes must be 5 digits long! Please check your values and reenter.");
    } else if (isNaN(weight)) {
      alert("Weight must be entered as a number! Please check your value and reenter.");
    } else {
      var shippingCost = newPackage.shippingCost();
      $(".result").show();
      $("span.cost").text("$" + shippingCost);
    }

    this.reset();
  });
});
  
