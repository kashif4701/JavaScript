function asynch1() {
  return new Promise((res, rej) => {
    console.log("Fetching Data 1");
    setTimeout(() => {
      res("Resolved 1");
    }, 3000);
  });
}

function asynch2() {
  return new Promise((res, rej) => {
    // console.log("Fetching Data 2");
    setTimeout(() => {
      res("Resolved 2 ");
    }, 3000);
  });
}

let sync1 = asynch1();

sync1.then(function (val) {
  console.log(val);
  console.log("fetching Data ...2 ");
  let sync2 = asynch2();
  sync2.then(function (val) {
    console.log(val);
  });
});

sync1.catch((val) => {
  console.log(val);
});
