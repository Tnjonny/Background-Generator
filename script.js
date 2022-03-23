const css = document.querySelector('h3');
const co1 = document.querySelector('.c1');
const bod = document.querySelector('.grad');

function setGrad() {
  bod.style.background = co1.value;

  css.textContent = bod.style.background + '';
}

co1.addEventListener('input', setGrad);
