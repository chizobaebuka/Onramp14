// VARIABLES (you can use var, let or const)

// Just declaring the variable
let firstName;
// initializing the variable (giving a value to a variable)
let surName = "student";
firstName = 'decadev';

// Typeof 
let isStudent = true;
let data = {};
let num1 = '1'

console.log(typeof (num1));

// OPERANDS
// *, +, -, /, %(remainder), and **(exponential)

// CONDITIONALS (if/else statement) & (switch/case statements)
let age = 17;

if(age>= 16){
    console.log('permitted to open an account');
}else if (age >= 12){
    console.log("open a type 2 savings account");
}else{
    console.log('open type 1 kiddies account');
}

// LOGICAL OPERATORS (|| OR) (&& AND)
// (|| OR) this checks if any of the arguments is truthy
if (age == 16 || age > 16){
    console.log('Your permitted to open an account');
}