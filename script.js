//object
const person = {
  firstName: "Elvis",
  lastName: "Hansen",
  age: 50,
  hobbies: ["stealing cars", "robbing bank"],
  city: "bergen",
};

console.log(person);
console.log(person.hobbies[0]); //stealing cars

// let userName = "John";
// let userAge = 20;
// let userCity = "Bergen";

// Lag en if - else if - else statement som sjekker følgende og console logger:
// 1: Om bruker er over 18 år- "Du er over 18, velkommen inn" ,
// 2: Om bruker er under eller lik 18 år ELLER er fra Oslo - "Du er ikke gammel nok, og du er fra feil by",
// 3: Om bruker heter John OG er fra Bergen - "Velkommen inn, John fra Bergen!"

// Oppgave 2 (valgfri):
// Lag en kalkulator med en switch statement som kan regne ut +, -, / og * på to tall
// Husk å console logge for å sjekke at den regner ut riktig!

let userName = "John";
let userAge = "20";
let userCity = "Bergen";

// if else statement
if (userAge > 18) {
  console.log("you are over 18, welcome in");
} else if (userAge <= 18 || userCity == "Oslo") {
  console.log("you are not old enough, you are from the wrong city");
}
if (userName == "John" && userCity == "Bergen") {
  console.log("Welcome in, John from Bergen!");
}

// Oppgave 2 (valgfri):
// Lag en kalkulator med en switch statement som kan regne ut +, -, / og * på to tall
// Husk å console logge for å sjekke at den regner ut riktig!

// Frist: Mandag 25.11 kl 14:00. Send link til Github repo- husk å laste opp Github page også!


