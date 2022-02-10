//function for README Format
function generateMarkdown(response) {
  return `# ${response.title}
  ## License
  <img src=https://img.shields.io/badge/License-${response.license}-blue.svg>

  ## Table of Contents 
    *[Description](#description)
    *[Installation](#installation)
    *[Test](#test)
    *[Contributor](#contributor)

  ## Description 
    ${response.description}
    Page is currently deployed at: 
    https://${response.username}.github.io/${response.title}/ 
    
    You can also check the repository at: 
    https://github.com/${response.username}/${response.title}

  ## Installation
    ${response.installation}

  ## Test
    ${response.test}

  ## Contributors
    ${response.contributor} 
    To contribute to this project, please contact me via: 
    *GitHub: https//:github.com/${response.username} 
    *Email: ${response.email}`
};

module.exports = generateMarkdown;
