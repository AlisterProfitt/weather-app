const body = document.querySelector('body');

export function removeAllElements() {
    while (body.firstChild) {
    body.remove();
    }
}