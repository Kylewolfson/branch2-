$(document).ready(function() {
  $(".triangle form").submit(function(event) {
    event.preventDefault();
    var sideOne = parseInt($("#side1").val());
    var sideTwo = parseInt($("#side2").val());
    var sideThree = parseInt($("#side3").val());

    if ($("#side1").val() === false || $("#side1").val() <= 0) {
      $("#sideOneError").addClass("has-error");
    }
    if ($("#side2").val() === false || $("#side2").val() <= 0) {
      $("#sideTwoError").addClass("has-error");
    }
    if ($("#side3").val() === false || $("#side3").val() <= 0) {
      $("#sideThreeError").addClass("has-error");
    }

    if ((sideOne > 0) && (sideTwo > 0 ) && (sideThree > 0 )) {
      if (sideOne === sideTwo && sideOne === sideThree) {
        $("#equilateral").show();
        $("#notTriangle").hide();
        $("#isosceles").hide();
        $("#scalene").hide();
      }
      else if (sideOne + sideTwo <= sideThree || sideOne + sideThree <= sideTwo || sideTwo + sideThree <= sideOne) {
        $("#notTriangle").show();
        $("#equilateral").hide();
        $("#isosceles").hide();
        $("#scalene").hide();
      }

      else if (sideOne === sideTwo || sideOne === sideThree || sideTwo === sideThree) {
        $("#isosceles").show();
        $("#equilateral").hide();
        $("#notTriangle").hide();
        $("#scalene").hide();
      }
      else {
        $("#scalene").show();
        $("#equilateral").hide();
        $("#isosceles").hide();
        $("#notTriangle").hide();
      }
    }
  });
});
