var lcd = document.querySelector("main");
var box = document.querySelectorAll("#box");
var a = 0;


box[0].addEventListener("click", function () {
    if (a === 1) {
        lcd.style.backgroundColor = "#ff6347";
    } else {
        alert("LCD is off, cannot change color.\n \nPlease click on LCD to turn ON.");
    }
});
box[1].addEventListener("click", function () {
    if (a === 1) {
        lcd.style.backgroundColor = "#ffa500";
    } else {
        alert("LCD is off, cannot change color.\n \nPlease click on LCD to turn ON.");
    }
});
box[2].addEventListener("click", function () {
    if (a === 1) {
        lcd.style.backgroundColor = "#32cd32";
    } else {
        alert("LCD is off, cannot change color.\n \nPlease click on LCD to turn ON.");
    }
});
box[3].addEventListener("click", function () {
    if (a === 1) {
        lcd.style.backgroundColor = "#1e90ff";
    } else {
        alert("LCD is off, cannot change color.\n \nPlease click on LCD to turn ON.");
    }
});


lcd.addEventListener("click", function () {
    if (a === 0) {
        lcd.style.backgroundColor = "whitesmoke";
        a = 1;
    } else {
        var check = confirm("Do You Want to Turn OFF LCD")
        if (check == true) {
            lcd.style.backgroundColor = "#333";
            a = 0;
        }
        else {
            alert("LCD IS NOT TURNED OFF")
        }
    }
});
