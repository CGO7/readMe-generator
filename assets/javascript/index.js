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
`# ${answers.title}
<img align="right" src="data:image/png;base64,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">
<br>

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
