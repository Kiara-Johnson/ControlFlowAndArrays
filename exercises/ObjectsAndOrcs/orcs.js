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

// class Character {
//     constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
//         this.legs = 2;
//         this.arms = 2;
//         this.name = name;
//         this.age = age;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.lovesCats = lovesCats;
//         this.lovesDogs = lovesDogs;
//     }
//     setHair(hairColor) {
//         this.hair = hairColor;
//     }
//     greet(otherCharacter) {
//         console.log("hi " + otherCharacter + "!");
//     }
//     classyGreeting (otherClassyCharacter) {
//         console.log('Greetings ' + otherClassyCharacter.name + '!');
//       }
//     smite() {
//         console.log('I smite thee you vile person')
//     }
// }

// const p1 =new Character('Calla', 458, "blue", 'teal', true, true);
// const enemy = new Character('Death', 666, 'red');

// console.log(p1.greet("bob"));
// console.log(p1.smite());

// // console.log(enemy.greet("sauron"));

// console.log(p1);
// p1.setHair('pink');
// console.log(p1);

// console.log(enemy.classyGreeting(p1));
// console.log(enemy);

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || true;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     classyGreeting (otherClassyCharacter) {
//       console.log('Howdy ' + otherClassyCharacter.name + '!');
//     }
//     setHair (hairColor) {
//       this.hair = hairColor;
//     }
//     smite () {
//       console.log('i smited thee.');
//     }
  
//   }


//   class Hobbit extends Character {
//     constructor(name, age, eyes, hair) {
//         super( name, age, eyes, hair);
//         this.skills = ['thievery', 'speed', 'willpower']
//     }
//     steal () {
//         console.log("let's get away");
//     }
//     greet (otherCharacter) {
//         console.log(`Hobbit says hello to ${otherCharacter}`)
//     }
//     smite() {
//         super.smite();
//         this.steal();
//         console.log('another one')
//     }
//   }
//   const frodo = new Hobbit('Mr Baggins', 33, 'brown', 'black')
// console.log(frodo);
// console.log(frodo.smite());
// console.log(frodo.steal());
// console.log(frodo.greet('Sam'));

class Car {
    constructor (maker, serialNumber) {
      this.serialNumber = serialNumber;
      this.maker = maker
    }
    drive () {
      console.log('Vroom Vroom');
    }
  }


class Factory {
    constructor (company) {
        this.company = company;
        this.cars = [];
      }
generateCar () {
    const newCar = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }
  findCar (index) {
    return this.cars[index]
  }
}


 const tesla = new Factory('tesla');
 tesla.generateCar();
 tesla.generateCar();
 tesla.generateCar();
 tesla.generateCar();
 console.log(tesla);
 console.log(tesla.findCar[0]);

const porche = new Factory('Porche');
porche.generateCar();
porche.generateCar();
console.log(porche);
console.log(porche.findCar(0));