import "vehicleBaseClass.js"


class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers=6;
        this.passenger=0;
        this.numberOfWheels=4;
        this.maximumSpeed=200;
        this.fuel=100;
    }

    loadPassenger(num){
        this.passenger = max(this.passenger + num, this.maximumPassengers)
        if(this.passenger >= this.maximumPassengers){
            this.availableRoom=false;
        }
        else{
            this.availableRoom=true;
        }
    }

    start(){
        this.started = this.fuel > 0
    }

    scheduleService(){
        this.timeForService = this.mileage > 30000
    }

}