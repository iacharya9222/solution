var tip;
document.getElementById("tip").addEventListener("click", (event) => {
    tip = parseInt(document.getElementById("tipvalue").value);
});
var percentage;
document.getElementById("percentage").addEventListener("click", (event) => {
    percentage = parseInt(document.getElementById("tippercentage").value);
});
function totalTip() {
    var totalTip = tip * (percentage) / 100;
    window.alert(totalTip);
}
