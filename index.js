// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a project title";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a project description";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions",
    validate: (answer) => {
      if (answer === "") {
        return "please enter the installation instruction";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information",
    validate: (answer) => {
      if (answer === "") {
        return "please enter the usage information";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines",
    validate: (answer) => {
      if (answer === "") {
        return "please enter the contribution guidelines";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "test",
    message: "Enter test guidelines",
    validate: (answer) => {
      if (answer === "") {
        return "please enter the test guidelines";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "None",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Enter Github username",
    validate: (answer) => {
      if (answer === "") {
        return "please enter your github username";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address",
    validate: (answer) => {
      if (answer === "") {
        return "please enter a valid email address";
      }
      return true;
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("success")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
