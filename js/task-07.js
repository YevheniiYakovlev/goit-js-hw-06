const refs = {
    inputText: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};


function onChangeText(event) {
    refs.text.style.fontSize = event.currentTarget.value + 'px';
};

refs.inputText.addEventListener('input', onChangeText);
