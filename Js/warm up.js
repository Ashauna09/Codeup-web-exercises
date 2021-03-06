/*warm-up
* Write a function called findAverage that takes in an array of integers representing
* grades and returns the average.
Example input: [95, 74, 86, 100]
Example output: 88.75 (edited)*/

// let total;
// function findAverage(){
//     let grades = [95, 74, 86, 100];
//     for (let i = 0; i < grades.length; i++){
//         total += grades[i];
//     }
//     let avg = total/grades.length;
//     console.log(avg);
// }
//
// /*Alternative solution?*/
//
// const grades = [95, 74, 86, 100];
// function findAverage(grades){
//     const total = grades.reduce((acc, c)) => acc + c, 0);
// return total / grades.length;
// }
//
// const average = findAverage(grades);
// console.log(average);
//
// /*Ry Solution
// * can use the reduce() function but that might be overkill for this, so not
// * necessary*/
//
// function findAverage(grades){
//     let sum = 0;
//     grades.forEach(function (grade) {
//         sum += grade;
//     })
//     return sum / grades.length;
// }
// console.log(findAverage([95, 74, 86, 100]));

/*warm-up 2.16.22
* JS Object Warmup, pt 1:
Create an object representing a person. It should have properties representing:
    names (an array of strings)
    date of birth
    occupation
Hard code some values in that object, then log it and its properties to the console*/

var person = {
    name: ["Ashauna", "R", "Smith"],
    dob: new Date(1991, 7, 29),//"July 29",
    occupation: "student"
};
console.log("The name of this person is: " + person.name);
console.log("The date of birth for this human is: " + person.dob);
console.log("The occupation of this human is: " + person.occupation);

//What if we wanted to add another object with the same properties id?
let person2 = Object.create(person); //Object
person2["names"] = ["Ry", "Sutton"];
person2["occupation"] = "Father of the year";
person2.dob = "01.01.1992";
console.log(person2);

/*  #2 FOR WARM-UP
JS Object Warmup, pt 2:
Create an object representing a person’s contact info. It should have:
    phone number
    street address
    state
    postal code
    email address
Hard code some values in that object, then log it and its properties to the console
 */
//this is the constructor function
function contactInfo(phone, address, city, state, postal, email){
    //this is called object mapping
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postal = postal;
    this.email = email;
    //console log inside of constructor function is allowed
    console.log(typeof this); // output is object
}
const contactDetail = new contactInfo('4044009533', '5157 verde valley ln', 'Dallas','TX', '75254', 'ashaunarochelle@gmail.com');
// var contactInfo = {
//     phoneNum: '4044009533',
//     address: '5157 verde valley ln',
//     state: 'Texas',
//     postal: '75254',
//     email: "ashaunarochelle@gmail.com"
// };
console.log(contactDetail.phone);
console.log(contactDetail.address);
console.log(contactDetail.city + ", " + contactDetail.state + " " + contactDetail.postal)

/*CHALLENGE #3 ACCEPTED
* JS Object Warmup, pt 3:
Create a property on the person object to store their contact info
    -> Assign the contact info variable to that property
    -> Log that entire object and its properties to the console
*/
//CASEY'S WORKOUT BELOW
// Defines a contact info object
// function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.emailAddress = emailAddress;
// }
// // Defines a person object
// function Person(names, occupation, dob, contactInfo) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }
// // makes a new person object instance (by invoking the constructor)
// let person2 = new Person(
//     ["Casey", "J", "Edwards"],
//     "Cat Herder / Firefighter",
//     "11.30.1989",
//     new ContactInfo(
//         '123.456.7890',
//         '123 Anywhere Ln',
//         'Beverly Hills',
//         'CA',
//         '90210',
//         'nope@no-no-no.no'));
//
// console.log(person2.contactInfo.emailAddress);

/*We are going to create a method which
- allows a user to input their desired amount of names names
*use prompt, alert, confirm inside of a while loop
*assign each name to an array
-once the user decides they are done giving names, end the loop and
return the string array
-then assigning that returned array by invoking your new function on the
Person.names property value!
* Things to consider:
    -Should this be a standalone function or should it be a method on the Person
* object?*/

function getNames(){
   let namesArr = [];
    let hasMoreNames = true;
    while (hasMoreNames){
        // get the names
namesArr.push(prompt("Please enter "))
// prompt for names

   hasMoreNames = confirm("Would you like to enter another name?")
   }
   return namesArr;
 };
this.names();
this.occupation = occupation;
 this.dob = dob;
 this.

     /* Warm up 2-28-2022 */

function removeAll(anArr, valueToRemove) {
    let filteredArr = []
    anarr.forEach(function (ele) {
        if (alueTorEMOVE !==ele) {
            filteredArr.push(ele);
        }
    };
    return filteredArr;
}
let cars = ["Honda", "Lexus", "Toyota", "Jeep", "Dodge", "Ford"];
console.log(removeAll(cars, valueToRemove: "Jeep"));


