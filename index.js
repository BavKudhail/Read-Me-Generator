// external modules
const fs = require("fs");
const inquirer = require("inquirer");

// internal modules
const generateMarkdown = require("./utils/generateMarkdown");

// questions array
const questions = [
  // project title
  {
    type: "input",
    name: "title",
    message: "Enter project title",
    validate: (input) => {
      if (!input) {
        return "please enter a project title";
      }
      return true;
    },
  },
  // motivation for development
  {
    type: "input",
    name: "motivation",
    message: "Enter your motivation for building this project",
    validate: (input) => {
      if (!input) {
        return "please enter your motivations for building this project";
      }
      return true;
    },
  },
  // project description
  {
    type: "input",
    name: "description",
    message: "Enter project description",
    validate: (input) => {
      if (!input) {
        return "please enter a project description";
      }
      return true;
    },
  },
  // user story
  {
    type: "input",
    name: "userStory",
    message: "Enter the user story",
    validate: (input) => {
      if (!input) {
        return "please enter a user story";
      }
      return true;
    },
  },
  // acceptance criteria
  {
    type: "input",
    name: "acceptanceCriteria",
    message: "Enter the acceptance criteria",
    validate: (input) => {
      if (!input) {
        return "please enter the acceptance criteria";
      }
      return true;
    },
  },
  // select the technologies used
  {
    type: "checkbox",
    name: "technologies",
    message: "Please select the technologies used",
    choices: ["HTML", "CSS", "Javascript", "Node.JS", "React"],
  },
  // installation instructions
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions",
    validate: (input) => {
      if (!input) {
        return "please enter the installation instruction";
      }
      return true;
    },
  },
  // usage information
  {
    type: "input",
    name: "usage",
    message: "Enter usage information",
    validate: (input) => {
      if (!input) {
        return "please enter the usage information";
      }
      return true;
    },
  },
  // contribution
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines",
    validate: (input) => {
      if (!input) {
        return "please enter the contribution guidelines";
      }
      return true;
    },
  },
  // test guidelines
  {
    type: "input",
    name: "test",
    message: "Enter test guidelines",
    validate: (input) => {
      if (!input) {
        return "please enter the test guidelines";
      }
      return true;
    },
  },
  // license
  {
    type: "list",
    name: "license",
    default: "MIT License",
    choices: [
      "Apache_2.0",
      "Boost_1.0",
      "BSD_3--Clause",
      "BSD_2--Clause",
      "EPL_1.0",
      "GPLv3",
      "GPL_v2",
      "MIT",
      "None",
    ],
  },
  // github username
  {
    type: "input",
    name: "github",
    message: "Enter Github username",
    validate: (input) => {
      if (!input) {
        return "please enter your github username";
      }
      return true;
    },
  },
  // github repo
  {
    type: "input",
    name: "repo",
    message: "Enter Github repo",
    validate: (input) => {
      if (!input) {
        return "please enter your github repo";
      }
      return true;
    },
  },
  // github email
  {
    type: "input",
    name: "email",
    message: "Enter email address",
    validate: (input) => {
      if (!input) {
        return "please enter a valid email address";
      }
      return true;
    },
  },
];

// Function to create a README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err
      ? console.log("Sorry, there was an error: " + err)
      : console.log("success")
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
