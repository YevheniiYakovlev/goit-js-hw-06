const refs = {

    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counterDisplay: document.querySelector('#value'),
}

let counterValue = 0;


refs.decrementBtn.addEventListener('click', onDecrement);
refs.incrementBtn.addEventListener('click', onIncrement);

function onDecrement() {
    refs.counterDisplay.textContent = counterValue -= 1;   
};

function onIncrement() {
    refs.counterDisplay.textContent = counterValue += 1;
}