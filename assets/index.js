// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is the description of the project?',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the use for this project?',
        name: 'usage',
    },  
    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'test',
    }, 
    {
        type: 'list',
        message: 'What license was used for this project?',
        name: 'contact',
        choices: ['Apache 2.0', 'GNU v3.0','MIT','Boost Software 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public 2.0','Mozilla Public 2.0', 'GNU', 'BSD'],
      }, 
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },  
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
