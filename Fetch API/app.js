const URL = "https://cat-fact.herokuapp.com/facts";

let para = document.querySelector("abc");
let btn = document.querySelector("btn");

const getdata = async () => {
  console.log("Getting Data ..... ");
  let promise = await fetch(URL);
  console.log(promise);
  let data = await promise.json();
  para.innerText = data[0].text;
};

btn.addEventListener("click", getdata);
