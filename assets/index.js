// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];
const inquirer = require('inquirer');

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
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );

//   need to find a way to use JSON to parse answers

//   const fs = require('fs');

// fs.appendFile('log.txt', response, (err) =>
// err ? console.error(err) : console.log('Commit logged!')
// );

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
