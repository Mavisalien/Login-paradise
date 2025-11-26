const login = document.querySelector("h1");

login.addEventListener("mouseover", function () {
  this.style.color = "rgba(73, 141, 250, 1)";
});

login.addEventListener("mouseout", function () {
  this.style.color = "";
});

document.getElementById("toggle-tema").addEventListener("click", () => {
document.body.classList.toggle("dark");
});
