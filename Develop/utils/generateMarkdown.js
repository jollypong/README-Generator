//function for README Format
function generateMarkdown(response) {
  return `# ${response.title}
  ## License
  <img src=https://img.shields.io/badge/License-${response.license}-blue.svg>

  ## Table of Contents 
    *[Description](#description)
    *[Installation](#installation)
    *[Usage](#usage)
    *[Test](#test)
    *[Contributor](#contributor)

  ## Description 
    ${response.description}

    Page is currently deployed at: 
    [Deployed Link](https://${response.username}.github.io/${response.title}/) 
    
    You can also check the repository at: 
    [GitHub Repo](https://github.com/${response.username}/${response.title})

  ## Installation
    ${response.installation}

  ## Usage
    ${response.runCommand}

  ## Test
    ${response.test}

  ## Screenshot

  ## Contributors
  Got any questions or want to contribute to this project? 
  
  ${response.contributor} 

    *[GitHub] (https//:github.com/${response.username}) 
    *[Email] ${response.email}`
};

module.exports = generateMarkdown;
