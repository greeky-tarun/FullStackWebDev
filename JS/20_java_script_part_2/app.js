console.log("Heloo world!");
console.log("Tarun Kumar");
let a = 10;
let b = 29;
console.log("sum is: ",a+b)

let pencilPrice = 10;
let eraserPrice = 5;
console.log(`The total price is ${pencilPrice+eraserPrice} rupees`);

// Operators
let agge = 18;
console.log(agge > 18); //false  

// conditional statement

console.log("if-else statement");
let age = 14;
if(age >= 18){
    console.log("You are now adult");
    if(age >= 23){
        console.log("You are eligible to drink");
    }
    let a = 5;
    console.log(a * 5);
}else{
    console.log("you are not eligible for drive and drink");
}

let firstName = "Tarun";
if(firstName == "Tarun"){
    console.log(`Welcome ${firstName}`);
}   

//traffic light system
let light = prompt("Now what is the color of traffic light?").toLowerCase();
if(light === "red"){
    console.log("Stop!!!");
}else if(light === "yellow"){
    console.log("Prepare to go!!");
}else if(light === "green"){
    console.log("Go!");
}


//system to calculate popcorn prices based on the size of customer asked
let size = prompt("What size of popcorn do you want?").toUpperCase();
if(size === "XL"){
    console.log("Price is Rs. 250");
}else if(size === "L"){
    console.log("Price is Rs. 200");
}else if(size === "M"){
    console.log("Price is Rs. 100");
}else if(size === "S"){
    console.log("Price is Rs. 50");
}else{
    console.log("Invalid Size");
}

//marks grading system(nested if-else)
let marks = prompt("Marks?");
if(marks >= 90){
    console.log("You are pass again! ");
    if(marks > 90){
        console.log("You have secured 'O' grade");
    }else{
        console.log("You have secured 'A' grade");
    }
}else{
    console.log("Better luck next time");
}

//Practice Qs
//A "good string" is a string that starts with the letter 'a' & has a lenght > 3.
let str = prompt("Write a string");
if((str[0] === "a") && (str.length>3)){
    console.log("This string is a Good String");
}else{
    console.log("Not a good string");
}

//switch statement
let color = prompt("What the color of traffic light?").toLowerCase();
switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("light is not working");
}


//Print day of the week using number variable day
let day = prompt("write day");
switch(day){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thrusday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("put a valid num");
}

//alert and prompt
console.log("this is a simple log");
console.error("this is a wrong message"); //it will show error message
console.warn("this is a warning message"); //it will show warning message