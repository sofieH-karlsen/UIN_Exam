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

const stepOne = document.getElementById("step_one");
const stepTwo = document.getElementById("step_two");
const stepThree = document.getElementById("step_three");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const submitBtn = document.getElementById("send");

const form = document.querySelector("form");

const errorMsg = document.getElementsByClassName("error");
const submitMsg = "Takk, ditt skjema er sendt";

// const name =
// const email =
// const age =
// https://www.javascripttutorial.net/javascript-dom/javascript-form/

//Buttons disabled until validated

let current = 0;

function changeStep(event) {
  const pressedBtn = event.target.id;
  const steps = document.getElementsByClassName("step");
  const currentStep = steps[current];
  const currentStepNumber = currentStep.innerHTML; 
  // const deactivateAllSteps = () => steps.classList?.remove("active");
  const changeStatusCurrent = () => currentStep.classList.add("active");
    
  /*Hjelp fra Sofie/Ivo*/
  if (current == 0 && currentStepNumber==1) {
    stepOne.hidden = false;
    stepTwo.hidden = true;
    stepThree.hidden = true;
    nextBtn.hidden = false;
    prevBtn.hidden = true;
    submitBtn.hidden = true;
  } else if (current == 1 && currentStepNumber==2) {
    stepOne.hidden = true;
    stepTwo.hidden = false;
    stepThree.hidden = true;
    nextBtn.hidden = false;
    prevBtn.hidden = false;
    submitBtn.hidden = true;
 } else if (current == 2 && currentStepNumber==3) {
    stepOne.hidden = true;
    stepTwo.hidden = true;
    stepThree.hidden = false;
    nextBtn.hidden = true;
    prevBtn.hidden = false;
    submitBtn.hidden = false;
  };
  /*--*/
 
  if (pressedBtn == nextBtn.id) {
    current++;
  } else if (pressedBtn == prevBtn.id) {
    current--;
  };

  changeStatusCurrent();
  console.log(current);
};

// TODO
//ikke måtte klikke på neste 2 ganger
//kunne gå fram og tilbake uten at det er noe problem
//validering

nextBtn.addEventListener("click", (event) => changeStep(event));
prevBtn.addEventListener("click", (event) => changeStep(event));

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

// // HIDDEN UNTIL STEP 3
// const handleSubmit = (event) => {
//     event.preventDefault()
//     //"Print text: submitMsg
//     console.log("Submitted")
//   // ONLY IF VERIFIED
//   // Form submitted, "Submit"/POST ACTION
// };

function onSubmit() {
  const submitMsg = document.createElement("h1").innerHTML;
  return submitMsg;
};

submitBtn.addEventListener("submit", (event) => {
  onSubmit(), event.preventDefault();
});

// SUBMIT AVOID REFRESH OF FORM, but show message
// form.addEventListener("submit", );
// onchange update button look
