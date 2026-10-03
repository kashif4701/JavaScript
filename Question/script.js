let n = prompt("Enter Any Number");
let arr = [];
for (let i =1; i<=n; i++){
  arr[i-1]=i;
}
console.log(arr);

let sum = arr.reduce((prev,current)=>{
  return prev + current;
})

console.log("Sum is ", sum);

let factorial = arr.reduce((fact,i)=>{
  return fact * i;
})
console.log("Factorail is ", factorial);