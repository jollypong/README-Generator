// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'what is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project. (1 to 2 sentences)',
        name: 'description',
    },
    {
        type: 'list',
        message: 'What kind of license did you use for your project?',
        name: 'license',
        choices: ['Apache 2.0', 'BOOST', 'Eclipse', 'GNU', 'IBM', 'ISCLicense', 'MIT', 'Perl', 'SIL', 'Unlicense'],
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'command',
    },
    {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'n2k',
    },
    {
        type: 'input',
        message: 'What contributions were made?',
        name: 'contribution',
    },
];

inquirer.prompt(questions)

// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }
.then((response) => { 
    fs.writeFile('README.md', JSON.stringify(response), (err) => {
        if (err){ 
            console.log(err);
        } console.log(`${questions.username} + your README has been generated.`)
    });
});

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

