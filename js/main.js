document
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", checkButton));

function checkButton(event) {
  button = event.target.value;

  if (isNaN(button)) {
    switch (button) {
      case "divide":
        console.log(button);
        break;
      case "times":
        console.log(button);
        break;
      case "plus":
        console.log(button);
        break;
      case "minus":
        console.log(button);
        break;
      case "dot":
        console.log(button);
        break;
      case "equals":
        console.log(button);
        break;
    }
  } else {
    console.log(button);
  }
}

function displayInput(character) {}
