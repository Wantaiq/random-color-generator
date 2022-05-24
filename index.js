import chalk from 'chalk';
import pkg from 'enquirer';

const box = (color) => [
  `
  ################################
  ################################
  ################################
  ####                        ####
  ####        ${color}         ####
  ####                        ####
  ################################
  ################################
  ################################
  `,
];
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
let chosenHueColor = process.argv[2];
let chosenLuminosity = process.argv[3];

function renderRandomColor() {
  console.log(chalk.hex(randomColor)(box(randomColor)));
}

function renderLuminousColor() {
  let color;
  if (chosenLuminosity === 'dark' && chosenHueColor === 'blue') {
    color = '#00008B';
  } else if (chosenLuminosity === 'light' && chosenHueColor === 'blue') {
    color = '#ADD8E6';
  } else if (chosenLuminosity === 'dark' && chosenHueColor === 'red') {
    color = '#990000';
  } else if (chosenLuminosity === 'light' && chosenHueColor === 'red') {
    color = '#FF7F7F';
  } else if (chosenLuminosity === 'dark' && chosenHueColor === 'green') {
    color = '#013220';
  } else if (chosenLuminosity === 'light' && chosenHueColor === 'green') {
    color = '#90EE90';
  }

  console.log(chalk.hex(color)(box(color)));
}
function renderHueColor() {
  chosenHueColor = process.argv[2];
  let chosenColorHexCode;
  if (chosenHueColor === 'red') {
    chosenColorHexCode = '#FF0000';
  } else if (chosenHueColor === 'blue') {
    chosenColorHexCode = '#0000FF';
  } else if (chosenHueColor === 'green') {
    chosenColorHexCode = '#00FF00';
  } else if (process.argv.includes('ask')) {
    return;
  }
  console.log(chalk.hex(chosenColorHexCode)(box(chosenColorHexCode)));
}

async function handleColorPrompt() {
  const promptAnswers = {
    color: '',
    luminosity: '',
  };
  const promptColor = new pkg.Select({
    name: 'color',
    message: 'Choose a color',
    choices: ['red', 'green', 'blue'],
  });

  const promptLum = new pkg.Select({
    name: 'luminosity',
    message: 'Would you like your color to be dark or light?',
    choices: ['light', 'dark'],
  });

  const promptColorAnswer = await promptColor.run();
  const luminosityAnswer = await promptLum.run();
  promptAnswers.color = promptColorAnswer;
  promptAnswers.luminosity = luminosityAnswer;

  chosenHueColor = promptAnswers.color;
  chosenLuminosity = promptAnswers.luminosity;

  renderLuminousColor();
}

if (process.argv[2] === 'ask') {
  handleColorPrompt().catch(() =>
    console.log('Something went wrong, please try again.'),
  );
} else if (!process.argv[2]) {
  renderRandomColor();
} else if (process.argv.length === 3) {
  renderHueColor();
} else if (process.argv.length > 3) {
  renderLuminousColor();
}
