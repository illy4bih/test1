var _ = require('lodash');

console.log(_);
var array = [1,2,3,4,5,6,7];
console.log(`answer`,_.without(array,3));

var css=document.querySelector("h3");
var color1=document.querySelector("#color1");
var color2=document.querySelector("#color2");
var body=document.getElementById("kreka");

function changeColor(){
    body.style.background="linear-gradient(to right , "+ color1.value+" , "+color2.value+" )";
    css.textContent="Background stil je: "+body.style.background;
}
color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

