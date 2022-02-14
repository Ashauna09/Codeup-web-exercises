"use strict"

let num = 8;
while (num <= 50) {
    console.log(num++;)
}

let num = 8;
while (num <= 50) {
    if (num % 2 === 0) {
        console.log(num);
    }

}

let numSpaces = 30;
console.log("Welcome to the OverPricedParkingGarage FunCenter");
do {
    console.log(" There are " + numSpaces + "remaining");
}while (numSpaces)
console.log(" The parking garage is full");

let password = "passw0rd123";
let isCorrect = false;
let attempt = "";

while (!isCorrect){
    attempt = prompt("please enter your password...");
    isCorrect = (attempt === password);
    if (!isCorrect){
        alert()
    }


}

