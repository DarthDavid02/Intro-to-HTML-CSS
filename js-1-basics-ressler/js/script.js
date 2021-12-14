/*
Author: David Ressler
File name: script.js
Date: 12/14/21
*/

// Part 2: Basic Commands
 alert("My name is David");
console.log("My favorite food is Honey BBQ Wings");
// End of Part 2

// Part 3: Variables
let favNumber = 12;
let isFalse = false;
let favMovie = "Free Guy";
let actor = "Ryan Reynolds";
let bYear = 2002;
// End of Part 3

// Part 4: Concatenation and Math
let total = 1115 + 305;
let aboutMe = "I was born in the year " + bYear + " and I like the movie " + favMovie + ".";
let myAge = "I am " + (2021-bYear) + " years old";
// End of Part 4

// Part 5: Functions
function displayGrapesMessage(){
    alert("I love grapes");
}

function displayfavNumber(){
    alert(favNumber);
}

function showMyMath(){
    return 200-123;
}

function showFutureAge(){
    return bYear + 95;
}

function displayMovieInfo(){
    alert("The movie " + favMovie + " features " + actor);
}

displayGrapesMessage();
displayfavNumber();
console.log(showMyMath());
console.log(showFutureAge());
displayMovieInfo();
// End of Part 5

//Part 6: Function
function displayMyMath(){
    return 100 / 4;
}
alert(displayMyMath());