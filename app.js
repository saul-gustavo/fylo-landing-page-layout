const heroBoton = document.getElementById('hero-boton')
const getBoton = document.getElementById('get-boton')

function isValidEmail() {
    const heroEmail = document.querySelector('.hero-input');
    const heroError = document.querySelector('.hero-text-error');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (heroEmail.value === "" || !emailRegex.test(heroEmail.value)) {
        heroError.style.display = "block";
        heroEmail.style.border = "1px solid red";
    } else {
        heroError.style.display = "none";
        heroEmail.style.border = "1px solid black";
    }
}

function getIsValid() {
    const getError = document.querySelector('.get-text-error');
    const getEmail = document.querySelector('.get-input');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (getEmail.value === "" || !emailRegex.test(getEmail.value)) {
        getError.style.display = "block";
        getEmail.style.border = "1px solid red";
    } else {
        getEmail.style.border = "1px solid black";
        getError.style.display = "none";
    }
}

heroBoton.addEventListener('click', isValidEmail);
getBoton.addEventListener('click', getIsValid);