const student = {
    calGPA () {
        console.log("The GPA is 3.9");
    }
};

const afaq = {
    salary: 900000,
}

const zuhaib = {
    salary: 800000,
}

const sami = {
    salary: 1000000,
     calGPA () {
        console.log("The GPA is 6");
    }
}

afaq.__proto__=student;
zuhaib.__proto__=student;
sami.__proto__=student;