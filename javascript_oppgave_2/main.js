// Start koding lengre ned (ved startHere)

const failColor = "rgb(226, 101, 91)";
const correctColor = "rgb(25, 232, 168)";
const failText = "Feil";
const correctText = "Ny runde";

const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

// #### START HER ####
//Got id-ing all the span elements WITHOUT using ID (inspo: https://bobbyhadz.com/blog/javascript-get-nth-element-of-type)
const span1 = document.querySelector("span");
const span2 = document.querySelector("ul li:nth-of-type(2) span");
const span3 = document.querySelector("ul li:nth-of-type(3) span");
const span4 = document.querySelector("ul li:nth-of-type(4) span");

//ID-ing input-elements value
const input1 = document.querySelector("input");
const input2 = document.querySelector("ul li:nth-of-type(2) input");
const input3 = document.querySelector("ul li:nth-of-type(3) input");
const input4 = document.querySelector("ul li:nth-of-type(4) input");

const btn = document.getElementById("test");

const writeWords = () => {
  //Math.floor(Math.random() * (max - min) ) + min
  span1.innerHTML = wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
  span2.innerHTML = wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
  span3.innerHTML = wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
  span4.innerHTML = wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
};

const emptyInput = () => {
  input1.value = input2.value = input3.value = input4.value = "";
};

const StartGame = () => {
  emptyInput();
  writeWords();
  let diffWords = false;
  while (diffWords == false) {
    if (
      span1.innerHTML != span2.innerHTML &&
      span1.innerHTML != span3.innerHTML &&
      span1.innerHTML != span4.innerHTML &&
      span2.innerHTML != span3.innerHTML &&
      span2.innerHTML != span4.innerHTML &&
      span3.innerHTML != span4.innerHTML
    ) {
      diffWords = true;
    } else {
      writeWords();
    }
  }
};

StartGame();

btn.addEventListener("click", (event) => {
  StartGame();
});
