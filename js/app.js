//Operators

let a;
let b;
let c;
let d = '5';

//Assignment operator (=, +=, -=, /=, *=, %=, **=)

// equals to (=) operator
a = 5;
b = 10;

// plus equals to (+=) operator

//a += b;  // a = a+b;

// minus equals to (-=) operator

//a -= b; // a = a - b;

// divided equals to (/=) operator

//b /= a; // b = b / a;

// multiply by equals to (*=) operator

//b *= a; // b = b * a;

// modulus equals to (%=) operator

//a %= b; // a  = a % b;

// to power equals (**=) operator

//a **= b; // a = a **b;





//Arithmetic Operator (+, *, -, /, %, ++, --, **)

// c = a + b;

// c = a - b;

// c = b / a;

// c = a % b;

// c = a * b;

// c = ++a;

// c = --b;

// c = a**2;


//Comparison Operator (==, ===, ||, &&, !=, !==, >, <, <=, >=, ?, :)

c = false;

x = 1;
y = 0;



// if (x === true) {
//     c = true;
// }

// if ((x === true) || (y === false)) {
//     c = true;
// }


// if ((x == true) && (y == false)) {
//     c = true;
// }


// if (x !== true) {
//     c = true;
// }


// if (x <= y) {
//     c = true;
// }


// c = (x > 20) ? true : false;


// A program that returns a greeting based on the time of day.


const greeting = function(time) {

    let greetMsg;

    let timeSplit = time.split(':'); //[15, 79]

    time  = timeSplit[0];

    timeSufrix = timeSplit[1];

    if ((timeSufrix > 59) || (timeSufrix < 0)) {
        return "invalid time input";
    }

    // morning 00:00 - 11:59

    if ((time >= 0) && (time < 12)) {
        
        greetMsg = "Good Morning";
    }
    // afternoon 12:00 - 15:59
    else if ((time >= 12) && (time < 16)) {

        greetMsg = "Good Afternoon";
    }
    // evening 16:00 - 20:59
    else if ((time >= 16) && (time < 21)) {

        greetMsg = "Good Evening";
    }
    // night 21:00 - 24:00
    else if ((time >= 21 ) && (time < 24)){

        greetMsg = "Good Night";
    }
    else {
        greetMsg = "invalid time input";
    }

    return greetMsg;

}


let z = 10;
let output;

switch(z) {

    case 0:
        output = false;
        break;
    case 1:
        output = true;
        break;
    default: 
        output = "Not true or false";
        break;

}

//console.log(`The value is ${z + x}`);


//toString
//typeof
//replace
//search
//slice
//trim
//length
//concat
//split


let s = "How are you doing today?";
let r = "I'm fine."

let t = s.split(' ');

let k = z.toString();

//['How','are','you','doing','today?']

console.log("The value is "+ t[2] );


//console.log(b);
//console.log(greeting('15:49455566:56:45:34'));