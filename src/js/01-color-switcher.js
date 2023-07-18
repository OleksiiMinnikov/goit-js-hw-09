// Отримуємо посилання на кнопки "Start" і "Stop"
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId; // Ідентифікатор інтервалу для зміни кольору

// Функція, що змінює колір фону на випадкове значення
function changeBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

// Функція, що генерує випадковий колір
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Обробник події при натисканні на кнопку "Start"
function handleStartButtonClick() {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true; // Вимикаємо кнопку "Start"
}

// Обробник події при натисканні на кнопку "Stop"
function handleStopButtonClick() {
  clearInterval(intervalId);
  startButton.disabled = false; // Включаємо кнопку "Start"
}

// Додаємо обробники подій до кнопок
startButton.addEventListener('click', handleStartButtonClick);
stopButton.addEventListener('click', handleStopButtonClick);
