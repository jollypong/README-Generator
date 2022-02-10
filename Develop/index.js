//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

//Instructions for user 
console.log("README GENERATOR")
console.log("Answer the following questions:")

//array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'username',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a valid response to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a valid response to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a valid response to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project. (1 to 2 sentences)',
        name: 'description',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a valid response to continue');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        message: 'What kind of license did you use for your project?',
        name: 'license',
        choices: ['N/A', 'Apache 2.0', 'BOOST', 'Eclipse', 'GNU', 'IBM', 'ISCLicense', 'MIT', 'Perl', 'SIL', 'Unlicense'],
        default: ['N/A'],
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a valid response to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'command',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a valid response to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'test',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a valid response to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is the installation process?',
        name: 'installation',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a valid response to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributor',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a valid response to continue');
                return false;
            }
        }
    },
];

//prompt question input into template
inquirer.prompt(questions)
    .then(({ username, email, title, description, license, command, test, installation, contributor }) => {
        let readmeFormat = `# ${title}
        ## Table of Contents 
        *[Description](#description)
        *[Installation](#installation)
        *[License](#license)
        *[Test](#test)
        *[Contributor](#contributor)

        ## Description 
        ${description}
        Page is currently deployed at: <br/>
        https://${username}.github.io/${title}/ 
        <br/><br/>
        You can also check the repository at: <br/>
        https://github.com/${username}/${title}

        ## Installation
        ${installation}

        ## License
        ${license}

        ## Test
        ${test}

        ## Contributors
        ${contributor} 
        To contribute to this project, please contact me via: 
         *GitHub: https://github.com/${username} 
         *Email: ${email}
        <br/><br/>`
    });

// TODO: Create a function to write README file
function makeHTML(fileName, response) {
    fs.writeFile('README.md', response, (err) => {
        if (err) {
            console.log(err)
        } 
        console.log(`${questions.username} + your ${fileName} has been generated.`);
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (response) {
            makeHTML("README.md", response);
    });
};

// Function call to initialize app
init();