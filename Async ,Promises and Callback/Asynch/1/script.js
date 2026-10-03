function api() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("weather Data");
      res(200);
    }, 3000);
  });
}

async function getwData() {
  await api();
}

getwData();
