//Packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMd = require("./utils/generateMarkdown");

// Questions Array
//const questions = [];

inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"What is title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Provide a brief description of your project."
    },
    {
        type:"input",
        name:"installation",
        message:"Are there any steps required to install your project? If so, what are they?"
    },
    {
        type:"input",
        name:"usage",
        message:"Provide instructions for use."
    },
    {
        type:"input",
        name:"credits",
        message:"List collaborators."
    },
    {
        type:"list",
        name:"license",
        message:"What is your license for this project?",
        choices: ["Apache 2.0 License", "MIT License", "BSD 3-Clause License", "Mozilla Public License 2.0", "IBM Public License Version 1.0", "Eclipse Public License 1.0", "The zlib/libpng License", "ISC License", "The Perl License", "The Unlicense"],
    },
    {
        type:"input",
        name:"tests",
        message:"How can users run tests on this application?" 
    },
    {
        type:"input",
        name:"github",
        message:"Enter your Github username." 
    },
    {
        type:"input",
        name:"email",
        message:"Enter your email address." 
    }
    
    ]).then(answer => {
    
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
