// const adventurer = {
//     name: "Calla",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "dagger"],
//     companion: {
//         name: "Mercedes",
//         type: "Walker",
//         companion: {
//             name: "Ben",
//             type: "Werewolf",
//             belongings: ["scuba tank", "Computer", "health insurance"]
//         }
//     }
// }

// //console.log(adventurer.belongings[2])

// // for (let i=0; i < adventurer.belongings.length; i++) {
// // 	console.log(adventurer.belongings[i]);
// // }
// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.type);

// console.log(adventurer.companion.companion.type);

// console.log(adventurer.companion.companion.belongings[2]);

// const movies = [
//     {title: "Tokyo Story"},
//     {title: "Paul Blart: Mall Cop"},
//     {title: "L'Avventura"},
// ];

// console.log(movies[0]);
// console.log(movies[0].title);

// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }

// const foo = {
//     someArray:[1,2,3],
//     someObject: {
//         someProp: 'oh hai, mark'
//     }
//     someMethod:()=>{
//         console.log("inside of method");
//     }
// };

// console.log(foo.someObject.someProp);
// console.log(foo.someArray[0]);
// console.log("inside of method");

// const foo = {
//     1,
//     "hi",
//     () => {
//         console.log('fun')
//     }
// }
// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log('fun');
//     }
// ];

// const player = {
//     name: "Josh the Great",
//     health: 1000,
//     power: 1000,
// 	stamina: 1000
// }

// const bigBadBoss = {
//     name: 'Magnardo the Merciless',
//     health: 1000000000000000000,
//     power: 10000000000000000,
//     stamina: Infinity
//   }

//   const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     };

//     return newEnemy
//   }
//   const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     };

//     return newPlayer
//   }

class Character {
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs;
    }
    greet(otherCharacter) {
        console.log("hi " + otherCharacter + "!");
    }
    smite() {
        console.log('I smite thee you vile person')
    }
}

const p1 =new Character('Calla', 458, "blue", 'teal', true, true);
const enemy = new Character();

console.log(p1.greet("bob"));
console.log(p1.smite());

console.log(enemy.greet("sauron"));

console.log(p1)