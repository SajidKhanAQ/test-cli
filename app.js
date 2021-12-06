const inquirer = require("inquirer");
// import chalk from "chalk";

let modulesInstalled = [];

const directionsPrompt = {
  type: "list",
  name: "module",
  message: "Which module do you want to install?",
  choices: [
    "chalk",
    "express",
    "multer",
    "Not in a mood to install any package!",
  ],
};

function main() {
  install();
}

function install() {
  inquirer.prompt(directionsPrompt).then((answers) => {
    switch (answers.module) {
      case "chalk":
        console.log('Run "npm i chalk"');
        modulesInstalled.push(answers.module);
        quite();
        break;
      case "express":
        console.log('Run "npm i express"');
        modulesInstalled.push(answers.module);
        quite();
        break;
      case "multer":
        console.log('Run "npm i multer"');
        modulesInstalled.push(answers.module);
        quite();
        break;
      default:
        console.log("Sorry bro! Can't quite without doing something.");
        install();
    }
  });
}

const quite = () => {
  console.log("You installed the following modules: ", modulesInstalled);
  console.log("Going to quit now!");
};

main();
