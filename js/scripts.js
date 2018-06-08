// user interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var inputtedNumber = parseInt($("input#inputtedNumber").val());
    var output = convertedNumber(inputtedNumber);
    $("#result").text(output);
  });
});

// //back end
var convertedNumber = function(inputtedNumber) {
  if (inputtedNumber >= 4000 || inputtedNumber < 1 || isNaN(inputtedNumber)) {
    return "your number is INVALID";
}
    var romanUnits = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IV", "V", "IV","I"];
    var realNumbers = ["1000", "900", "500", "400", "100", "90", "50", "40", "10", "9", "5", "4", "1"];

    var arr = "";
      for ( var i = 0; i<=realNumbers.length; i+=1 ) {
        while(realNumbers[i]<=inputtedNumber){
          arr+=romanUnits[i];
          inputtedNumber-=realNumbers[i];
        }
      }
      return arr;
  }
