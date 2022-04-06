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
const firstSpan = document.querySelector("span");
const secondSpan = document.querySelector("ul li:nth-of-type(2) span");
const thirdSpan = document.querySelector("ul li:nth-of-type(3) span");
const forthSpan = document.querySelector("ul li:nth-of-type(4) span");

const writeWords = () => {
  //Math.floor(Math.random() * (max - min) ) + min
  firstSpan.innerHTML =
    wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
  secondSpan.innerHTML =
    wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
  thirdSpan.innerHTML =
    wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
  forthSpan.innerHTML =
    wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
};

writeWords()

if (
  firstSpan.innerHTML === secondSpan.innerHTML ||
  firstSpan.innerHTML === thirdSpan.innerHTML ||
  firstSpan.innerHTML === forthSpan.innerHTML ||
  secondSpan.innerHTML === thirdSpan.innerHTML ||
  secondSpan.innerHTML === forthSpan.innerHTML ||
  thirdSpan.innerHTML === forthSpan.innerHTML
) {
  writeWords()
}

