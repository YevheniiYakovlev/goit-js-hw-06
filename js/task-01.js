const categorisEl = document.querySelector('#categories');
console.log( "Number of categories: ", categorisEl.children.length);


const itemEl = categorisEl.querySelectorAll('li.item');

itemEl.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent)
    console.log('Elements:', item.lastElementChild.children.length)
}
    )
