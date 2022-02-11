//function for README Format
function generateMarkdown(response) {
  return `# ${response.title}
## License
<img src=https://img.shields.io/badge/License-${response.license}-blue.svg>

## Table of Contents 
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Test](#test)

[Screenshot](#screenshot)

[Contributors](#contributors)

## Description 
${response.description}

Page is currently deployed at: 

['Deployed Page'](https://${response.username}.github.io/${response.title}/) 
    
You can also check the repository at: 

['GitHub Repo'](https://github.com/${response.username}/${response.title})

## Installation
Following code is required for installation: 

    ${response.installation}

## Usage
  In order to use this application, please run following command: 

    ${response.runCommand}

## Test
  In order for testing please follow below code

    ${response.test}

## Screenshot

## Contributors

${response.contributor} 

Got any questions or want to contribute to this project? 
Contact me via: 

*[${response.username}](https//:github.com/${response.username}) 

*Email: ${response.email}`};

module.exports = generateMarkdown;
