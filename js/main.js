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
/* VÄNTA MED DETTA
fontSelect.addEventListener("change", changeFont); // eventlyssnare för typsnitt
*/

// Array som används för felmeddelanden
let errors = [];

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

// Array som innehåller sparade studentkort
let history = [];

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

/* Ändra typsnitt på studentkortet
function changeFont() {
  const font = document.getElementById("font").value;
  document.querySelector("body").style.fontFamily = font;
} */

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

  // Uppdatera studentkortet
  // Lägg till studentkortet i historiken
  // Spara och uppdatera historiken
}

/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
  // Spara history i localStorage
}

/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
  // Hämta eventuell sparad historik
  // Uppdatera history
}

/**
 * Visar historiken på sidan.
 */
function renderHistory() {
  // Rensa tidigare visad historik
  // Skriv ut innehållet i history till DOM
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
