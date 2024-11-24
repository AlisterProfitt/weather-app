const body = document.querySelector('body');

export function removeAllNonFormElements() {
    const firstDiv = document.querySelector('div');
    console.log(firstDiv);
    while (body.lastChild) {
        if (body.lastChild !== firstDiv) {
            body.removeChild(body.lastChild);
        } else {
            break;
        }
    }
}