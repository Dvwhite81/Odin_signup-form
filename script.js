const passwordInput = document.getElementById('passwordInput');
const confirmInput = document.getElementById('confirmInput');
const errorMessage = document.getElementById('error-message');

passwordInput.addEventListener('input', function() {
    checkForMatch();
});

function checkForMatch() {
    let currentPassword = passwordInput.value;
    let currentConfirm = confirmInput.value;

    if (currentPassword === '') {
        passwordInput.classList.add('error');
    }
    if (currentConfirm === '') {
        confirmInput.classList.add('error');
    }
    if (currentPassword !== currentConfirm) {
        passwordInput.classList.add('error');
        confirmInput.classList.add('error');
        errorMessage.style.visibility = 'visible';
    } else {
        errorMessage.style.visibility = 'hidden';
    }

}

checkForMatch();
