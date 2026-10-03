let newBtn =document.createElement("button");
newBtn.innerText="click me"

let dive= document.querySelector("p");
dive.before(newBtn);




let heading = document.createElement("h2");
heading.innerText="itsKashifiqbal";

let addhead= document.querySelector("p");
addhead.after(heading);



let paragraph = document.createElement("p");
paragraph.innerText ="This is a created element Paragraph ";
document.querySelector("button").after(paragraph);