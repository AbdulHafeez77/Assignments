
// Chapter No 21 to 25
  
// Question No 1
// var firstName = prompt("Enter your  First name");
// var secName = prompt("Enter your Second name");
// var fullname = firstName + " " + secName;

// alert("Good Morning " +  fullname + ".");




// Question no 2
// var mobile = prompt("What is your favorite mobile phone model ?");
// var a = "My favorite phone is " + mobile + "<br>" + "length of string " + mobile.length;

// document.write(a)




// Question no 3
// var string = "Pakistan";
// var n = string.indexOf("n");
// document.write("String: " + string + "<br>" + "Index of 'n': " + n);




// Question no 4
// var str = "Hello world";
// var l = str.lastIndexOf("l");
// document.write("String: " + str + "<br>" + "last Index of 'l': " + l);


// Question no 5
// var str = "Pakistan";
// document.write("String: " + str + "<br>" + " Character at Index '3': " +  str[3] );





// Quwstion no 6
// var fullName = firstName.concat(secName);
// console.log(fullName);





// Question no 7

// replacing string value 
// var str = "Hyderabad";
// var index = str.slice(0,4);

// if(index){
//    var  first= "Islam";
//    var sec = str.slice(5);
// }
// console.log("City: " + str + " " + "<br>" + " After replacement: " + first + sec);





// Question no 8
// var input = prompt("Enter your message.")
// input = input.replace("and" , "&");

// console.log(input);





// Question no 9
// var input = "472";
// +input;

// document.write("Value: " + input + "<br>" +
//                "Type : " + "string" + "<br>" +
//                "Value: " + input + "<br>" + 
//                "Type : " + "number" + "<br>");





// Question no 10
// var input = prompt("Enter anything...")

// document.write("User input: " + input + "<br>" + "Upper case: " + input.toUpperCase());




// Question no 11
// var input = prompt("Enter a single word")

// var firstLetter = input[0].toUpperCase();
// var result = firstLetter + input.slice(1);

// console.log(result);




// // Question no 12
// var num = 35.36;
// var num2 = num.toString().split("");
// num2.splice(2,1);

// console.log(num2.join(""));




// Question no 13
// var input =  prompt("Please enter your username.");
// var userInput = input;

// for(var i = 0; i < userInput.length; i++){
//     if(userInput[i] == "@" || userInput[i] == "." || userInput[i] == ","|| userInput[i] == "!"){
//         alert("Please enter a valid username");
//     }
// }




// Question no 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt ("Welcome to our bakery. What do you want to order?");
// userInput = userInput.toLowerCase();
// var flag = false;

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] == userInput){
//         flag == true;
//         break;
//     }
// }

// if (flag === true) {
//     alert(userInput + " is available at index " + i + " in our bakery");
// }
// else {
//     alert("We are sorry. " + userInput + " is not available in our bakery");
// }




// Question no 15

// var password = prompt("Enter a password that contains at least 6 characters and contains both alphabets and numbers and does not start with a number");

// while (true) {
//   if (password.length < 6) {
//     password = prompt("Password is too short. Enter a valid password:");
//   } else if (!/[a-zA-Z]/.test(password)) {
//     password = prompt("Password should contain at least one alphabet. Enter a valid password:");
//   } else if (!/\d/.test(password)) {
//     password = prompt("Password should contain at least one number. Enter a valid password:");
//   } else if (/^\d/.test(password)) {
//     password = prompt("Password should not start with a number. Enter a valid password:");
//   } else {
//     alert("Password accepted!");
//     break;
//   }
// }




// Question no 16
// var university = "University of Karachi";
// var split = university.split("");

// console.log(university);
// console.log(split) ;




// Question no 17
// var userInput = "Pakistan";
// var n = userInput[7];

// console.log(userInput);
// console.log(n);





// Question no 18
// var str = "The quick brown fox jumps over the lazy dog.";
// var arr = str.toLowerCase().split(" ");
// var word = "the";
// var count = 0;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] === word) {
//     count++;
//   }
// }

// document.write("Text: " + str + "<br>");
// document.write(" The word " + word + " occurs " + count + " times in the string.");