let arr=[1,2,3,4,5];
let sum=0;
let calSum = arr.map(function myfun(val)
  {
    sum+=val;
});

console.log(sum);