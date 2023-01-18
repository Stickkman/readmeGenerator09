// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // import inquirer package
const fs = require("fs"); // to read and write files
const util = require("util"); 
const generateMarkdown = require("./utils/generateMarkdown");


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! <MOVE README GENERATION TO GENERATEMARKDOWN> !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


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
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD', 'NONE'],
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

const writeToFile = (fileName, data) => {

    fs.writeFile(fileName, data, (err)=> err ? console.log(err) : console.log('1Successfully created README.md'));
const licenseCode = generateMarkdown.renderLicenseBadge();
 //appends license badge/link code to written readme file
fs.appendFile('README.md', licenseCode, (err)=> err ? console.log(err) : console.log('1Successfully created README.md'));
}

// TODO: Create a function to initialize app
const init = () => {
    
    inquirer.prompt(questions).then((answers)=> writeToFile('README.md', generateReadme(answers)))
    .then(()=> console.log('2Successfully created README.md'))
    .catch((error)=> console.error(error));
};

// Function call to initialize app
init();
