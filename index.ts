// Importing the 'inquirer' package for user input
import inquirer from "inquirer";
// In the following code:
// [this is array]: Denotes the use of an array, a data structure capable of holding multiple values.
// {this is object, also called key}: Represents an object, a collection of key-value pairs used to organize and store data.
// Keys within objects are identifiers for accessing corresponding values, which are the information we aim to display to the user.

// Using inquirer to prompt the user for input
// await is used for the sake where we want to take puase at this line to take the user inpt first.
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select on of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Divison"],
  },
]);

// Performing calculations based on the selected operator
if (answer.operator === "Addition") {
  console.log("Your answer is:", answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Substraction") {
    console.log("Your answer is:", answer.firstNumber - answer.secondNumber)
} else if (answer.operator === "Multiplication") {
    console.log("Your answer is:", answer.firstNumber * answer.secondNumber)
} else if (answer.operator === "Divison") {
    console.log("Your answer is:", answer.firstNumber / answer.secondNumber)
} else{
    console.log("Please select valid operator")
}
