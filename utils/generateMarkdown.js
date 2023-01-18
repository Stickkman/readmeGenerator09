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
    case 'APACHE 2.0':
      licenseLink='https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      licenseLink='https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'NONE':
      licenseLink=''; //empty string returned if NONE is selected
      break;
      case 'BSD':
        licenseLink='https://opensource.org/licenses/BSD-3-Clause'
    default:
      licenseLink=''; // defaults to empty string if no license 
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection ='';
  if (license !="NONE") { 
    licenseSection += '## License\n'

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
module.exports = {renderLicenseBadge};
