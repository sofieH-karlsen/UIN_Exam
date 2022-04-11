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

let currentTab = 0;

showTab(currentTab)

function showTab(n){
  let tab = document.getElementsByClassName('step');
  tab[n].style.display = 'block';
  if(n == 0){
    document.getElementById('prev').style.display = 'none';
  } else {
    document.getElementById('prev').style.display = 'block';
  }

  if(n == (tab.length - 1)){
    document.getElementById('send').style.display = 'block';
  } else {
    document.getElementById('next').style.display = 'block';
  }
}

function navigateForm(n){
  let formStep = document.getElementsByClassName('step');
  if(n == 1 && !validateForm()) return false;
  formStep[currentTab].style.display = 'none';
  currentTab = currentTab + n;
  if(currentTab >= formStep.length){
    document.getElementById('send').submit();
    return false;
  }

  showTab(currentTab);
}

function validateFields(){
  let tabs, input, valid = true;
  tabs = document.getElementsByClassName('step');
  input = tabs[currentTab].getElementsByTagName('input');
  for(let i = 0; i < input.length; i++){
    if(input[i].value = ''){
      input[i].className += 'error';
      valid = false;
    }
  }
  if(valid){
    document.getElementsByClassName('step') += 'finished';
  }
  return valid;
}

function formNavigation(n){
  let activeSteps, i = document.getElementsByClassName('step');
  for(i = 0; i < activeSteps.length; i++ ){
    activeSteps[i].className = activeSteps[i].className.replace(" active", "");
  }
  activeSteps[n] += 'active';
}