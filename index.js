// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // import inquirer package
const fs = require("fs"); // to read and write files
const util = require("util"); 
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions 
const questions = [
    {
        type: 'input', // type of input
        message: 'What is the name of your project?', // question text
        name: 'title', // where the input is stored
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
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD', 'NONE'],
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
// function to write readme file
const writeToFile = (fileName, data) => {
   fs.writeFile(fileName, data, (err)=> err ? console.log(err) : console.log('Successfully created README.md'));
}

// function to initialize app
const init = () => { // uses inquirer to prompt for user input related to readme output
    inquirer.prompt(questions).then(answers => writeToFile('README.md', generateMarkdown(answers)))
        .catch((error)=> console.error(error)); // error catch
}

// Function call to initialize app
init();
