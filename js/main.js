document
  .querySelectorAll("button")
  .forEach((button) =>
    button.addEventListener("click", (event) =>
      calculator.pressButton(event.target.value)
    )
  );

let calculator = {
  screenText: "0",
  updateDisplay: function () {
    document.querySelector("input").value = this.screenText;
  },
  pressButton: function (buttonValue) {
    switch (buttonValue) {
      case "divide":
        if (/[^/*+-.]$/.test(this.screenText)) {
          this.screenText += "/";
          this.updateDisplay();
        }
        break;
      case "times":
        if (/[^/*+-.]$/.test(this.screenText)) {
          this.screenText += "*";
          this.updateDisplay();
        }
        break;
      case "plus":
        if (/[^/*+-.]$/.test(this.screenText)) {
          this.screenText += "+";
          this.updateDisplay();
        }
        break;
      case "minus":
        if (/[^/*+-.]$/.test(this.screenText)) {
          this.screenText += "-";
          this.updateDisplay();
        }
        break;
      case "dot":
        if (/[^/*+-.]$/.test(this.screenText)) {
          this.screenText += ".";
          this.updateDisplay();
        }
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
          this.screenText += buttonValue;
          this.updateDisplay();
        }

        break;
    }
  },
};
