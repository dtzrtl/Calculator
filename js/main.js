document
  .querySelectorAll("button")
  .forEach((button) =>
    button.addEventListener("click", (event) =>
      calculator.pressButton(event.target.value)
    )
  );

let calculator = {
  screenText: "0",
  //Checks if last button press was an operation or current press is a number
  isInputValid: function (input) {
    const regex = /[^/*+-.]$/;
    if (regex.test(this.screenText) || !isNaN(char)) return true;
    else return false;
  },
  //Adds new character to screen
  addText: function (char) {
    this.screenText += char;
    this.updateDisplay();
  },

  //Changes screen value to screenText
  updateDisplay: function () {
    document.querySelector("input").value = this.screenText;
  },

  pressButton: function (buttonValue) {
    switch (buttonValue) {
      case "divide":
        if (this.isInputValid) this.addText("/");
        break;
      case "times":
        if (this.isInputValid) this.addText("*");
        break;
      case "plus":
        if (this.isInputValid) this.addText("+");
        break;
      case "minus":
        if (this.isInputValid) this.addText("-");
        break;
      case "dot":
        if (this.isInputValid) this.addText(".");
        break;
      case "equals":
        this.screenText = eval(this.screenText).toString();
        this.updateDisplay();
        break;
      default:
        if (this.screenText === "0") {
          this.screenText = buttonValue;
          this.updateDisplay();
        } else {
          this.addText(buttonValue);
        }
        break;
    }
  },
};
