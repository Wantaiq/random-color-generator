import chalk from 'chalk';

const box = (color) => [
  `
  ##############################
  ##############################
  ##############################
  ####                      ####
  ####       ${color}        ####
  ####                      ####
  ##############################
  ##############################
  ##############################
  `,
];
const randomColor = '#' + Math.floor(Math.random() * 16777215);
const chosenHueColor = process.argv[3];
const chosenLuminosity = process.argv[2];

function renderRandomColor() {
  console.log(chalk.hex(randomColor)(box(randomColor)));
}

!process.argv[2] && renderRandomColor();

function renderLuminousColor() {
  let color;
  if (chosenLuminosity === 'dark' && chosenHueColor === 'blue') {
    color = '#00008B';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenLuminosity === 'light' && chosenHueColor === 'blue') {
    color = '#ADD8E6';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenLuminosity === 'dark' && chosenHueColor === 'red') {
    color = '#990000';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenLuminosity === 'light' && chosenHueColor === 'red') {
    color = '#FF7F7F';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenLuminosity === 'dark' && chosenHueColor === 'green') {
    color = '#013220';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenLuminosity === 'light' && chosenHueColor === 'green') {
    color = '#90EE90';
    console.log(chalk.hex(color)(box(color)));
  } else {
    console.log(`Ooops! We don't have that color`);
  }
}
function renderHueColor() {
  if (chosenHueColor === 'red') {
    console.log(chalk.hex('#FF0000')(box('#FF0000')));
  } else if (chosenHueColor === 'blue') {
    console.log(chalk.hex('#0000FF')(box('#0000FF')));
  } else if (chosenHueColor === 'green') {
    console.log(chalk.hex('#00FF00')(box('#00FF00')));
  }
  console.log(`Ooops! We don't have that color`);
}

if (process.argv.length <= 3) {
  renderHueColor();
} else {
  renderLuminousColor();
}
