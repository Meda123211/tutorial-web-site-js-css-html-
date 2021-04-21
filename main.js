Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

const text = document.querySelectorAll(".story-paragraph ");

function scroll() {
  window.onscroll = function () {
    var top = window.scrollY;
    for (i = 0; i < text.length; i++) {
      if (top >= 1900 && top <= 2900) {
        text[i].style.color = "dodgerblue";

        text[i].style.transition = "all 2s ";
        text[i].style.fontSize = "20px";
      } else {
        text[i].style.color = "grey";
        text[i].style.fontSize = "1.8rem";
      }
    }
  };
}
scroll();
/*
let landingPage = document.querySelector(".img-im");
//Get array of images
let imgsArray = ["one", "three", "two"];
i = imgsArray.length;
// function to randomize imgs

function random() {
  let randomNumber = Math.floor(Math.random() * i);
  landingPage.style.backgroundImage =
    'url("./' + imgsArray[randomNumber ] + '.jpg")';
  console.log(randomNumber);
}

setInterval(random, 2000);
*/

const color = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];
let i = 0;
Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  console.log(item);
  item.style.cssText = `background-color:${color[i++]}`;
});

const container = document.querySelector(".container");
document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});
