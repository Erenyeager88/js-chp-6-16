// CHAPTER 6
// Question: 01
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// var number1 = prompt("Enter Your Desired Number");
// document.write("<h4>RESULT</h4>");
// document.write("</br>");
// document.write("</br>");
// document.write("The value of a is: "+number1);
// document.write("</br>");
// document.write("</br>");
// document.write("________________________");
// document.write("</br>");
// document.write("</br>");
// document.write("The value of ++a is: "+ number1);
// document.write("</br>");
// ++number1;
// document.write("Now the value of a is: "+number1);
// document.write("</br>");
// document.write("</br>");
// document.write("The value of a++ is: "+ number1);
// document.write("</br>"); 
// number1++;
// document.write("Now the value of a is: "+ number1);
// document.write("</br>");
// document.write("</br>");
// document.write("The value of --a is: "+ number1);
// document.write("</br>");
// --number1;
// document.write("Now the value of a is: "+ number1); 
// document.write("</br>");
// document.write("</br>");
// document.write("The value of a-- is: "+ number1);
// document.write("</br>");
// number1--;
// document.write("Now the value of a is: "+ number1);
// document.write("</br>");
// document.write("</br>");

// // Question: 02
// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
    // var a = 2, b = 1;
    // var result = --a - --b + ++b + b--;
    // --a; //"subtract 1 from 'a' and then use it." So, if 'a' was 2, it becomes 1.
    // --a - --b; // we're doing the same for both 'a' and 'b'. We subtract 1 from both before using them.'a' was 1 (from the previous step), it becomes 0. 'b' also becomes 0. Then, we just subtract 'b' from 'a', which is 0 - 0, giving us 0.
    // --a - --b + ++b; //'a' is -1 (because we subtracted 1 from it), and 'b' is 0 (because we did it in the previous step). Then we add 1 to 'b' before using it, making it 1. So, we have -1 - 0 + 1, which equals 0.
    // --a - --b + ++b + b--; //'a', we subtract 1, making it -2. For 'b', we subtract 1, making it -1. Finally, we use 'b' as it is and then subtract 1 from it afterward. So, we have -2 - (-2) + 0 -1, which equals -1.


    // document.write("a is " + a  +"</br>");
    // document.write("b is " + b +"</br>");
    // document.write("result is " + result +"</br>");
// Question: 03
//  Write a program that takes input a name from user &     
// greet the user.
// var name = prompt("please Enter your name");
// document.write("Welcome to my website " +name);  

// Question: 05
//  Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.
var table = prompt("Enter a number for multiplication table");
var t;
var i;
// if(i!==0){
// for (i =1;i<=10;i++){
//     result=table*i;
//     document.write(table +" x "+ i +" = " + result +"<br>")
    
// }}
// else{
//     for (let t = 1; t <= 10; t++) {
//     console.log(`5 * ${i} = ${5 * i}`);
// }
// }

// Question: 06
// Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)
// a) Take three subjects name from user and store them in 3 different variables.
// function newContent() {
//     document.open();
//     document.write("<table border='1'>");
//     document.write("<tr><th>Subject</th><th>Max Marks</th><th>Obtained Marks</th></tr>");

// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // b) Total marks for each subject is 100, store it in another variable.
// var totalMarks = 100;

// // c) Take obtained marks for first subject from user and stored it in different variable.
// var obtainedMarks1 = +prompt("Enter the obtained marks for " + subject1 + ":");

// // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// var obtainedMarks2 = +prompt("Enter the obtained marks for " + subject2 + ":");
// var obtainedMarks3 = +prompt("Enter the obtained marks for " + subject3 + ":");

// // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var totalObtainedMarks = obtainedMarks1 +obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
//         document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
//         document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
//         document.write("<tr><td>Total</td><td>" + (3 * totalMarks) + "</td><td>" + totalObtainedMarks + "</td></tr>");
//         document.write("<tr><td>Percentage</td><td colspan='2'>" + percentage + "%</td></tr>");
//         document.write("</table>");
//         document.close();
//     }

// CHAPTER 9-11

// QUESTION #01:
// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// var city = prompt("Please enter a city name:");


// if (city.toLowerCase() === "karachi") {
//   alert("Welcome to the city of lights!");
// } else {
//   alert("Welcome to " + city + "!");
// }

// QUESTION #02:
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Please enter your gender (M/F):");

// if (gender.toLowerCase() === "m") {
//   alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "f") {
//   alert("Good Morning Ma'am.");
// } else {
//   alert("Invalid input. Please enter M or F.");
// }

// QUESTION #03:
// function getColor() {
//     var color = prompt("Enter the color of the traffic signal (red, yellow, green):");
//     var message;
  
//     switch (color.toLowerCase()) {
//       case "red":
//         message = "Must Stop";
//         break;
//       case "yellow":
//         message = "Ready to move";
//         break;
//       case "green":
//         message = "Move now";
//         break;
//       default:
//         message = "Invalid color";
//     }
  
//     document.getElementById("signalColor").innerHTML = color;
//     document.getElementById("message").innerHTML = message;
//   }
// QUESTION #04:
// var fuel = prompt("Enter the remaining fuel in your car (in litres):");
// var message;

// if (parseFloat(fuel) < 0.25) {
//   message = "Please refill the fuel in your car";
// } else {
//   message = "Your car has enough fuel";
// }

// document.write("message:"+ message);

// QUESTION #05:
// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }    
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// User Input & Conditional Statement | JAVASCRIPT

// Page 3 of 4

// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }
// a is diplayed
// b not displayed
// c is displayed
// d is displayed
// e is displayed
// f is not displayed
