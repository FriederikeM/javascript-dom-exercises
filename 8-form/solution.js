const button = document.querySelector("button");
const form = document.querySelector("form");
const data = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const person = {
    nameInput: form["name"].value,
    ageInput: form["age"].value,
    marriedInput: form["married"].checked,
    hobbiesInput: form["hobbies"].value,
  };
  data.push(person);
  console.log(data);
  form.reset();
});
