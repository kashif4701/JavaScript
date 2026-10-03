let btn= document.querySelector("#bt1");

btn.addEventListener("click",()=>{
    console.log("Button is Clicked 1");
})

btn.addEventListener("click",()=>{
    console.log("Button is Clicked 2");
})

let btn3= ()=>{
    console.log("Button is Clicked 3");
}
btn.addEventListener("click",btn3);
btn.addEventListener("click",()=>{
    console.log("Button is Clicked 4");
})

btn.removeEventListener("click",btn3);