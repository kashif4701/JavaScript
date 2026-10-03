let btn1= document.querySelector("#abc1");

btn1.onclick = () => {
    alert("you Click But Fucked Up");
};

let div = document.querySelector(".abc2");

div.onmouseover =()=>{
    alert("Mouse Detected You Lost");

    let a = prompt("Enter a ");
    let b = prompt("Enter b");
    const c=a+b;
    
    console.log("Answer is ", c);
}