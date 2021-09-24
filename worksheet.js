let age;
age = prompt("Enter your age");
console.log("i am " + age + " years old.");

let firstName;
let lastName;

firstName = prompt("Enter your first name");
lastName = prompt("Enter your last name");
console.log( firstName + " " + lastName);

let degreesFarenheit;
let degreesCelcius = (degreesFarenheit - 32) / 1.8;

degreesFarenheit = prompt("Enter degrees Farhenheit")
console.log("That means it's " + degreesCelcius);


let legalDrivingAge = 16;

age = prompt("Enter your age");


if (legalDrivingAge <= age) {
    console.log("You are legally able to drive.");
} else {
    console.log("You are not old enought to drive yet.");
}

let random = Math.random() * 3;
let noDecimalRandom = Math.floor(random);

console.log(noDecimalRandom);

if (noDecimalRandom = 0, 1, 2) { 
    console.log("0 or 1 or 2");
}else if (noDecimalRandom = 3, 4, 5) {
    console.log("3 or 4 or 5");
}else if (noDecimalRandom = 6, 7, 8) {
    console.log("6 or 7 or 8");
}else if (noDecimalRandom = 9, 10) {
    console.log("9 or 10");
}

let numberOneTeam;
numberOneTeam = prompt("Who's the best football team in the world?");

switch(numberOneTeam){
    case "Bears":
        console.log("Quarterback much?");
        break;
    case "Vikings":
        console.log("Loud noises!");
        break;
    case "Lions":
        console.log("LOL! They bad!");
        break;
    case "Packers":
        console.log("Best team in the world, actually the universe!")
        break;
    default:
        console.log("Are they even a team?");
        break;
}