
const myHandler = function(evt) {
    console.log(`cToggle "${evt.detail.id}" a été invoqué avec la méthode "${evt.detail.method}"`)
}
document.addEventListener('cToggle_event', myHandler);