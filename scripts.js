// Counter
const textarea = document.getElementById('bugdescription');
const counter = document.getElementById('char-counter');
const maxLength = textarea.maxLength;

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    counter.textContent = `${currentLength}/${maxLength} characters`;
});

textarea.closest('form').addEventListener('reset', () => {
    setTimeout(() => {
        counter.textContent = `0/${maxLength} characters`;
    }, 0);
});

// Detect keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        document.body.classList.add('using-keyboard');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('using-keyboard');
});