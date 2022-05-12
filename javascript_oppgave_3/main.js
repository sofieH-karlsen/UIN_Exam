/**
  Step 1:
   - Forrige knappen er skjult (hidden attr er aktive)
   - Kun steg 1 i nav er grønn (har klassen active)
   - Skjema for navn vises
  Step 2:
   - Forrige knappen er synlig (hidden attr er borte)
   - Kun steg 2 i nav er grønn (har klassen active)
   - Skjema for epost vises
  Step 3:
   - Forrige knappen er synlig
   - Kun steg 3 i nav er grønn (har klassen active)
   - Skjema for alder vises
   - Neste knappen er skjult (hidden attr er aktive)
   - Send knappen er synlig (hidden attr er borte)
  Step 4:
   - Skjema er skjult
   - Kun teksten "Takk ditt skjema er sendt" vises og lages med JavaScript
  Next:
   - Skal endre hvilket step vi er på (hvilket steg som er grønt)
   - Skal trigge validering av skjema
     - Skal vise feilmelding "Feil" hvis validering feiler
     - Skal fjerne feilmelding "Feil" hvis validering passerer etter at vi har hatt en feil (legge til hidden attr)
          - Validering for navn er mellomrom og mer enn 10 bokstaver
          - Validering for e-post er at den må ha en @
          - Validering for alder er over 20
   - Skal lagre det vi skrev i skjema
  Prev:
   - Skal endre hvilket steg vi er på
   - Skal fortsatt vise det vi har skrevet i input
 */

// #### START HER ####
const stepOne = document.getElementById("step_one");
const stepTwo = document.getElementById("step_two");
const stepThree = document.getElementById("step_three");

const steps = document.getElementsByClassName("step");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const submitBtn = document.getElementById("send");

const form = document.querySelector("form");
const layout = document.getElementById("layout");

const errorText = document.getElementsByClassName("error");

const nameInput = document.getElementById("name");
const mailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

let current = 0;

const first = () => {
  stepOne.hidden = false;
  stepTwo.hidden = true;
  stepThree.hidden = true;

  nextBtn.hidden = false;
  prevBtn.hidden = true;
  submitBtn.hidden = true;
};

const second = () => {
  stepOne.hidden = true;
  stepTwo.hidden = false;
  stepThree.hidden = true;

  nextBtn.hidden = false;
  prevBtn.hidden = false;
  submitBtn.hidden = true;
};

const third = () => {
  stepOne.hidden = true;
  stepTwo.hidden = true;
  stepThree.hidden = false;

  nextBtn.hidden = true;
  prevBtn.hidden = false;
  submitBtn.hidden = false;
};

function changeStep() {
  if (current === 0) {
    first();
  } else if (current === 1) {
    second();
  } else if (current === 2) {
    third();
  }
}

const next = () => {
  /* Make input into array and use .includes to validate */
  steps[current].classList.remove("active");
  current++;
  steps[current].classList.add("active");
  changeStep();
};

const prev = () => {
  steps[current].classList.remove("active");
  current--;
  steps[current].classList.add("active");
  changeStep();
};

const validate = () => {
  if (current === 0) {
    const nameArray = Array.from(nameInput.value);
    /* from https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/ */

    if (nameArray.includes(" ") && nameArray.length >= 10) {
      errorText[current].hidden = true;
      next();
    } else {
      errorText[current].hidden = false;
    }
  } else if (current === 1) {
    const mailArray = Array.from(mailInput.value);

    if (mailArray.includes("@")) {
      errorText[current].hidden = true;
      next();
    } else {
      errorText[current].hidden = false;
    }
  } else if (current === 2) {
    const age = Number(ageInput.value);
    /* from https://dev.to/sanchithasr/7-ways-to-convert-a-string-to-number-in-javascript-4l */

    if (age >= 18) {
      errorText[current].hidden = true;

      layout.style.display = "none";

      const h1 = document.createElement("h1");
      const submitText = document.createTextNode("Takk, ditt skjema er sendt");

      h1.appendChild(submitText);
      document.body.appendChild(h1);
    } else {
      errorText[current].hidden = false;
    }
  }
};
const onSubmit = (event) => {
  event.preventDefault();
  console.log("submit");
  validate();
};

nextBtn.addEventListener("click", validate);
prevBtn.addEventListener("click", prev);

form.addEventListener("submit", onSubmit);
