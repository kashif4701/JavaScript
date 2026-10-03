let newbtn =document.createElement("button");
newbtn.innerText="Click me";
newbtn.style.backgroundColor="red";
newbtn.style.color="white";
let showbtn = document.querySelector("body");
showbtn.prepend(newbtn);


let para = document.querySelector("p");
// para.getAttribute("class");


para.classList.add("new");
// para.setAttribute("class","new");