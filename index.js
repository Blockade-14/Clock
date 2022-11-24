var clock = document.getElementById("clock")

for(var i=0; i<=60; i++){
    
    var container = document.createElement("div");
    container.classList.add("linebox");
    container.style.transform = "rotate(" + i * 6 + "deg)"

    var line = document.createElement("div");

    if(i % 5 === 0){
        line.classList.add("hour");
    }else {
        line.classList.add("half-hour");
    }

    container.appendChild(line);
    clock.appendChild(container);
}

for(var i=0; i<3; i++){
    
    var container2 = document.createElement("div");
    container2.classList.add("linebox");

    var arrow = document.createElement("div");
    arrow.classList.add("arrow");

    container2.appendChild(arrow);
    clock.appendChild(container2);
}

var arrows = document.querySelectorAll(".arrow");
    arrows[0].classList.add("second");
    arrows[1].classList.add("minute");
    arrows[2].classList.add("arrow-hour");

function setClock(){

    var d = new Date();
    // var milliseconds = d.getMilliseconds();
    var second = d.getSeconds();
    var minute = d.getMinutes();
    var hour = d.getHours();

    // var secondsRot = 360 / 60 * second;
    // var millisecondsRot = 360 / 60000 * milliseconds;

    // arrows[0].style.transform = "rotate(" + (secondsRot + millisecondsRot ) + "deg)"
    arrows[0].style.transform = "rotate(" + (360 / 60 * second) + "deg)";
    arrows[1].style.transform = "rotate(" + (360 / 60 * minute) + "deg)";
    arrows[2].style.transform = "rotate(" + ((360 / 12 * hour) + (360 / 12 * minute / 60)) + "deg)";
};

setClock();

setInterval(function(){

    setClock();

// }, 60)
}, 1000);
