// external modules
const fs = require("fs");
const inquirer = require("inquirer");

// internal modules
const generateMarkdown = require("./utils/generateMarkdown");

// choose a license
const licenses = [
  {
    name: "Apache License 2.0",
    value: {
      title: "Apache License 2.0",
      licenseBadge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      badgeLink: "https://opensource.org/licenses/Apache-2.0",
    },
  },
  {
    name: "GNU General Public License v3.0",
    value: {
      title: "GNU General Public License v3.0",
      licenseBadge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
      licenseLink: "https://www.gnu.org/licenses/gpl-3.0",
    },
  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    value: {
      title: 'BSD 2-Clause "Simplified" License',
      licenseBadge:
        "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
      licenseUrl: "https://opensource.org/licenses/BSD-2-Clause",
    },
  },
  {
    name: 'BSD 3-Clause "New" or "Revised" License',
    value: {
      title: 'BSD 3-Clause "New" or "Revised" License',
      licenseBadge:
        "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
      licenseUrl: "(https://opensource.org/licenses/BSD-3-Clause",
    },
  },
  {
    name: "Boost Software License 1.0",
    value: {
      title: "Boost Software License 1.0",
      licenseBadge:
        "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
      licenseLink: "https://www.boost.org/LICENSE_1_0.txt",
    },
  },
  {
    name: "Eclipse Public License 1.0",
    value: {
      title: "Eclipse Public License 1.0",
      licenseBadge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
      licenseLink: "https://opensource.org/licenses/EPL-1.0",
    },
  },
  {
    name: "GNU General Public License v2.0",
    value: {
      title: "GNU General Public License v2.0",
      licenseBadge: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
      licenseLink: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    },
  },
  {
    name: "MIT License",
    value: {
      title: "MIT License",
      licenseBadge: "https://img.shields.io/badge/License-MIT-yellow.svg",
      licenseLink: "https://opensource.org/licenses/MIT",
    },
  },
  {
    name: "IBM Public License Version 1.0",
    value: {
      title: "IBM Public License Version 1.0",
      licenseBadge: "https://img.shields.io/badge/License-IPL_1.0-blue.svg",
      licenseLink: "https://opensource.org/licenses/IPL-1.0",
    },
  },
  {
    name: "None",
    value: "None",
  },
];

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
    message: "select a license",
    choices: licenses,
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
function writeToFile(file, data) {
  fs.writeFile(file, generateMarkdown(data), (err) =>
    err
      ? console.log("Sorry, there was an error: " + err)
      : console.log("Successfully generated markdown")
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
