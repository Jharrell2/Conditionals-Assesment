let userChoice, randomNumber, computerChoice;

userChoice = prompt("heads or tails?");
randomNumber = Math.random() < 0.5 ? 0 : 1;
computerChoice = randomNumber === 0 ? "heads" : "tails";

if (userChoice.toLowerCase() === computerChoice) {
  alert("You guessed right! The coin flip landed on " + computerChoice);
} else {
  alert("Sorry, the coin flip landed on " + computerChoice);
}



let birthYear = prompt("What year were you born?");
const age = new Date().getFullYear() - parseInt(birthYear);

if (age > 21) alert("You are old enough to drink in the US");
else if (age === 21) alert("You are old enough to drink in the US...barely");
else if (age < 21) alert("Sorry, you are not old enough to drink in the US");
