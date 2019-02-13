let number = 0;
let currentpos = 0
let table = 0;
let totalnumber = 0
var player_one = 1;



function myFunction() {

    number = Math.floor(Math.random() * 6 + 1);

    if (number === 1) {
        document.getElementById("players").innerHTML = innerHTML = "<img src='dice1.png'>";
    } else if (number === 2) {
        document.getElementById("players").innerHTML = innerHTML = "<img src='dice2.png'>";
    } else if (number === 3) {
        document.getElementById("players").innerHTML = innerHTML = "<img src='dice3.png'>";
    } else if (number === 4) {
        document.getElementById("players").innerHTML = innerHTML = "<img src='dice4.png'>";
    } else if (number === 5) {
        document.getElementById("players").innerHTML = innerHTML = "<img src='dice5.png'>";
    } else if (number === 6) {
        document.getElementById("players").innerHTML = innerHTML = "<img src='dice6.png'>";
    }

    totalnumber = totalnumber + number;
    totalnumberold = totalnumber - number;

    if (totalnumber === 5) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber + 20).addClass("red move");
        totalnumber = totalnumber + 20;
        return;
    } else if (totalnumber === 21) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber + 40).addClass("red move");
        totalnumber = totalnumber + 40;
        return;
    } else if (totalnumber === 32) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber + 32).addClass("red move");
        totalnumber = totalnumber + 32;
        return;
    } else if (totalnumber === 39) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber + 10).addClass("red move");
        totalnumber = totalnumber + 10;
        return;
    } else if (totalnumber === 75) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber + 20).addClass("red move");
        totalnumber = totalnumber + 20;
        return;
    } else if (totalnumber === 23) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber - 9).addClass("red move");
        totalnumber = totalnumber - 9;
        return;
    } else if (totalnumber === 37) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber - 9).addClass("red move");
        totalnumber = totalnumber - 9;
        return;
    } else if (totalnumber === 59) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber - 15).addClass("red move");
        totalnumber = totalnumber - 15;
        return;
    } else if (totalnumber === 93) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber - 22).addClass("red move");
        totalnumber = totalnumber - 22;
        return;
    } else if (totalnumber === 97) {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber - 29).addClass("red move");
        totalnumber = totalnumber - 29;
        return;
    } else if (totalnumber > 99) {
        alert('Number bigger then 100, try again')
        $("table").find("td").eq(totalnumber - number).addClass("red ");
        totalnumber = totalnumberold
        return;
    } else if (totalnumber === 99) {
        alert('Well done you won')
        y = confirm("PLAY AGAIN?");
        if (y == true) {
            location.reload();
        } else {
            alert('Good Bye Then!!');
        }
    } else {
        $("table").find("td").eq(totalnumberold).removeClass("red");
        $("table").find("td").eq(totalnumber).addClass("red");
    }

}