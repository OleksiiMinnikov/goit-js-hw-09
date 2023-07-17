import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
let delayInp = null;
let stepInp = null;
let amountInp = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const submitHandler = (e) => {
  e.preventDefault();
  if (!e.target.tagName === 'BUTTON') return; // Перевірка, чи не було натиснуто не кнопку

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  delayInp = Number(delay.value);
  stepInp = Number(step.value);
  amountInp = Number(amount.value);

  for (let i = 1; i <= amountInp; i++) {
    createPromise(i, delayInp)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`); // Відображення успішного промісу
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`); // Відображення відхиленого промісу
      });

    delayInp += stepInp; // Збільшення затримки для наступного промісу
  }

  e.currentTarget.reset(); // Скидання значень форми
};

formEl.addEventListener('submit', submitHandler); // Додавання обробника події на форму
