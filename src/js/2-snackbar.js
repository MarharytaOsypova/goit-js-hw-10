import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value);
  const state = event.target.state.value;

  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
        timeout: 5000
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${delay}ms`,
        timeout: 5000
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
