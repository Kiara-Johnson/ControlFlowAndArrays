//Countdown
const countDown = [];
for (let i = 10; i > 0; i--) {
    countDown.push(i);
}
console.log(countDown)

//Odd
const odd = [];
for (let i = 1; i < 10; i +=2){
    odd.push(i);
}
console.log(odd)

//multiples
const mult = [];
for (let i = 6; i <= 60; i +=3){
    mult.push(i);
}
console.log(mult)

//pyramid
const pyr = []
for (let i = 1; i <= 7; i++) {
    pyr.push("#")
    console.log(pyr.join())
}


//arrays
const shows = ["NCIS", "ATLA", "Supernatural"]
let firstShow = shows [0];
console.log(firstShow)
shows.forEach(show => console.log(show + " is good"));

const dances = ["Thy Word", "The Arena", "I Refuse"]
dances.forEach(dance => console.log(dance + " I choreographed a ballet dance to it."))