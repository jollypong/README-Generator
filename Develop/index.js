//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
                console.log('Please enter a valid response to continue.');
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
                console.log('Please enter a valid response to continue.');
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
                console.log('Please enter a valid response to continue.');
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
                console.log('Please enter a valid response to continue.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        message: 'What kind of license did you use for your project?',
        name: 'license',
        choices: ['No License Used', 'Apache 2.0', 'BOOST', 'Eclipse', 'GNU', 'IBM', 'ISCLicense', 'MIT', 'Perl', 'SIL', 'Unlicense'],
        default: ['No License Used'],
        validate: licenseBadge => {
            if (licenseBadge) {
                return true;
            } else {
                console.log('Select a license used for the project.');
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
                console.log('Please enter a valid response to continue.');
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
                console.log('Please enter a valid response to continue.');
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
                console.log('Please enter a valid response to continue.');
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
                console.log('Please enter a valid response to continue.');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function makeHTML(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log(`${questions.username} + your ${fileName} has been generated.`);
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(response) {
            console.log(response)
            makeHTML("README.md", generateMarkdown(response));
        });
};

// Function call to initialize app
init();