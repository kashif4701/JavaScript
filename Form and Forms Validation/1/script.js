let nm = document.querySelector("#name");
let pass = document.querySelector("#pass");
let form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
  dets.preventDefault();

  if (nm.value.length <= 2) {
    document.querySelector("#hide").style.display = "initial";
  } else {
    document.querySelector("#hide").style.display = "none";
  }

  if (pass === "@" || pass === "#") {
    document.querySelector("#hide2").style.display = "none";
  } else {
    document.querySelector("#hide2").style.display = "initial";
  }
});
