// importing yargs module which is helpful to get input from user 
const argv = require('yargs').argv 

//MENU 
console.log("");
console.log("press 1 if you want to add");
console.log("press 2 if want to subtract");
console.log("press 3 to multiply");
console.log("press 4 to divide");
console.log("");

//input user option
//--o for choosing from menu
//--a to get first number
//--b to get second number
switch(argv.o)
{ 
    //for addition
    case 1:
    var c=argv.a+argv.b;
    console.log("Answer of given input via addition is = "+c);
    console.log("");
    break;

    //for subtraction
    case 2:
    var c=argv.a-argv.b;
    console.log("Answer of given input via subtraction is = "+c)
    console.log("");
    break;

    //for multiplication
    case 3:
    var c=argv.a*argv.b;
    console.log("Answer of given input via multiplication is = "+c);
    console.log("");
    break;

    //for division
    case 4:
    var c=argv.a/argv.b;
    console.log("Answer of given input via division is = "+c);
    console.log("");
    break;

    //if user chose wrong input  
    default : 
    console.log("you entered wrong option");
    console.log("");
}

