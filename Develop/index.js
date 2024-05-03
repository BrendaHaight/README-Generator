// TODO: Include packages needed for this application
const inquerer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instruction?",
    default: "npm install",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this application",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can users test this application",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "Which license does your project use?",
    choices: ["MIT", "Apache 2.0", "GPLv3", "BSD 3-Clause", "None"],
    default: "MIT",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${fileName} generated sucessfully!`);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquerer.prompt(questions).then(answers => {
    const readmeContent = generateREADME(answers);
  });
}

// Function call to initialize app
init();
