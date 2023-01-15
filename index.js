// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // for gathering input
const fs = require("fs"); // to read and write files


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'Select License type from list?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'NONE'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Short Description of project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Command to install dependencies?',
        name: 'installDependencies',
    },
    {
        type: 'input',
        message: 'Command to run tests?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What does user need to know about using the repo?',
        name: 'repoUsage',
    },
    {
        type: 'input',
        message: 'Contribution information for the repo?',
        name: 'contributionInfo',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
