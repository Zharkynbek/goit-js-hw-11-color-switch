const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.body;
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

const INTERVAL_DELAY = 1000;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomColor() {
  const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
  return colors[randomColorIndex];
}

function setBgColor() {
  bodyRef.style.backgroundColor = getRandomColor();
}

function startBgColor() {
  intervalId = setInterval(setBgColor, INTERVAL_DELAY);
  startBtnRef.disabled = true;
}

function stopBgColor() {
  clearInterval(intervalId);
  startBtnRef.disabled = false;
}

startBtnRef.addEventListener('click', startBgColor);
stopBtnRef.addEventListener('click', stopBgColor);