// Chapter no 14-16

// Question no 1
// var empty = []

// Question no 2
// var empty = new Array ();

// Question no 3
// var cites = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar",];

// Question no 4
// var numbers = ["26", "45", "87", "53", "92", "77"];

// Question no 5
// var boolean = [true, false];

// Question no 6
// var mix = ["karachi", 2, true, "lahore", 94 , false];

// Question no 7
// var qualifiication = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

// document.write ("<h1>" + "Qualifications:" + "</h1>" + "<br>");
// document.write("1) " + qualifiication[0] + "<br>" );
// document.write("2) " + qualifiication[1] + "<br>" );
// document.write("3) " + qualifiication[2] + "<br>" );
// document.write("4) " + qualifiication[3] + "<br>" );
// document.write("5) " + qualifiication[4] + "<br>" );
// document.write("6) " + qualifiication[5] + "<br>" );
// document.write("7) " + qualifiication[6] + "<br>" );
// document.write("8) " + qualifiication[7] + "<br>" );


// Question no 8
// var students = ["Ahmed", "Ali", "Khan"];
// var scores = ["381", "454", "478"];
// var percentage1 = scores[0] / 500 * 100;
// var percentage2 = scores[1] / 500 * 100;
// var percentage3 = scores[2] / 500 * 100;

// document.write("Score of " + students[0] + " is " + scores[0] + "." + " Percentage: " + percentage1 + "%" + "<br>");
// document.write("Score of " + students[1] + " is " + scores[1] + "." + " Percentage: " + percentage2 + "%" + "<br>");
// document.write("Score of " + students[2] + " is " + scores[2] + "." + " Percentage: " + percentage3 + "%" + "<br>");


// Question no 9
// a)

// var colors = ["red", "blue", "black", "green", "white", "yellow",];
// document.write(colors + "<br>");

// var input = prompt("In which color do you want to add in the begining.");

// if (input == colors[0]) {
//     colors.splice(0,1);
//     colors.unshift(input);
//     document.write(colors);
// }
// else if (input == colors[1]) {
//     colors.splice(1,1);
//     colors.unshift(input);
//     document.write(colors);
// }
// else if (input == colors[2]) {
//     colors.splice(2,1);
//     colors.unshift(input);
//     document.write(colors);
// }
// else if (input == colors[3]) {
//     colors.splice(3,1);
//     colors.unshift(input);
//     document.write(colors);
// }
// else if (input == colors[4]) {
//     colors.splice(4,1);
//     colors.unshift(input);
//     document.write(colors);
// }
// else if (input == colors[5]) {
//     colors.splice(5,1);
//     colors.unshift(input);
//     document.write(colors);
// }



// // b)
// var input = prompt("In which color do you want to add in the end.");

// if (input == colors[0]) {
//     colors.splice(0,1);
//     colors.push(input);
//     document.write(colors);
// }
// else if (input == colors[1]) {
//     colors.splice(1,1);
//     colors.push(input);
//     document.write(colors);
// }
// else if (input == colors[2]) {
//     colors.splice(2,1);
//     colors.push(input);
//     document.write(colors);
// }
// else if (input == colors[3]) {
//     colors.splice(3,1);
//     colors.push(input);
//     document.write(colors);
// }
// else if (input == colors[4]) {
//     colors.splice(4,1);
//     colors.push(input);
//     document.write(colors);
// }
// else if (input == colors[5]) {
//     colors.splice(5,1);
//     colors.push(input);
//     document.write(colors);
// }


// c)
// colors.push("pink ","brown ");
// document.write(colors);


// d)
// colors.shift(0,1);
// document.write(colors)


// e)
// colors.pop();
// document.write(colors);


// f)
// var input3 = prompt("Enter a color which you want to add in the list.")
// colors.unshift(input3);
// document.write(colors);


// g)
// var input4 = prompt("Enter a color which you want to delete from the list.");

// if (input4 == colors[0]) {
    // colors.shift();
    // document.write(colors);
// }
// else if (input4 == colors[1]) {
    // colors.splice(1,1);
    // document.write(colors);
// }
// else if (input4 == colors[2]) {
    // colors.splice(2,1);
    // document.write(colors);
// }
// else if (input4 == colors[3]) {
    // colors.splice(3,1);
    // document.write(colors);
// }
// else if (input4 == colors[4]) {
    // colors.splice(4,1);
    // document.write(colors);
// }
// else if (input4 == colors[5]) {
    // colors.splice(5,1);
    // document.write(colors);
// }

    // colors.splice(0,2);
    // document.write(input4 , colors);




// Question no 10
// var scores = [320, 230, 480, 120];
// document.write("Scores of students: " + scores + "<br>");
// document.write("Ordered scores of students: " + [scores[3], scores[1] ,  scores[0],  scores[2]] + "<br>");


// Qustion no 11
// var cites = ["Karachi", " Lahore", " Islamabad", " Quetta", " Peshawar"];

// document.write("Cites List: " + "<br>" + cites + "<br>");
// var del = cites.slice(2,4);
// document.write("Selected Cites: " + "<br>" + del);


// Question no 12
// var arr = ["This" , "is" , "my",  "cat"];
// document.write("Arrays" + "<br>" + arr);
// document.write("String" + "<br>" + arr[0]+ " " + arr[1] + " " + arr[2] + " " + arr[3]);


// Question no 13
// var items = ["keyboard", "mouse", "printer", "moniter"];

// document.write("Devices" + "<br>" + items + "<br>" );

// items.shift(0,1);
// document.write(items + "<br>");

// items.shift(1,1);
// document.write(items + "<br>");

// items.shift(2,1);
// document.write(items + "<br>");

// items.shift(3,1);
// document.write(items + "<br>");



// Question no 14

// var items = ["keyboard", "mouse", "printer", "moniter"];

// document.write("Devices" + "<br>" + items + "<br>" );

// items.pop(0,1);
// document.write(items + "<br>");

// items.pop(1,1);
// document.write(items + "<br>");

// items.pop(2,1);
// document.write(items + "<br>");

// items.pop(3,1);
// document.write(items + "<br>");



// Question no 15

// var brands = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>" 
//                + "<option>" + brands[0] + "</option>"
//                + "<option>" + brands[1] + "</option>"
//                + "<option>" + brands[2] + "</option>"
//                + "<option>" + brands[3] + "</option>"
//                + "<option>" + brands[4] + "</option>"
//                + "<option>" + brands[5] + "</option>"
//             + "</select>")



// Chapter no 17-20

// Question no 1











