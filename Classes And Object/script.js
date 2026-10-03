const students = [
    {
        fullname: "kashif iqbal",
        marks: 66.7,
        printMarks() {
            console.log(`${this.fullname}'s marks:`, this.marks);
        },
    },
    {
        fullname: "Sara Ahmed",
        marks: 88.5,
        printMarks() {
            console.log(`${this.fullname}'s marks:`, this.marks);
        },
    },
    {
        fullname: "Ali Khan",
        marks: 74.2,
        printMarks() {
            console.log(`${this.fullname}'s marks:`, this.marks);
        },
    },
];


// for (const std of students){
//     std.printMarks();
// }

students.forEach((std)=>{
    std.printMarks();
})