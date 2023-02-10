// Chapter 9-11

// Question no 1
// var city = prompt("Enter Your city");
// if (city = "karachi") {
    // alert("Welcome to the City of Lights");
// }

// Question no 2
// var gender = prompt("Enter your Gender");
// if (gender == "male") {
    // alert("Good Morning Sir");
// }
// if (gender == "female") {
    // alert("Good Moring Ma'am");
// }

// Question no 3
// var color1 = "red";
// var color22 = "yellow";
// var color33 = "green"; 
// var color = prompt("Enter First Signal Color"); 
// var color2 = prompt("Enter Second Signal Color");
// var color3 = prompt("Enter Third Signal Color");
// document.write("<h1>" + "Signals Colors:" + "</h1>");
// document.write(color + ":" + " " + "<br>");
// document.write(color2 + ":" + " " + "<br>");
// document.write(color3 + ":" + "<br>" + "<br>");
// document.write("<h1>" + "Message:" + "</h1>" + "<br>");
// if (color1) {
    // document.write ("Must Stop!" + "<br>")
// }
// if (color22) {
    // document.write ("Ready to Move!" + "<br>")
// }
// if (color33) {
    // document.write ("Move Now!" + "<br>")
// }


// Question no 4
// var  fuel = prompt("Fuel in your car (in liters)");
// if (fuel < 0.25) {
    // alert("Please refill the fuel in your car");
// }

    
// Question no 5
// a)
// var a = 7;
// if (++a == 8) {
    // alert("true")
// }

// b)
// var b = 54
// if (b++ === 55) {
    // alert("true")   
// }

// c)
// var c = 17;
// if (c++ === 18){
    // alert("condition 1 is true");
    // }
    // if (c === 18){
    // alert("condition 2 is true");
    // }
    // if (++c < 19){
    // alert("condition 3 is true");
    // }
    // if(c === 19){
    // alert("condition 4 is true");
// }

// d)
// var materialCost = 40000;
// var laborCost = 4000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost is equals");
// }

// e)
// if (true){
    // alert("True");
    // }
    // if (false){
    // alert("False");
    // }

// f)
// if("car" < "cat"){
    // alert("car is smaller than cat");
    // }    


// Question no 6
// var sub1 = prompt("Enter your subject");
// var obtain1 = +prompt("Enter obtaian marks of your subject");
// var total1 = +prompt("Enter total marks of your subject");

// var sub1 = prompt("Enter your subject");
// var obtain2 = +prompt("Enter obtaian marks of your subject");
// var total2 = +prompt("Enter total marks of your subject");

// var sub1 = prompt("Enter your subject");
// var obtain3 = +prompt("Enter obtaian marks of your subject");
// var total3 = +prompt("Enter total marks of your subject");

// var obtained = obtain1 + obtain2 + obtain3;
// var totaled =  total1 + total2 + total3;
// var prsentage = obtained / totaled * 100;

// if (prsentage >= 80) {
//     var remark = "A-one (Excellent)";
// }
// if (prsentage >= 70) {
//     var remark = "A (Good)";
// }
// if (prsentage >= 60) {
//     var remark = "B (You need to improve)";
// }
// if (prsentage < 60) {
//     var remark = "Fail (Sorry)";
// }

// document.write("<h1>" + "MarkSheet: " + "</h1>");
// document.write("<h3>" + "Total Marks: " + totaled + "</h3>" );
// document.write("<h3>" + "Obtain Marks: " + obtained + "</h3>");
// document.write("<h3>" + "Presentage: " + prsentage + "%" + "</h3>");
// // document.write("<h3>" + "Remark: " + remark + "</h3>")


// Question no 7
// var secretNumber = 5;
// var sn5 = +prompt("Guess Game \n Enter a Secret Number. ") 
// if (secretNumber === sn5) {
    // alert('"Bingo! Correct Answer."')
// }
// if (sn5 === ++secretNumber){
    // alert("“Close enough to the correct answer”.")
// }


// Question no 8
// var num1 = 27;
// var num2 = 3;
// alert("27 is divided by 3");
// alert("Ansewer: " + num1 / num2 );


// Question no 9
// var even;
// var num = prompt("Enter a Number");
// if (num % 2 == 0) {
    // alert ("This is even Number");
// }
// else{
    // alert("this is odd Number");
// }

// Question no 10
// var temparature = prompt("Enter Your City's Temparture....");
// if (temparature > 40) {
    // alert('“It is too hot outside.”')
// }
// if (temparature > 30) {
    // alert('“The Weather today is Normal.”');
// }
// if (temparature > 20) {
    // alert('“Today’s Weather is cool.”');    
// }
// if (temparature > 10) {
    // alert('“OMG! Today’s weather is so Cool.”');  
// }

// Question no 11
// var num1 = +prompt("Enter a Number");
// var opt = prompt("Enter a Operater");
// var num2 = +prompt("Enter final Number");
// var result;
// if (opt == "+") {
    // result = num1 + num2;
// }
// if (opt == "-") {
    // result = num1 - num2;
// }
// if (opt == "*") {
    // result = num1 * num2;
// }
// if (opt == "/") {
    // result = num1 / num2;
// }
// alert(result);


// Chapter no 12-11

// Question no 1
// var char = prompt("Enter a character");
// var charCode = char.charCodeAt();

// if (charCode>= 65 && charCode<= 90) {
    // alert("Capital"); 
// }
// if (charCode>= 97 && charCode<= 122) {
    // alert("Small");
// }


// Question no 2
// var num1 = prompt("Enter any number");
// var num2 = prompt("Enter second number");

// if (num1< num2 ) {
    // alert(num2 + " is a large number than " + num1)  
// }
// if (num1> num2 ) {
    // alert(num1 + " is a large number than " + num2)  
// }


// Question no 3
// var num = 0;
// var input = prompt("Enter a number");

// if (input> num) {
    // alert("This is a positive number");
// }
// else if (input< num) {
    // alert("This is a neagtive number"); 
// }
// else{
    // alert ("this is zero which is neutral number");
// }

// Question no 4
// var input = prompt("Enter any vowel character.");
// var vowels = ["a", "e", "i", "o", "u"]

// if (input == "a" || input =="e" || input == "i" || input == "o" || input == "u" ){
    // alert("Correct! this is a vowel.");
// }
// else{
    // alert("Incorrect! this is not a vowel.")
// }


// Question no 5
// var input = prompt("Enter your password please.");
// var pass = "password123";

// if (input == pass) {
    // alert("'Correct! The password you entered matches the original password”.'");
// }
// else{
    // alert("'Sorry! Incorrect password.'")
// }

// Question no 6
// var greeting = prompt("Enter your time");

// if (greeting < 18) {
    //  alert ("Good day");
// }
// else{
    //  alert ("Good evening");
// }



// Question no 7
// var time = prompt("Enter your time accodring to 24 hours format.");
// var hours = (time - 12);
// var hours2 = (time = time);

// if (time> 12) {
    // if (hours) { 
        // alert(hours + "pm");
    // }
    // else {
        // alert("Please! Enter your correct time");
    // }
// }
// if (time< 12) {
    //  if (hours2) {
        // alert(hours2 + "am");
// }
// else {
        // alert("Please! Enter your correct time");
    //  }
// }















