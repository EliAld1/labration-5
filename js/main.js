"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Elina Aldevärn
 */

// Hämta element från DOM, formulär
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");

// Eventlyssnare för formuläret
form.addEventListener("submit", onSubmit);
clearButton.addEventListener("click", clearForm);
deleteHistoryButton.addEventListener("click", deleteHistory);
fontSelect.addEventListener("change", changeFont); // eventlyssnare för typsnitt

// Array som används för felmeddelanden
let errors = [];
// Array som innehåller sparade studentkort
let history = [];

function onSubmit(event) {
  event.preventDefault(); // Förhindra att sidan laddas om

  // Läs in värde från formulärets obligatoriska fält
  const fullname = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Validera formuläret
  if (!validateForm(fullname, email, phone)) {
    // Om valideringen misslyckas, visa felmeddelanden
    displayErrors();
  }
  // Om valideringen lyckas, skapa studentkort
  else {
    createStudentCard();
  }
}

// Validerar formulärets inmatning
function validateForm(fullname, email, phone) {
  errors = []; // Rensa tidigare felmeddelanden
  errorList.innerHTML = ""; // Rensa tidigare felmeddelanden i DOM
  let validate = true; // Variabel för att returnera resultatet (true eller false) av valideringen

  // Om fält är tomma, lägg till felmeddelande i errors-arrayen
  if (fullname === "") {
    errors.push("Vänligen ange ditt namn");
    validate = false;
  }
  if (email === "") {
    errors.push("Vänligen ange din e-postadress");
    validate = false;
  }
  if (phone === "") {
    errors.push("Vänligen ange ditt telefonnummer");
    validate = false;
  }
  return validate;
}

// Skriver ut felmeddelanden, loppar igenom
function displayErrors() {
  if (errors.length > 0) {
    for (let i = 0; i < errors.length; i++) {
      const LiEl = document.createElement("li"); // Skapa ett li-element
      LiEl.innerHTML = errors[i];

      errorList.appendChild(LiEl);
    }
  }
}

// Skapar studentkortet
function createStudentCard() {
  // Hämta information från formuläret
  const fullname = fullnameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Uppdatera studentkortet med informationen
  previewFullname.textContent = fullname;
  previewEmail.textContent = email;
  previewPhone.textContent = phone;

  const studentCard = {
    // Skapar objekt med studentkortets information
    name: fullname,
    email: email,
    phone: phone,
    font: font, // Sparas som text i historik
  };
  // Lägg till studentkortet i historiken
  history.unshift(studentCard);
  // Spara och uppdatera historiken
  saveHistory();
  renderHistory();
}

//Ändra typsnitt på studentkortet
function changeFont() {
  const font = fontSelect.value;
  previewFullname.style.fontFamily = font;
  previewEmail.style.fontFamily = font;
  previewPhone.style.fontFamily = font;
}

// Spara history i localStorage
function saveHistory() {
  // Läser om tidigare history array till JSON
  const historyJSON = JSON.stringify(history);
  // Sparar i lokalStorage
  localStorage.setItem("studentCard", historyJSON);
}

function loadHistory() {
  // Hämta eventuell sparad historik
  const savedHistory = localStorage.getItem("studentCard");
  // Om det finns sparat, uppdatera historik
  if (savedHistory) {
    history = JSON.parse(savedHistory);
    // Visar historiken på sidan
    renderHistory();
  }
}
loadHistory();

/**
 * Visar historiken på sidan.
 */
function renderHistory() {
  // Rensa tidigare visad historik
  historySection.innerHTML = "";
  // Loopa igenom varje studentkort
  for (const studentCard of history) {
    const sectionEl = document.createChild("section");

    // Skriv ut innehållet i history till DOM
  }
}

/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
  // Återställ formulär och studentkort
  // Rensa eventuella felmeddelanden
}

/**
 * Raderar hela historiken.
 */
function deleteHistory() {
  // Radera sparad historik
  // Uppdatera history och visningen på sidan
}

// Eventlyssnare

// När formuläret skickas:
// - validera inmatningen
// - skapa studentkort om valideringen lyckas

// När användaren klickar på "Rensa"

// När användaren klickar på "Radera historik"

// När sidan laddas:
// - läs in och visa eventuell tidigare historik
