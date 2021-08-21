var randomNumber1 = Math.ceil(Math.random()*6)
var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomImage1;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);

var randomNumber2 = Math.ceil(Math.random()*6)
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomImage1>randomImage2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 wins!";
}
else if (randomImage2>randomImage1) {
  document.querySelector("h1").innerHTML = "🏆 Player 2 wins!";
}
else {
document.querySelector("h1").innerHTML = "🔥 Draw!";
}
