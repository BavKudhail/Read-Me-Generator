const generateMarkdown = (data) => {
  return ` 
  # ${data.title}
  ${renderLicenseBadge(data.license)}


  ## The Motivation
  ${data.motivation}


  ## Description
  ${data.description}


  ## Table of Contents
  * [Technologies Used](#technologies-used)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)


  ## Technologies Used
  ${data.technologies}


  ## Installation 
  Follow these steps to install the project and get the development environment running:
  ${data.installation}


  ## Usage 
  ${data.usage}


  ## Contributing
  ${data.contribution}


  ## Tests
  ${data.test}


  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Questions
  If you have any questions about this project please feel free to email me @ ${
    data.email
  }. You can also view more of my projects here https://www.github.com/${
    data.github
  }


  ### Email
  ${data.email}

`;
};

// Generate Markdown Function
const renderLicenseBadge = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `![License](${license.licenseBadge})`;
  }
};

const renderLicenseLink = (license) => {
  if (license === "None") {
    return "";
  } else {
    return `${license.licenseLink}`;
  }
};

function renderLicenseSection(license) {
  if (license === "None") {
    return `No license was selected`;
  } else {
    console.log(license);
    return `
  This application is covered under the ${license.title}. For further information click: `;
  }
}

module.exports = generateMarkdown;
