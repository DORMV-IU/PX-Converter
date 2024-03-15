const taBtns = document.querySelectorAll(".taBtn");
const indicator = document.querySelector("#unitIndicator");

taBtns.forEach((taBtn, i) => {
  taBtn.addEventListener("click", () => {
    taBtns[0].classList.remove("tabActive");
    taBtns[1].classList.remove("tabActive");
    taBtns[2].classList.remove("tabActive");
    taBtns[3].classList.remove("tabActive");

    taBtn.classList.add("tabActive");
    // taBtns[0].classList.add("");
    // if(taBtns[0].classList.contains('tab'))
  });
});

// REM FORM
const remForm = document.querySelector("#remForm");
const pxPTR = document.querySelector("#pxPTR");
const remInput = document.querySelector("#rem");
const base = document.querySelector("#base");
const remSwitch = document.querySelector("#remSwitch");
let remSwitchTracker = 1;

remForm.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (remSwitchTracker) {
    case 1:
      remInput.value = `${(pxPTR.value / base.value).toFixed(3)} REM`;
      break;
    case 2:
      pxPTR.value = `${(remInput.value * base.value).toFixed(3)} PX`;
      break;
  }
});

remSwitch.addEventListener("click", (e) => {
  e.preventDefault();

  if (remSwitchTracker === 1) {
    // POINTS TO PIXELS
    remSwitchTracker = 2; //UPDATE THE TRACKER AS TO THE CURRENT STATE OF THE FORM
    remInput.disabled = false; //ENABLE REM INPUT
    remInput.type = "number"; //CHANGE REM TYPE TO NUMBER
    pxPTR.type = "text"; //CHANGE PIXELS INPUT TYPE TO TEXT
    pxPTR.value = ""; //CLEAR PIXELS INPUT FIELD
    remInput.focus(); //FOCUS ON REM INPUT
    pxPTR.disabled = true; //DISABLE PIXELS INPUT
    pxPTR.classList.add("conversionAnswer");
    remInput.classList.remove("conversionAnswer");

    // console.log(ptSwitchTracker);
  } else if (remSwitchTracker === 2) {
    // PIXELS BACK TO POINTS
    remSwitchTracker = 1;
    remInput.disabled = true;
    remInput.type = "text";
    pxPTR.type = "number";
    remInput.value = "";
    pxPTR.disabled = false;
    pxPTR.focus();
    pxPTR.classList.remove("conversionAnswer");
    remInput.classList.add("conversionAnswer");

    // console.log(ptSwitchTracker);
  } else {
    console.log("remSwitchTracker value is invalid: " + remSwitchTracker);
  }
});

// Points Form
const ptForm = document.querySelector("#ptForm");
const pxPTP = document.querySelector("#pxPTP");
const ptInput = document.querySelector("#pt");
const ptSwitch = document.querySelector("#ptSwitch");
let ptSwitchTracker = 1;

ptForm.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (ptSwitchTracker) {
    case 1:
      ptInput.value = `${(pxPTP.value * 0.75).toFixed(2)} PT`;
      break;
    case 2:
      pxPTP.value = `${(ptInput.value / 0.75).toFixed(2)} PX`;
      break;
  }
});

ptSwitch.addEventListener("click", (e) => {
  e.preventDefault();

  if (ptSwitchTracker === 1) {
    // POINTS TO PIXELS
    ptSwitchTracker = 2; //UPDATE THE TRACKER AS TO THE CURRENT STATE OF THE FORM
    ptInput.disabled = false; //ENABLE POINTS INPUT
    ptInput.type = "number"; //CHANGE POINTS TYPE TO NUMBER
    pxPTP.type = "text"; //CHANGE PIXELS INPUT TYPE TO TEXT
    pxPTP.value = ""; //CLEAR PIXELS INPUT FIELD
    ptInput.focus(); //FOCUS ON POINTS INPUT
    pxPTP.disabled = true; //DISABLE PIXELS INPUT
    pxPTP.classList.add("conversionAnswer");
    ptInput.classList.remove("conversionAnswer");

    // console.log(ptSwitchTracker);
  } else if (ptSwitchTracker === 2) {
    // PIXELS BACK TO POINTS
    ptSwitchTracker = 1;
    ptInput.disabled = true;
    ptInput.type = "text";
    pxPTP.type = "number";
    ptInput.value = "";
    pxPTP.disabled = false;
    pxPTP.focus();
    pxPTP.classList.remove("conversionAnswer");
    ptInput.classList.add("conversionAnswer");

    // console.log(ptSwitchTracker);
  } else {
    console.log("ptSwitchTracker value is invalid: " + ptSwitchTracker);
  }
});

// CM FORM
const cmForm = document.querySelector("#cmForm");
const pxPTC = document.querySelector("#pxPTC");
const cmInput = document.querySelector("#cm");
const dpi = document.querySelector("#dpi");
const cmSwitch = document.querySelector("#cmSwitch");
let cmSwitchTracker = 1;

cmForm.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (cmSwitchTracker) {
    case 1:
      cmInput.value = `${(pxPTC.value * (2.54 / dpi.value)).toFixed(3)} CM`;
      break;
    case 2:
      pxPTC.value = `${((cmInput.value * dpi.value) / 2.54).toFixed(3)} PX`;
      break;
  }
});

cmSwitch.addEventListener("click", (e) => {
  e.preventDefault();

  if (cmSwitchTracker === 1) {
    // POINTS TO PIXELS
    cmSwitchTracker = 2; //UPDATE THE TRACKER AS TO THE CURRENT STATE OF THE FORM
    cmInput.disabled = false; //ENABLE CM INPUT
    cmInput.type = "number"; //CHANGE CM TYPE TO NUMBER
    pxPTC.type = "text"; //CHANGE PIXELS INPUT TYPE TO TEXT
    pxPTC.value = ""; //CLEAR PIXELS INPUT FIELD
    cmInput.focus(); //FOCUS ON CM INPUT
    pxPTC.disabled = true; //DISABLE PIXELS INPUT
    pxPTC.classList.add("conversionAnswer");
    cmInput.classList.remove("conversionAnswer");

    // console.log(ptSwitchTracker);
  } else if (cmSwitchTracker === 2) {
    // PIXELS BACK TO POINTS
    cmSwitchTracker = 1;
    cmInput.disabled = true;
    cmInput.type = "text";
    pxPTC.type = "number";
    cmInput.value = "";
    pxPTC.disabled = false;
    pxPTC.focus();
    pxPTC.classList.remove("conversionAnswer");
    cmInput.classList.add("conversionAnswer");

    // console.log(ptSwitchTracker);
  } else {
    console.log("cmSwitchTracker value is invalid: " + cmSwitchTracker);
  }
});

// IN FORM
const inForm = document.querySelector("#inForm");
const pxPTI = document.querySelector("#pxPTI");
const inInput = document.querySelector("#in");
const ppi = document.querySelector("#ppi");
const inSwitch = document.querySelector("#inSwitch");
let inSwitchTracker = 1;

inForm.addEventListener("submit", (e) => {
  e.preventDefault();

  switch (inSwitchTracker) {
    case 1:
      inInput.value = `${(pxPTI.value / ppi.value).toFixed(4)} IN`;
      break;
    case 2:
      pxPTI.value = `${(inInput.value * ppi.value).toFixed(4)} PX`;
      break;
  }
});

inSwitch.addEventListener("click", (e) => {
  e.preventDefault();

  if (inSwitchTracker === 1) {
    // POINTS TO PIXELS
    inSwitchTracker = 2; //UPDATE THE TRACKER AS TO THE CURRENT STATE OF THE FORM
    inInput.disabled = false; //ENABLE CM INPUT
    inInput.type = "number"; //CHANGE CM TYPE TO NUMBER
    pxPTI.type = "text"; //CHANGE PIXELS INPUT TYPE TO TEXT
    pxPTI.value = ""; //CLEAR PIXELS INPUT FIELD
    inInput.focus(); //FOCUS ON CM INPUT
    pxPTI.disabled = true; //DISABLE PIXELS INPUT
    pxPTI.classList.add("conversionAnswer");
    inInput.classList.remove("conversionAnswer");

    // console.log(ptSwitchTracker);
  } else if (inSwitchTracker === 2) {
    // PIXELS BACK TO POINTS
    inSwitchTracker = 1;
    inInput.disabled = true;
    inInput.type = "text";
    pxPTI.type = "number";
    inInput.value = "";
    pxPTI.disabled = false;
    pxPTI.focus();
    pxPTI.classList.remove("conversionAnswer");
    inInput.classList.add("conversionAnswer");

    // console.log(ptSwitchTracker);
  } else {
    console.log("inSwitchTracker value is invalid: " + inSwitchTracker);
  }
});

// TAB BTNS
taBtns[0].addEventListener("click", () => {
  remForm.style.display = "flex";
  ptForm.style.display = "none";
  cmForm.style.display = "none";
  inForm.style.display = "none";
  indicator.textContent = "rem";
});

taBtns[1].addEventListener("click", () => {
  remForm.style.display = "none";
  ptForm.style.display = "flex";
  cmForm.style.display = "none";
  inForm.style.display = "none";
  indicator.textContent = "points";
});

taBtns[2].addEventListener("click", () => {
  remForm.style.display = "none";
  ptForm.style.display = "none";
  cmForm.style.display = "flex";
  inForm.style.display = "none";
  indicator.innerHTML = "centi <br> meters";
});

taBtns[3].addEventListener("click", () => {
  remForm.style.display = "none";
  ptForm.style.display = "none";
  cmForm.style.display = "none";
  inForm.style.display = "flex";
  indicator.innerHTML = "inches";
});
