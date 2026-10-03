let btn1=document.querySelector(".btn");
let currMode="light-Blue";



btn1.addEventListener("click", ()=> {
    if (currMode==="light-Blue"){
        currMode="Black";
        document.querySelector("body").style.backgroundColor="black";
    } else {
        currMode="light-Blue";
        document.querySelector("body").style.backgroundColor="lightblue";
    }
    console.log(currMode);
})