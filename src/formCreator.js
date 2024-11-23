export function createForm() {
    const elem = document.createElement('div');
    elem.classList.add('container', 'form-container');
    document.body.appendChild(elem);
    createFormElement();
}

function createFormElement() {
    const elem = document.createElement('form');
    const parent = document.querySelector('div.form-container');
    parent.appendChild(elem);
    createLabel();
    createInput();
}

function createLabel() {
    const elem = document.createElement('label');
    elem.textContent = 'City:'
    elem.setAttribute('for', 'city-search')
    const parent = document.querySelector('form');
    parent.appendChild(elem);
}

function createInput() {
    const elem = document.createElement('input');
    setAttributes(elem, {
        "type":"search",
        "name":"city-search",
        "id":"city-search",
        "placeholder":"Please type the name of your city"
    })
    const parent = document.querySelector('form');
    parent.appendChild(elem);
}

function setAttributes(element, attributes) {
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}