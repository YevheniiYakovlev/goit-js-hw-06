const body = document.body;
const btnChangeColor= document.querySelector('.change-color');
const valueBackgroundColor= document.querySelector('.color');

const changesBackgroundColor = event => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  valueBackgroundColor.textContent = randomColor;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnChangeColor.addEventListener('click', changesBackgroundColor);
