class Vehicle {
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
    }
    start() {
        this.running = true;
        console.log('running')
    }
}

const car = new Vehicle("A1234", "Toyota", "Camry");
console.log(car);
car.start();