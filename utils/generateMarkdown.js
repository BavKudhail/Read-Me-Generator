// Generate Markdown Function

function generateMarkdown(data) {
  console.log(`${data.github}`);
  console.log(`${data.repo}`);
  return ` # ${data.title}

  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  
  ## The motivation
  ${data.motivation}

  ## Description
  ${data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)


  ## User Story
  ${data.userStory}
  
  ## Acceptance Criteria
  ${data.acceptanceCriteria}

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
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  This application is licenses under ${data.license}.
      
  ## Questions
  If you have any questions about this project please feel free to email me ${data.email}. You can also view more of my projects here https://www.github.com/${data.github}

  ### Github
  github.com/${data.github}

  ### Email
  ${data.email}

`;
}

module.exports = generateMarkdown;
