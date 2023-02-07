let number = 10;
let string = "10";
let boolean = true;

const stringPlusBoolean = string + boolean; 
const stringPlusNumber = string + number; 
const numberPlusBoolean = number + boolean;

const stringMultiplyBoolean = string * boolean;
const stringMultiplyNumber = string * number; 
const numberMultiplyBoolean = number * boolean;

const stringDivideBoolean = string / boolean;  
const stringDivideNumber = string / number; 
const numberDivideBoolean = number / boolean;

number = String(number);
string = Boolean(string);
boolean = Number(boolean);

boolean = String(boolean);
string = Number(string);
number = Boolean(number);