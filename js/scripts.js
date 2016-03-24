$(document).ready(function() {

$("#politics").submit(function(event) {
  event.preventDefault();
  var score = parseInt($("#guns").val());
  score += parseInt($("#politician").val());
  score += parseInt($("#taxes").val());
  score += parseInt($("#benefits").val());


if ($("#guns").val() === null) {
  $("#guns-error").addClass("has-error");
}
if ($("#politician").val() === null) {
  $("#politician-error").addClass("has-error");
}
if ($("#taxes").val() === null) {
  $("#taxes-error").addClass("has-error");
}
if ($("#benefits").val() === null) {
  $("#benefits-error").addClass("has-error");
}
if ((parseInt($("#guns").val()) > 0) && (parseInt($("#politician").val()) > 0 ) && (parseInt($("#taxes").val()) > 0 ) && (parseInt($("#benefits").val()) > 0)) {

  if (score < 10) {
    $(".axis").text("liberal");
    if (score < 6) {
      $(".intensity").text("very");
    }
    else {
      $(".intensity").text("somewhat");
    }
  }
  else {
    $(".axis").text("conservative");
      if (score < 14) {
        $(".intensity").text("somewhat");
      }
      else {
        $(".intensity").text("very");
      }
  }
}
});
});
