function checkSpeed() {
    var speedInput = document.getElementById("speed").value;
    var speed = parseFloat(speedInput);
    var speedLimit = 70;
    var demeritPoints = 0;

    if (speed <= speedLimit) {
        document.getElementById("result").innerHTML = "Ok";
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        document.getElementById("result").innerHTML = "Points: " + demeritPoints;
    }

    if (demeritPoints > 12) {
        document.getElementById("result").innerHTML = "License suspended";
    }
}