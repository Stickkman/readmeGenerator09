// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // for gathering input
const fs = require("fs"); // to read and write files
const util = require("util");

//contains template literal for readme generation
const generateReadme = ({ title, githubUsername, email, license, description, installDependencies, tests, repoUsage, contributionInfo })=>
`# ${title}
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
        
${installDependencies}
    
## Usage

${repoUsage}

## License
    
This project is licensed under the ${license}

## Contributing

${contributionInfo}

## Tests

Use the following command to run tests
  
 ${tests}
    
## Questions

Any questions regarding this repo can be sent to me directly at ${email}

Github Username: ${githubUsername}

GitHub Profile Link: [https://github.com/${githubUsername}](https://github.com/${githubUsername})
`

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

const writeToFile = (fileName, data) => {
fs.writeFile(fileName, data, (err)=> err ? console.log(err) : console.log('1Successfully created README.md'));
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(questions).then((answers)=> writeToFile('README.md', generateReadme(answers)))
    .then(()=> console.log('2Successfully created README.md'))
    .catch((error)=> console.error(error));
};

// Function call to initialize app
init();
