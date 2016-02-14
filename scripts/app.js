
function convertTimes(event) {
  var units = $("#units").get(0).value;
  var distance = parseInt($("#distance").get(0).value);
  var minutes = parseInt($("#minutes").get(0).value);
  var seconds = parseInt($("#seconds").get(0).value);
  var centi = parseInt($("#milliseconds").get(0).value);
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
  if (parseInt(distance) == 1) {
    units = units.slice(0, -1);
  }
  $("#repeatDistance").html(distance.toString() + " " +units);
  if (minutes == 0) {
    $("#result").html(seconds.toFixed(2) + " seconds");
  } else {
    $("#result").html(minutes + " minutes and " + seconds.toFixed(2) + " seconds");
  }
  $("#resultCard").openModal();
  return false;
}