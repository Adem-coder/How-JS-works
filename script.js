/*************************Hosting******************/

// function Declaration

calculateAge(1990);
function calculateAge(year) {
    console.log(2020-year);
}

// function expression 

//retirement(1990);
var retirement = function(year) {
    console.log(65-(2020 - year));
}
retirement(1990);

// Variables

console.log(age);
var age = 23;
// console.log(age);

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

/**************************** Scoping and the Scope chain ***********************************/

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
      function second() {
         var c = 'Hey!';
         console.log(a + b + c);
      }
}

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
      function second() {
         var c = 'Hey!';
         third();
      }
}
function third() {
    var d = 'John';
    //console.log(c);
    console.log(a +d);
}