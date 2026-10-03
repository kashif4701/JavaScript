// let div = document.querySelector("#abcd");
// console.log(div);

// let get=div.getAttribute("id");
// console.log(get);

// let set = document.querySelector("p");
// console.dir(set.getAttribute("class"));
// set.style.backgroundColor="lightyellow";

// set.setAttribute("class","newClass");
// console.dir(set);
// set.style.fontSize="larger";
// console.dir(set.getAttribute("class"));

let newHeading= document.createElement("h1");
newHeading.innerText="My Heading";
document.querySelector("body").prepend(newHeading);

let newbtn = document.createElement("button");
newbtn.innerHTML = "Click me";
console.dir(newbtn);

let Dive= document.querySelector("#abcd");
console.dir(Dive);
// console.log("\n";
Dive.prepend(newbtn);