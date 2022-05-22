const refs = {
    input: document.querySelector('#name-input'),
    nameLable: document.querySelector('#name-output'),
};
const currentValue = refs.nameLable.textContent;

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameLable.textContent = event.currentTarget.value;
    if (!refs.nameLable.textContent) {
        refs.nameLable.textContent = currentValue;
    }
}

console.log(refs);
