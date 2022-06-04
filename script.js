/* function flipping(){
    let anim = document.getElementById("flipper");
    anim.onclick.style = "transform: rotateY(180deg);";
} */

var anim = document.getElementById('flipper');

flipper.style.cursor = 'pointer';
flipper.onclick = function() {
    anim.style = "transform: rotateY(180deg);";
};