let input = document.querySelector("input");
let h1 = document.querySelector("h1");
input.addEventListener("input", () => {
  h1.textContent = `Hello World, ${input.value}`;
});
