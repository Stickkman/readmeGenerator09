// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let currentLicense=''; //variable to hold license code for readme insertion
  
  //determines what license was entered during prompts and assigns the appropriate code to currentLicense 
   //including license badge and link
  
  switch(license) { 
    case 'MIT':
      currentLicense=`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break; // prevents other cases from running  
    case 'APACHE 2.0':
      currentLicense=`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GPL 3.0':
      currentLicense=`[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'NONE':
      currentLicense=''; //empty string returned if no license was selected
      break;
    default:
      currentLicense=`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;    // defaults to MIT 
    }
    return currentLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
module.exports = {renderLicenseBadge};
