// // function getData(){
// //   return
// let pr = new Promise((res, rej)=>{
//     setTimeout(()=>{
//       let rn = Math.floor(Math.random()*10);
//       if(rn>5) res("Accepted in " + rn + " Seconds");
//       else rej("Rejected "+ rn + " Seconds");
//     }, 3000)
//   })

// // let pr = getData();
// pr.then(function(val){
//   console.log(val)
// });

// pr.catch(function(val){
//   console.log(val)
// });

const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let rn = Math.floor(Math.random() * 10);
      if (rn < 5) res("Accepted in " + rn + " Seconds");
      else rej("Rejected " + rn + " Seconds");
    }, 3000);
  });
};
let pr = getData();
pr.then(function (val) {
  console.log(val);
});

pr.catch(function (val) {
  console.log(val);
});
