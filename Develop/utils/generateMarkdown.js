// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) => { 
//   if licenseBadge = () { 

//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README

//function for README Format
function generateMarkdown(response) {
  return `# ${title}<br/><br/>
      ## Table of Contents 
      *[Description](#description)
      *[Installation](#installation)
      *[License](#license)
      *[Test](#test)
      *[Contributor](#contributor)

      ## Description 
      ${response.description}
      Page is currently deployed at: <br/>
      https://${username}.github.io/${title}/ 
      <br/><br/>
      You can also check the repository at: <br/>
      https://github.com/${username}/${title}

      ## Installation
      ${response.installation}

      ## License
      ${response.license}

      ## Test
      ${response.test}

      ## Contributors
      ${response.contributor} 
      To contribute to this project, please contact me via: 
      *GitHub: https//:github.com/${response.username} 
      *Email: ${response.email}
      <br/><br/>`
};

module.exports = generateMarkdown();
