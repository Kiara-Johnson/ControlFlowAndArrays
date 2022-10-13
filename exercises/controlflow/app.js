console.log("hello world");

let num;

if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else {
  console.log("not negative or positive");
}

//SOLUTION 1

function test(num) {
  if (num > 0) {
    console.log("Positive!");
  } else if (num < 0) {
    console.log("Negative!");
  } else if (num === 0) {
    console.log("You answer is zero");
  } else {
    console.log("That is not a number");
  }
}

//calling a function
test(-5); //negative
test(10); //calling functions again
test(0);
test("Dulce");

const allowedAge = 21;

if (allowedAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}
//nested if,else
let number = 101;

if (number <= 100) {
  if (number < 0) {
    console.log("Negative Number");
  } else {
    console.log("Under 100");
  }
} else {
    console.log("Over 100")
}

//Letter Grade
let grade = 89;

/*if(grade >= 90) {{
    console.log('A');
} if (grade >-80 && < 90) {
    console.log("B");
    } else if (grade >-70 && < 80) {
    console.log("C");
    } else if (grade >-55 && < 70) {
    console.log("D");
} else (grade > 55) {
  console.log("F");
}
}*/