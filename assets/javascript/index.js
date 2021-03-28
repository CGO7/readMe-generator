// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const markdown = require("markdown-js");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
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
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'test',
    }, 
    {
        type: 'list',
        message: 'What license was used for this project?',
        name: 'license',
        choices: ['Apache 2.0', 'GNU v3.0','MIT','Boost Software 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public 2.0','Mozilla Public 2.0', 'GNU', 'BSD','None'],
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
  ]);
};  

// TODO: Create a function to write README file
const writeFileSync = util.promisify(fs.writeFile);

const generateReadMe = (answers) =>                                                        
`# ${answers.title}                                                     ![Apache](./assets/images/apache.png)<br>                                                                 
- [Description](#Description)
- [Installation Instructions](#Installation-Instructions)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
<br>

## Description
 ${answers.description}
<br>

## Installation
 ${answers.installation}
<br>

## Usage
 ${answers.usage}
<br>

## Contributing
 ${answers.contributing}
<br>

## Tests
 ${answers.test}
<br>

## Questions
[${answers.github}](http://github.com/${answers.github}) 
### For questions about this project, please email:
 ${answers.email}
 <br>

### License
 ${answers.license}
`

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileSync("README.md", generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.log(err));
}


// Function call to initialize app
init();
