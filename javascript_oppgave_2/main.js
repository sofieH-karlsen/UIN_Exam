// Start koding lengre ned (ved startHere)

const failColor = "rgb(226, 101, 91)";
const correctColor = "rgb(25, 232, 168)";
const failText = "Feil";
const correctText = "Ny runde";
const invalidText = "Invalid input";

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

const chosenWords = [];

//ID-ing input-elements value
const input1 = document.querySelector("input");
const input2 = document.querySelector("ul li:nth-of-type(2) input");
const input3 = document.querySelector("ul li:nth-of-type(3) input");
const input4 = document.querySelector("ul li:nth-of-type(4) input");

const btn = document.getElementById("test");

const writeWords = () => {
  //Math.floor(Math.random() * (max - min) ) + min
  span1.innerHTML =
    wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
  span2.innerHTML =
    wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
  span3.innerHTML =
    wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
  span4.innerHTML =
    wordList[Math.floor(Math.random() * (wordList.length - 0)) + 0];
};

const uniqueWords = () => {
  //Inspo: https://stackoverflow.com/questions/32029881/javascript-keep-testing-until-true
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
  chosenWords.push(
    span1.innerHTML,
    span2.innerHTML,
    span3.innerHTML,
    span4.innerHTML
  );
};

const emptyInput = () => {
  input1.value = input2.value = input3.value = input4.value = "";
  chosenWords.splice(0, 4);
};

const StartGame = () => {
  emptyInput();
  writeWords();
  uniqueWords();
};

//TODO: Lage sjekken for om man er riktig
const checkIfRight = () => {
  const sortedWords = chosenWords.sort();
  console.log(sortedWords);
  if (
    sortedWords.indexOf(span1.innerHTML) + 1 == input1.value &&
    sortedWords.indexOf(span2.innerHTML) + 1 == input2.value &&
    sortedWords.indexOf(span3.innerHTML) + 1 == input3.value &&
    sortedWords.indexOf(span4.innerHTML) + 1 == input4.value
  ) {
    console.log("YAAAAAAAYYYY");
  } /*input feil*/ else {
    console.log("æææææææææææææ");
  }
};

const validInput = () => {
  if (
    input1.value - 4 <= 0 &&
    input2.value - 4 <= 0 &&
    input3.value - 4 <= 0 &&
    input4.value - 4 <= 0 &&
    input1.value - 4 >= -3 &&
    input2.value - 4 >= -3 &&
    input3.value - 4 >= -3 &&
    input4.value - 4 >= -3
  ) {
    if (
      input1.value != input2.value &&
      input1.value != input3.value &&
      input1.value != input4.value &&
      input2.value != input3.value &&
      input2.value != input4.value &&
      input3.value != input4.value
    ) {
      checkIfRight();
    } else {
      console.log("invalid input");
    }
  } else {
    console.log("invalid input");
  }
};

StartGame();
//TODO: Fikse knapp slik at forskjellige ting blir kjørt avhenging av NÅR den trykkes
btn.addEventListener("click", (event) => {
  validInput();
  //StartGame();
});
