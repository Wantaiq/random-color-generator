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
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
const chosenHueColor = process.argv[2];

function renderRandomColor() {
  console.log(chalk.hex(randomColor)(box(randomColor)));
}
renderRandomColor();

function renderLuminousColor() {
  console.log('I am luminous');
}
function renderHueColor() {
  if (chosenHueColor === 'red') {
    console.log(chalk.hex('#FF0000')(box('#FF0000')));
  } else if (chosenHueColor === 'blue') {
    console.log(chalk.hex('#0000FF')(box('#0000FF')));
  } else if (chosenHueColor === 'green') {
    console.log(chalk.hex('#00FF00')(box('#00FF00')));
  }
  console.log('I am hue');
}

if (process.argv.length <= 3) {
  renderHueColor();
} else {
  renderLuminousColor();
}
