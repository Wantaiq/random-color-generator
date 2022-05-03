import chalk from 'chalk';
import pkg from 'enquirer';

const { Select } = pkg;

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
let chosenHueColor = process.argv[3];
let chosenSaturation = process.argv[2];

function renderRandomColor() {
  console.log(chalk.hex(randomColor)(box(randomColor)));
}

!process.argv[2] && renderRandomColor();

function renderLuminousColor() {
  let color;
  if (chosenSaturation === 'dark' && chosenHueColor === 'blue') {
    color = '#00008B';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenSaturation === 'light' && chosenHueColor === 'blue') {
    color = '#ADD8E6';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenSaturation === 'dark' && chosenHueColor === 'red') {
    color = '#990000';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenSaturation === 'light' && chosenHueColor === 'red') {
    color = '#FF7F7F';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenSaturation === 'dark' && chosenHueColor === 'green') {
    color = '#013220';
    console.log(chalk.hex(color)(box(color)));
  } else if (chosenSaturation === 'light' && chosenHueColor === 'green') {
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
  } else if (process.argv.includes('ask')) {
    return;
  }
  console.log(`Ooops! We don't have that color`);
}

if (process.argv.length <= 3) {
  renderHueColor();
} else {
  renderLuminousColor();
}

async function handleAsk() {
  const promptAnswers = {
    color: '',
    saturation: '',
  };
  const promptColor = new Select({
    name: 'color',
    message: 'Choose a color',
    choices: ['red', 'green', 'blue'],
  });

  const promptSaturation = new Select({
    name: 'saturation',
    message: 'Would you like your color to be dark or light?',
    choices: ['light', 'dark'],
  });

  const promptColorAnswer = await promptColor.run();
  const saturationAnswer = await promptSaturation.run();
  promptAnswers.color = promptColorAnswer;
  promptAnswers.saturation = saturationAnswer;
  console.log(promptAnswers);

  chosenHueColor = promptAnswers.color;
  chosenSaturation = promptAnswers.saturation;

  renderLuminousColor();
}

process.argv[2] === 'ask' && handleAsk();
