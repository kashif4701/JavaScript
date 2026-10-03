let pr = new Promise(function (res, rej) {
  setTimeout(function (res, rej) {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res("Solved With " + rn);
    else rej("Rejected With " + rn);
  }, 2000);
});

pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});
