// ! TRACCIA
/* 
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// ! SOLUZIONE
/**
 * La funzione effettua l'estrazione di un numero casuale compreso tra il valore massimo e il valore minimo
 * @param {number} min indicare il numero minimo tra quelli che si possono estrarre
 * @param {number} max indicare il numero massimo tra quelli che si possono estrarre
 * @returns {number} la funzione restituirà un numero compreso tra il minimo e il massimo
 */
function numberRandomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * la funzione definisce se il valore inserito è un numero pari
 * @param {number} sumResult
 * @returns {boolean} il risultato sarà vero se il numero pari, false se il numero dispari
 */
function isEvenNumber(number) {
  return number % 2 === 0;
}

/**
 * la funzione indica se la somma del valore dell'utente e quello del pc randomizzato corrisponde alla scelta di "pari" o "dispari" dell'utente
 * @param {number} playerNumber inserire il numero scelto dell'utente
 * @param {number} opponentNumber inserire il numero della controparte
 * @param {string} evenOrOddChoise inserire scelta di "pari" o "dispari" da parte dell'utente
 * @returns {boolean} se il risultato è vero l'utente ha vinto in caso contrario ha vinto la controparte
 */
function evenOddGame(playerNumber, opponentNumber, evenOrOddChoise) {
  const sum = playerNumber + opponentNumber;
  console.log("la somma dei numeri è: " + sum);

  const evenNumber = isEvenNumber(sum);
  /* console.log(evenNumber); */

  const userWin =
    (evenNumber && evenOrOddChoise === "pari") ||
    (!evenNumber && evenOrOddChoise === "dispari");

  return userWin;
}

const evenAndOdd = ["pari", "dispari"];
const minNumber = 1;
const maxNumber = 5;

let userEvenOrOddChoise = prompt('scegli "pari" o "dispari"');
// controllo se il valore dell-utente è corretto
let isUserChoiseEvenOddValid = evenAndOdd.includes(userEvenOrOddChoise);
while (!isUserChoiseEvenOddValid) {
  userEvenOrOddChoise = prompt(
    'valore inserito non disponibile, scegliere tra "pari" e "dispari"'
  );
  isUserChoiseEvenOddValid = evenAndOdd.includes(userEvenOrOddChoise);
}

console.log("la scelta del giocatore è: " + userEvenOrOddChoise);

let userNumber = parseInt(
  prompt(`scegli un numero tra ${minNumber} e ${maxNumber}`)
);
let isUserNumberValid =
  !isNaN(userNumber) && userNumber > minNumber && userNumber < maxNumber;

while (!isUserNumberValid) {
  userNumber = parseInt(
    prompt(
      `valore inserito non disponibile, inserire nuovo numero tra ${minNumber} e ${maxNumber}`
    )
  );
  isUserNumberValid =
    !isNaN(userNumber) && userNumber >= minNumber && userNumber <= maxNumber;
}

console.log(`il numero del giocatore è: ${userNumber}`);

const pcNumber = numberRandomizer(minNumber, maxNumber);
console.log(`il numero del pc è: ${pcNumber}`);

const gameResult = evenOddGame(userNumber, pcNumber, userEvenOrOddChoise);
console.log(gameResult ? "Il giocatore ha vinto" : "Il pc ha vinto");
