//Function to return license badge based on license type passed in during promtps
function renderLicenseBadge(license) {
  let licenseBadge ='';
  if(license !='NONE') { //if no license type selected then return an empty string
    licenseBadge = '![License Type](https://shields.io/badge/license-' + license + '-blue)';
  } 
      return licenseBadge;
}
 
//function to render correct license link
function renderLicenseLink(license) {
    //switch case to render corrent license link based on user entered license
    let licenseLink = ''; // initialize variable
    switch(license) { 
    case 'MIT':
      licenseLink='https://mit-license.org/'; // used this because opensource link not populating correctly
      break; // prevents other cases from running  
    case 'APACHE_2.0':
      licenseLink='https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL_3.0':
      licenseLink='https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'NONE':
      licenseLink=''; //empty string returned if NONE is selected
      break;
    case 'BSD':
        licenseLink='https://opensource.org/licenses/BSD-3-Clause';
        break;
    default:
      licenseLink=''; // defaults to empty string if no license 
    }
    return licenseLink;
}

//function to return license section and details
function renderLicenseSection(license) {
  let licenseSection =''; 
  if (license !="NONE") {  // license is NOT NONE then create sections w details
    licenseSection += '## License\n'
    licenseSection += `This license is covered under the ${license}\n for more information visit ` + renderLicenseLink(license) +'\n';
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // title
  let markdowns = "# "+data.title + "\n";
  // badge
  markdowns += renderLicenseBadge(data.license) + "\n";
  //TOC
  markdowns += "## Table of Contents" + "\n";
   markdowns += "* [Installation](#installation)\n";
   markdowns += "* [Usage](#usage)\n";
   markdowns += "* [License](#license)\n";
   markdowns += "* [Contributing](#contributing)\n";
   markdowns += "* [Tests](#tests)\n";
   markdowns += "* [Questions](#questions)\n";
  //description
  markdowns += "## Description\n"
  markdowns += data.description + "\n";
  //installation
  markdowns += "## Installation\n";
  markdowns += data.installDependencies + "\n";
  //usage
  markdowns += "## Usage\n";
  markdowns += data.repoUsage + "\n";
  //license


  markdowns += renderLicenseSection(data.license) +"\n";
  //Contribution
  markdowns += "## Contributing\n";
  markdowns += data.contributionInfo + "\n";
  //Tests
  markdowns += "## Tests\n";
  markdowns += data.tests +"\n";
  //Questions
  markdowns += "## Questions\n";
  markdowns += "Any questions regarding this repo can be sent to me directly at " + data.email +"\n";
  markdowns += "Github Username: " + data.githubUsername + "\n";
  markdowns += "Github Profle Link: [https://github.com/" + data.githubUsername + "](https://github.com/"+data.githubUsername + "\n";

return markdowns;

}

module.exports = {renderLicenseBadge};
module.exports = generateMarkdown; 
  
// vv-- Alternate generate code -vv for tweaks
// ## Description
    
// ${data.description}
    
// ## Table of Contents
// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Contributing](#contributing)
// * [Tests](#tests)
// * [Questions](#questions)
        
    
// ## Installation

// To install the required dependencies, run the command below
        
// ${data.installDependencies}
    
// ## Usage

// ${data.repoUsage}

// ## License
    
// This project is licensed under the ${data.license}

// ## Contributing

// ${data.contributionInfo}

// ## Tests

// Use the following command to run tests
  
//  ${data.tests}
    
// ## Questions

// Any questions regarding this repo can be sent to me directly at ${data.email}

// Github Username: ${data.githubUsername}

// GitHub Profile Link: [https://github.com/${data.githubUsername}](https://github.com/${data.githubUsername})
// `

  



