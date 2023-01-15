// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // for gathering input
const fs = require("fs"); // to read and write files
const { BADHINTS } = require("dns");


const generateReadme = ({ title, githubUsername, email, license, description, installDependencies, tests, repoUsage, contributionInfo })=>
    `#${title}
     
    INSERT GIT HUB LICENSE HERE
    
    ## Description
    
    ${description}
    
    ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributing](#contributing)
        * [Tests](#tests)
        * [Questions](#questions)
        
    
    ## Installation

    To install the required dependencies, run the command below
    
    ````bash
    ${installDependencies}
    ````
    ##Usage

    ${repoUsage}

    ##License

    
    This project is licensed under the ${license}

    ##Contributing

    ${contributionInfo}

    ##Tests

    Use the following command to run tests

    ````bash
    ${tests}
    
    ##Questions

    Any questions regarding this repo can be sent to me directly at ${email}
    Github Username: ${githubUsername}
    
    ```

// question array of objects
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
const init = () => {
    inquirer.prompt(questions).then((answers)=> writeToFile('README.md', generateReadme(answers)))
    .then(()=> console.log('Successfully created README.md'))
    .catch((error)=> console.error(err));
};

// Function call to initialize app
init();
