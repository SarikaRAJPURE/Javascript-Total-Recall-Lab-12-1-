/*
1. How do we assign a value to a variable? A. With the assignment operator  
   let str="Sarika";
2. How do we change the value of a...
   str="Clark";
3. How do we assign an existing variable to a new variable?
   assign a new variable with assignment operator to existing variable.
   var a;
   a=str;
4. Remind me, what are declare, assign, and define?
ans: declaring a variable - let str;
     assign - str="SARIKA";
    define - let str="Sarika";
5. What is pseudocoding and why should you do it?
ans:Pseudocode is writing step bystep solution for problem without using actual programming language
   its main use is to give summary/overview of program.  
6. What percentage of time should be spent thinking about 
how you're going to solve a problem 
vs actually typing in code to solve it?
ans:25%
...
*/

//B. Strings

//1. Create a variable called firstVariable
let firstVariable;
//2.Assign it the value of the string "Hello World"
firstVariable = "Hello World";
//3.Change the value of this variable to some number
firstVariable = 5;
//4.Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
//5.Change the value of secondVariableto any string.
secondVariable = "Hello";
//6.What is the value of firstVariable? 
//ans is 5 
console.log("Value of firstVariable = " + firstVariable);
//7.Create a variable called yourNameand set it equal to your name as a string. 
//Then, write an expression that takes the string "Hello, my name is " 
//and the variable yourNameso that it returns a new string with them concatenated.
//ex: Hello, my name is Jean Valjean
let yourName = "Sarika";
let yourNameso = "Hello, my name is " + yourName;
console.log(yourNameso);


// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e == 'Kevin');
console.log(a != b != c);
// note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//console.log(a && a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
//console.log(48 !== '48');

//D. The farm

//1.Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";
//2.Write code that will print out "mooooo" if the it is equal to cow
//3.Change your code so that if the variable animalis anything other than a cow,
// it will print "Hey! You're not a cow."
//4.Commit
if (animal == "cow") {
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
}

















