document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#red").onclick = function() {
        document.querySelector("#header").style.color = "red";
    }
    document.querySelector("#blue").onclick = function () {
        document.querySelector("#header").style.color = "blue";
    }
    document.querySelector("#green").onclick = function() {
        document.querySelector("#header").style.color = "green";
    }
    document.querySelector("#reset").onclick = function() {
        document.querySelector("#header").style.color = "black";
    }

});

// document.getElementById('header').style.color = "red";


// function myFunction(p1, p2) {
//     return p1 * p2;
//   }
//   document.getElementById("demo").innerHTML = myFunction(4, 3);