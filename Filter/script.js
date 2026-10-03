let arr=[1,2,3,4,5,6,7,8,9,10];
let calSum = arr.filter(function myfun(val)
  {
    return val %2===0;
});

console.log(calSum);



console.log("Arr. Reduce");

let array = [2,5,4,6,1,0];

let output = array.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
})

console.log(output);