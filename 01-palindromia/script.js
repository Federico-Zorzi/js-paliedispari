// ! TRACCIA
/*
Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// ! SOLUZIONE
function reversedWord(word) {
  let splitWordArray = word.split("");
  // console.log(splitWordArray);

  let splitReversedWordArray = splitWordArray.reverse();
  // console.log(splitReversedWordArray);

  let wordReversed = splitReversedWordArray.join("");
  // console.log(wordReversed);

  return wordReversed;
}

const userWord = prompt("Inserisci una parola");
const userReversedWord = reversedWord(userWord);

console.log(`parola dell-utente: ${userWord}`);
console.log(`parola dell'utente al contrario: ${userReversedWord}`);

const isWordPalindrome =
  userWord === userReversedWord
    ? "La parola è palindroma"
    : "La parola non è palindroma";
console.log(isWordPalindrome);
