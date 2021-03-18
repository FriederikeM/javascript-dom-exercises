let button = document.querySelector("button");
let li = document.querySelectorAll(".list__item");

button.addEventListener("click", () => {
  li[0].style.color = "red";
  li[1].style.color = "orange";
  li[2].style.color = "yellow";
  li[3].style.color = "green";
  li[4].style.color = "blue";
  li[5].style.color = "indigo";
  li[6].style.color = "violet";
});
