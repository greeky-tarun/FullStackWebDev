//trim

//we know that password never contains space so if the user will put space it will remove by trim
// let password = prompt("Enter a password");
// let newPassword = password.trim();// here a new string will generate
// console.log(newPassword);

//uppercase and lowercase
let msg = "Tarun kumar";
console.log(msg.toUpperCase()); //it will show the msg in upper case
console.log(msg.toLowerCase()); //it will show the msg in lower case


//IndexOf:
let str = "IloveCoding";
console.log(str.indexOf("love"))   //1
console.log(str.indexOf("J"))      //-1 (not found)
console.log(str.indexOf("o"))      //2(only 1 index)

//method chaining:
let Name = "     tarun     ";
let newMsg = Name.trim().toUpperCase();
console.log("After trim and uppercase: ", newMsg);

//slice:
let message = "IloveCoding";
console.log(message.slice(-2));
console.log(message.replace("love","do"));
console.log(message.repeat(3));


