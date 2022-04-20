let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6 dicee

let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png-dice6.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png- //images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6 dicee

let randomImageSource1 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);

//if player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 win";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player 2 win";
} else {
  document.querySelector("draw");
}
