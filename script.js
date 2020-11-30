const opens = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('container');

opens.addEventListener('click', () => {
    container.classList.add('active');
});
close.addEventListener('click', () => {
    container.classList.remove('active');
});