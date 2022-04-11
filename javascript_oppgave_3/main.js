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

const submitMsg = "Takk, ditt skjema er sendt";

const form = document.querySelector("form");

// const name = 
// const email = 
// const age = 
// https://www.javascripttutorial.net/javascript-dom/javascript-form/

  //INDEX of current step, Current targeeeet?
  // const currentSectionId = currentSection.value;
// id of currentSection?
//map, spread, id. 

// STEP1 HIDE OTHERsections VIew next
// STEP2 HIDE OTHERsections view next & prev
// STEP3 HIDE OTHERSections view prev & eventually submit)
//Buttons disabled until validated 


let current = 0;

const sections = document.querySelectorAll("section");
const currentSection = [...sections][current];

const steps = document.querySelectorAll("li");
const currentStep = [...steps][current];
const currentStepNumber = currentStep.innerHTML;

const stepToggleActive = () => currentStep.classList.toggle("active");

const isHidden = currentSection.hasAttribute("hidden");
//https://www.w3schools.com/jsreF/met_element_setattribute.asp
const sectionToggleHidden = () => {
  if (currentSection.isHidden = true){
    currentSection.removeAttribute("hidden");
    console.log("Is visible");
  } else {
    currentSection.setAttribute("hidden");
    console.log("Removed visibility");
  };
};


/* const showStep = (event) => {
    if (current=0) {
      if (pressedBtn==nextBtn.id) {
        stepToggleActive();
        sectionToggleHidden();
        current++,
        stepToggleActive();
        sectionToggleHidden();
      }

    } else if (current=1) {
    stepToggleActive();
      sectionToggleHidden();
    }


  */

function changeStep(event) {

  const pressedBtn = event.target.id; 
  sectionToggleHidden();
  stepToggleActive();
  console.log(current);
  
  if (pressedBtn == nextBtn.id && current<=2) {
    current++;
    console.log(currentStep);
    console.log(currentStepNumber);
    
  } else if (pressedBtn == nextBtn.id && current>=3) {
      return console.log("select other button");
  } else {
    console.log("go back");
  }  
  
};


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


//TODO: Change to one of btns 
nextBtn.addEventListener("click", (event) => changeStep(event));

  // prevBtn.addEventListener("click", handleClickPrev);
  // form.addEventListener("submit", (event) => {event.preventDefault});
  // submitBtn.addEventListener("submit", handleSubmit (preventDefault));

// onchange update button look
