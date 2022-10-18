//function declaration

function one() {
    return "one";
}
one(); //calling a function

//function expression
const two = () => {
    return 2;
}

const shortenedTwo = () => 2;

//calling functions
function areBothEven(n1, n2) {
    return !(n1 % 2) && !(n2 % 2);
}
console.log(areBothEven(8, 12));

//arrow function
const sayName = (name) => {
    console.log(`Hello my name is ${name}`);
}

sayName('Mercy');
sayName('Adam');
sayName('Jessie');
sayName('Stefan');
sayName('Zee');
sayName('Tad');

//area of triangle
/*const triangleArea = (num1, num2) => {
     (num1 * num2)/2
}
triangleArea(8, 10)*/
