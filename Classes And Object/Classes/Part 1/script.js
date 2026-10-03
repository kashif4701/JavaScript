class toyotaCar{
    constructor(brand,mile){

        console.log("Constructed // Construcor Called // New Object of Class (Toyota Car) is Created");
        this.brand=brand;
        this.mile=mile;


    }
    start(){
        console.log("Started");
    }   
    stop(){
        console.log("Stop");
    }

    //  Setbrand(brand){
    //     this.brand=brand;
    // }
}

// let fortuner = new toyotaCar;
// fortuner.Setbrand("newFortuner2023");

// let lexus = new toyotaCar;
// lexus.Setbrand("NewLexus@0290");

let fortuner = new toyotaCar("Fortuner",20);
console.log(fortuner);

let lexus = new toyotaCar("lexus",22);
console.log(fortuner);