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
let currentTab = 1;

const tabsList = document.getElementsByClassName("step");
const tab1 = document.getElementById("step_one")
const tab2 = document.getElementById("step_two")
const tab3 = document.getElementById("step_three")

const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")
const sendBtn = document.getElementById("send")


const switchTab = () => {
  if(currentTab == 1){
    tab1.hidden = false
    tab2.hidden = true
    prevBtn.hidden = true
  } else if(currentTab == 2){
    tab1.hidden = true
    tab2.hidden = false
    tab3.hidden = true
    prevBtn.hidden = false
    nextBtn.hidden = false
    sendBtn.hidden = true
  }else if(currentTab == 3){
    tab1.hidden = true
    tab2.hidden = true
    tab3.hidden = false
    nextBtn.hidden = true
    sendBtn.hidden = false
  }
}

const nextTab =()=>{
  if (currentTab >= 1 && currentTab < tabsList.length){
    currentTab +=1
    switchTab()
  }
  console.log(currentTab)
}

const prevTab =()=>{
  if (currentTab >= 1 && currentTab <= tabsList.length){
    currentTab -=1
    switchTab()
  }
  console.log(currentTab)
}

nextBtn.addEventListener("click", nextTab)

prevBtn.addEventListener("click", prevTab)