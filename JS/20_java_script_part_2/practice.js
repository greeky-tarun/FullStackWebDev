//exercise 1: if the number is divisible by 10 then it's good otherwise bad

let num = prompt("Enter a number");
if(num % 10 == 0){
    console.log("Good");
}else{
    console.log("bad");
}

//Exercsie 2: user's name and age as input prompts return back the follwing in user alert and use template literals
let namee = prompt("What's your name?");
let age = prompt("What's your age?");
alert(`${namee} is ${age} years old.`);

//Exercise 3:A string is golden string if it start with 'A' or 'a' and has total lenght greater than 5 
let string = prompt("Write a word");
if((string[0] === 'A' || string[0] === 'a') && (string.length > 5)){
    console.log("Golden string");
}else{
    console.log("bad string");
}

//Find the largest of 3 numbers
let num1 = prompt("Enter 1st num");
let num2 = prompt("Enter 2nd num");
let num3 = prompt("Enter 3rd num");
if(num1 > num2){
    if(num1 > num3){
        console.log(num1, "is greatest");
    }else{
        console.log(num2, "is greatest");
    }
}else{
    if(num2 > num3){
        console.log(num2, "is greatest");
    }else{
        console.log(num3, "is greatest");
    }
}

//Exercise 4: Write a program  to check if 2 numbers have the same last digit Eg. 32 and 44242 haev the same last digit ie. 2
let no1 = 32;
let no2 = 674932
if((no1 % 10) === (no2 % 10)){
    console.log("The last digits are same");
}else{
    console.log("Last digits are not same");
}
