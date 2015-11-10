$(function() {

    myInput = $(".jtime > input");
    myInput.change(function () {

    });
    $('select').material_select();
    function underSixty(time) {
        return isNaN(time) || parseInt(time) < 60;
    }
    $("#convert").click(function () {
        if(!$('form')[0].checkValidity()) return;
        event.preventDefault();
        var units = $("#units").get(0).value;
        var distance = $("#distance").get(0).value;
        var minutes = parseInt($("#minutes").get(0).value);
        if (isNaN(minutes)) minutes = 0;
        var seconds = parseInt($("#seconds").get(0).value);
        var centi = $("#centi").get(0).value;
        if (centi.length < 2) {
            centi = parseInt(centi) * 10;
        } else {
            cent = parseInt(centi);
        }
        var multiplier;
        var error="";
        if (units === undefined || distance === undefined || minutes === undefined || centi === undefined || seconds === undefined) {
            error += "Missing field(s)\n";
        }
        if (!underSixty(minutes)) {
            error += "Minutes must be under sixty.\n"
        }
        if (!underSixty(seconds)) {
            error += "Seconds must be under sixty.\n"
        }
        if (error !== "") {
            alert(error);
            return;
        }
        if (units === "Yards") {
          multiplier = 1.165;
      } else {
          multiplier = 1.065;
      }
      if (centi)
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
      $("#resultCard").css("visibility", "visible");
  });
});