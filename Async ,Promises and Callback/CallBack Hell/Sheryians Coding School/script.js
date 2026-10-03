function Profile(data, cb) {
  console.log("Fetching Data....");
  setTimeout(() => {
    cb({ data: data, Posts: ["Hey, Psots"] });
  }, 2000);
}

Profile("123", function (data) {
  console.log(data);
});
