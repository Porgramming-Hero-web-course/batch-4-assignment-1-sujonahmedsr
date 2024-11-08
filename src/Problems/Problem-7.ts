class Car {
    make: string;
    model: string;
    year: number

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(){
        return `${new Date().getFullYear() - this.year} (assuming current year is ${new Date().getFullYear()})`
    }
}

const car = new Car("Honda", "Civic", 2018);

// console.log(car.getCarAge());

