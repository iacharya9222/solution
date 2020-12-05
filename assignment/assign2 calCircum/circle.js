var submit = document.getElementById("submitradius");
var radius;
submit.addEventListener("click", (event) => {
    radius = parseInt(document.getElementById("number").value);
})


let button = document.getElementById("button");
button.addEventListener("click", (event) => {
    calcCircumference(radius);
});


function calcCircumference(r) {
    let circumference = 2 * (22 / 7) * r;
    alert(circumference);

}