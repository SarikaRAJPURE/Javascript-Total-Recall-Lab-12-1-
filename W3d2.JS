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
//E. Driver's Ed
//1.Make a variable that holds a person's age; be semantic
let personAge = 40;
//2.Write code that will print out "Here are the keys!",
// if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
let result = personAge > 16 ? "Here are the keys!" : "Sorry, you're too young.";
console.log(result);
 
//II. Loops
//A. The basics
//1.Write a loop that will print out all the numbers from 0 to 10, inclusive
console.log("numbers from 0 to 10");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//2.Write a loop that will print out all the numbers from 10 up to and including 400
console.log("numbers from 10 to 400");
for (let i = 10; i <= 400; i++) {
    console.log(i);
}
 
//3.Write a loop that will print out every third number starting with 12 and going no higher than 4000
console.log("every third number starting with 12 and going no higher than 4000");
for (let i = 12; i <= 4000; i += 3) {
    console.log(i);
}
 
//B. Get even
//Print out the numbers that are within the range of 1 - 100
console.log("within the range of 1 - 100");
for (let i = 1; i <= 100; i++) {
    //Adjust your code to add a message next to even numbers only that says:
    // "<-- is an even number"
    if (i % 2 == 0) {
        console.log(i + " <-- is an even number");
    } else {
        console.log(i);
    }
}
 
//C. Give me Five
//1. For the numbers 0 - 100, print out "I found a number. High five!"
//if the number is a multiple of five
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd`);
    }
    //Add to the code from above to print out "I found a number.
    // Three is a crowd" if the number is a multiple of three
    if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!`);
    }
    //For numbers divisible by both three and five, be sure your code
    //prints both messages
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`I found a ${i}. Three is a crowd`);
        console.log(`I found a ${i}. High five!`);
    }
}
 
//D. Savings account
//1.Write code that will save the sum of all the numbers between 1 - 10
//to a variable called bank_account.Check your work!
//Your bank_account should have $55 in it.
let bank_account = 0;
for (let i = 0; i <= 10; i++) {
 
    bank_account = bank_account + i;
    console.log(bank_account);
 
}
 
//2.You got a bonus! Your pay is now doubled each week.
//Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.
 
let bank_Account = 0;
for (let i = 1; i <= 100; i++) {
    bank_Account = bank_Account + (i * 2);
}
console.log(bank_Account);
//III. Arrays & Control flow
//A. Talk about it:
//1.What are the things in an array called? => Elements
//2.Do Arrays guarantee those things will be in order? =>Yes
//3.What real-life thing could you model with an array? => muffin tray or chess mat
 
//B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes
const arr = ["Keep smiling", "Work Hard", "Love the life"];
const quotes = arr;
console.log(quotes);
 
// C. Accessing elements
//Given the following array const
randomThings = [1, 10, "Hello", true]
 
//How do you access the 1st element in the array? => randomThings[0] with index of array
console.log(randomThings[0]);
//Change the value of "Hello"to "World"
randomThings[2] = "World";
 
//Check the value of the array to make sure it updated the array. How?
//Why, yes! console.log();
console.log(randomThings);
 
//D. Change values
//Given the following array
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
 
//What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);
 
//E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
 
//Given the following array:
const myArray = [5, 10, 500, 20];
 
//Add the string "Aegon"to the end of the array.
myArray.push("Aegon");
//Add another string of your choice to the end of the array.
myArray.push("Hello");
//Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);
//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
//Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
//Reverse this array using Array.prototype.reverse().
myArray.reverse();
console.log(myArray);
//Did you mutate the array? What does mutate mean?
//ans:Yes I mutated array by reversing its order .mutate means change original array.
//Did the .reverse()method return anything?
//ans:it returns reference to the same array,first element becomes last and last element becomes first.
 
 
//F. Biggie Smalls
//Create a variable that contains an integer.
let num = 100;
//Write an if ... elsestatement that:
//console.log()s "little number" if the number is entered is less than 100
//console.log()s big numberif the number is greater than or equal to 100.
 
if (num < 100) {
    console.log("little number");
} else {
    console.log("big number");
}
 
//G. Monkey in the Middle
//Write an if ... else if ... elsestatement:
let number = 7;
//console.log()little numberif the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".
 
if (number < 5) {
    console.log("little number");
} else if (number > 10) {
    console.log("big number");
} else {
    console.log("monkey");
}
 
//H. What's in Your Closet?
//Below, we've given you examples of Kristyn and Thom's closets modeled
// as data in JavaScript.
 
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
 
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
 
  //1.What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,
  //log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
 
console.log("Kristyn is rocking that " +kristynsCloset[2] + " today!");
 
//2.Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);
 
 


















