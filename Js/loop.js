 "use strict";

function showMultiplicationTable(num){
 for (var i = 1; i <= num; i++){
         console.log(num + "multiplied by " + i + " = " + (num * i));
     }
 }
showMultiplicationTable(7);

function randomNumber(max, min) {
     return Math.floor(Math.random() * (max - min) + min);
 }
 for (var r = 1; r <= 10; r++) {
     let random = randomNumber(200, 20);
     if (random % 2 === 0){
         console.log(random + " is even");
     } else {
         console.log(random + " is odd");
     }
 }

