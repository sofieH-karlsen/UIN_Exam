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
const startHere = "Her kommer din kode";

//Originally active
const stepOne = document.getElementById("step_one");
//Originally hidden
const stepTwo = document.getElementById("step_two");
const stepThree = document.getElementById("step_three");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const submitBtn = document.getElementById("send");
const errorMsg = document.getElementsByClassName("error");

const form = document.querySelector("form");
const submitMsg = "Takk, ditt skjema er sendt";

// const name = 
// const email = 
// const age = 
// https://www.javascripttutorial.net/javascript-dom/javascript-form/

//Buttons disabled until validated 

let current = 0;

const sections = document.querySelectorAll("section");
const currentSection = [...sections][current];
// sections.length= 
// const otherSections = [...sections][!current];
//er den ok?

const steps = document.querySelectorAll("li");
const currentStep = [...steps][current];
const currentStepNumber = currentStep.innerHTML;
  console.log(currentStepNumber);
const stepToggleActive = () => currentStep.classList.toggle("active");

const showStep = () => {
  if (current==0) {
    /*REMOVE SUPERFLUOUS INFO*/
    stepOne.hidden = false;
    stepTwo.hidden = true;
    stepThree.hidden = true;
    nextBtn.hidden = false;
    prevBtn.hidden = true;
    submitBtn.hidden = true;
    stepToggleActive();

  } else if (current==1) {
    stepOne.hidden = true;
    stepTwo.hidden = false;
    stepThree.hidden = true;
    nextBtn.hidden = false;
    prevBtn.hidden = false;
    submitBtn.hidden = true;
    stepToggleActive();

  } else if (current==2) {
    stepOne.hidden = true;
    stepTwo.hidden = true;
    stepThree.hidden = false;
    nextBtn.hidden = true;
    prevBtn.hidden = false;
    submitBtn.hidden = false;
    stepToggleActive();
  }
};

function changeStep(event) {
    console.log(`At step ${current} when button was clicked`);
    const pressedBtn = event.target.id; 
  
  if (pressedBtn == nextBtn.id) {
      console.log(currentStepNumber);
    current +=1;
  } else if (pressedBtn == prevBtn.id) {
      console.log(currentStepNumber);
    current -=1;
  } else if (pressedBtn == submitBtn.id) {
    console.log("submit")
  } 
  //VALIDATION IN HERE
  showStep();

  //denne skal kanskje fjernes, er også i changeStep
  stepToggleActive(); 
};

// steps in colors must change

// TODO VALIDATION
//Sources: 
// https://www.w3schools.com/js/js_validation.asp
// https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/

// const inputValue = form[${name}].value;? Har ikke "name-attributt"

// const validateForm = () => {
//   let nameVal = () => 
// };

// TODO errorMsg
//Errors
// //HIDDEN ON STEP 1
// const handleClickPrev = (event) => {
//   console.log("clicked prev!")
// };

// // HIDDEN UNTIL STEP 3
// const handleSubmit = (event) => {
//     event.preventDefault()
//     //"Print text: submitMsg
//     console.log("Submitted")
//   // ONLY IF VERIFIED
//   // Form submitted, "Submit"/POST ACTION
// };

nextBtn.addEventListener("click", (event) => changeStep(event));
prevBtn.addEventListener("click", (event) => changeStep(event));
submitBtn.addEventListener("click", (event) => event.preventDefault);

//TODO 

// form.addEventListener("submit", );
// submitBtn.addEventListener("submit", handleSubmit (preventDefault));
// onchange update button look