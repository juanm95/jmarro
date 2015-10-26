$(function() {
  $("#convert").click(function () {
    var units = $("#units").get(0).selectedItemLabel;
    console.log($("#distance").get(0));
    var distance = $("#distance").get(0).value;
    var minutes = parseInt($("#minutes").get(0).value);
    var seconds = parseInt($("#seconds").get(0).value);
    var centi = parseInt($("#centi").get(0).value);
    var multiplier;
    if (units === "Yards") {
      multiplier = 1.165;
    } else {
      multiplier = 1.065;
    }
    seconds = minutes*60 + seconds + centi * .01;
    seconds *= multiplier;
    minutes = Math.trunc(seconds/60);
    seconds -= minutes*60;
    $("#repeatDistance").html(distance.toString() + " " +units);
    $("#result").html(minutes + " minutes and " + seconds.toFixed(2) + " seconds");
  });
});