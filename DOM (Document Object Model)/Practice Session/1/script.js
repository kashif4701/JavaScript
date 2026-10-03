let div = document.querySelector("#abc");
console.dir(div);

div.innerHTML="KhanSaab";
console.log(div);

let C_div=document.createElement("button");
C_div.style.backgroundColor="red";
C_div.style.color="pink";
C_div.innerHTML="Click ME";
let show_C_div=document.querySelector("body");
show_C_div.append(C_div);


let Add_div = document.querySelector("button");
Add_div.classList.add("new");

