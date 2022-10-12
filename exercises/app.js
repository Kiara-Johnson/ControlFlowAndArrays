console.log("hello world"

let num;

if (num > 0){
    console.log("positive")
} else if(num < 0 ) {
    console.log("negative")
} else {
    console.log("not negative or positive");
}

//SOLUTION 1

function test(num) {
    if(num > 0) {
        console.log("Positive!");
    } else if (num < 0) {
        console.log("Negative!");
    } else if (num === 0) {
        console.log("You answer is zero")
    } else {
        console.log("That is not a number")
    }
}

//calling a function
test(-5); //negative
test(10) //calling functions again
test(0)
test("Dulce");

const allowedAge = 21;

if(allowedAge >= 18 ) {
    console.log("Access Granted")
} else {
    console.log("Access Denied")
}