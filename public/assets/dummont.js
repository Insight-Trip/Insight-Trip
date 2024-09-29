const input = document.getElementById('input_message');
const send = document.querySelector('.draw')

input.addEventListener('input', function() {
    if (this.value != "") {
        send.classList.add('activate');
    } else {
        send.classList.remove('activate');
    }
});
