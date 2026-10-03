// class person {
//     eat(){
//         console.log("Every Person Eats");
//     }
//     sleep(){
//         console.log("Every Person Sleeps")
//     }
// }


// class engineer extends person{
//     work(){
//         console.log ("building Something, Solves Problem");
//     }
// } 

// class Doctor extends person{
//     work(){
//         console.log ("Treats Pateints");
//     }
// }

// let kashif = new engineer();

// let afaq = new Doctor();

class person {
    constructor(name){
        this.species="homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("Eats");
    }
}

class engineer extends person{
    constructor(name){
        super(name);
    }
    work(){
        console.log("Builds Something");
    }
}

class Doctor extends person{
    work(){
        console.log("Treats Pateints");
    }
}

// let kashif = new Doctor();
let afaq = new engineer("afaq");