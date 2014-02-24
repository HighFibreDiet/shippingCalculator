var Triangle = {
  invalid: function() {
    return ( this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0 || this.side1 >= this.side2 + this.side3 || this.side2 >= this.side1 + this.side3 || this.side3 >= this.side1 + this.side2);
  },

  type: function() {
    if(this.side1 === this.side2 && this.side2 === this.side3) {
      return "equilateral";
    } else if(this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
};

$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var inputtedSide1 = $("input#new-side1").val();
    var inputtedSide2 = $("input#new-side2").val();
    var inputtedSide3 = $("input#new-side3").val();
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
  
