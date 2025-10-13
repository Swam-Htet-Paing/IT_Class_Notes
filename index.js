document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const code = button.nextElementSibling.innerText;
        navigator.clipboard.writeText(code).then(() => {
            button.textContent = 'Copied!';
            setTimeout(() => button.textContent = 'Copy', 1500);
        }).catch(err => {
            console.error('Copy failed:', err);
        });
    });
});
