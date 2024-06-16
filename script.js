document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    const form = document.getElementById('registrationForm')

    nameInput.addEventListener('input', () => validateName())
    emailInput.addEventListener('input', () => validateEmail())
    passwordInput.addEventListener('input', () => validatePassword())

    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault()
        } else {
            nameInput.value.trim()
            emailInput.value.trim()
            passwordInput.value.trim()
        }
        
    })
})

function validateForm () {
    let isValid = true
    isValid = validateName() && isValid
    isValid = validateEmail() && isValid
    isValid = validatePassword() && isValid
    return isValid
}

//function to validate name
function validateName () {
    const nameInput = document.getElementById('name')
    const nameError = document.getElementById('nameError')
    const nameErrorIcon = document.getElementById('nameErrorIcon')
    const nameCheck = document.getElementById('nameCheck')
    const nameRegex = /^[a-zA-Z\s]+$/ // only letters and space
    const repeatedCharRegex =  /(.)\1{2,}/

    if (nameInput.value.trim() === '') {
        nameError.innerText = 'Please enter your name'
        nameErrorIcon.style.visibility = 'visible'
        nameErrorIcon.style.color = 'red'
        nameInput.style.border = '2px solid red'
        nameCheck.style.visibility = 'hidden'
        return false
    } else if(!nameRegex.test(nameInput.value.trim())) {
        nameError.innerText = 'Name can only container letters and space'
        nameErrorIcon.style.visibility = 'visible'
        nameErrorIcon.style.color = 'red'
        nameInput.style.border = '2px solid red'
        nameCheck.style.visibility = 'hidden'
        return false
    } else if(repeatedCharRegex.test(nameInput.value.trim())) {
        nameError.innerText = 'Name cannot contain the same character'
        nameErrorIcon.style.visibility = 'visible'
        nameErrorIcon.style.color = 'red'
        nameInput.style.border = '2px solid red'
        nameCheck.style.visibility = 'hidden'
        return false
    } else if(nameInput.value.trim().length < 8) {
        nameError.innerText = 'Name should be at least 8 long'
        nameErrorIcon.style.visibility = 'visible'
        nameErrorIcon.style.color = 'red'
        nameInput.style.border = '2px solid red'
        nameCheck.style.visibility = 'hidden'
        return false
    } else if(nameInput.value.trim()) {
        nameError.innerText = 'Please enter a different name'
        nameErrorIcon.style.visibility = 'visible'
        nameErrorIcon.style.color = 'red'
        nameInput.style.border = '2px solid red'
        nameCheck.style.visibility = 'hidden'
        return false
    } else {
        nameError.innerText = ''
        nameErrorIcon.style.visibility = 'hidden'
        nameCheck.style.color = 'green'
        nameInput.style.border = '2px solid green'
        nameCheck.style.visibility = 'visible'
        setTimeout(() => {
            nameInput.style.border = ''
            nameCheck.style.visibility = 'hidden'
        }, 5000);
        return true
    }
}


function validateEmail () {
    const emailInput = document.getElementById('email')
    const emailError = document.getElementById('emailError')
    const emailErrorIcon = document.getElementById('emailErrorIcon')
    const emailCheck = document.getElementById('emailCheck')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // basic email format

    if (emailInput.value.trim() === '') {
        emailError.innerText = 'Please enter your email address'
        emailErrorIcon.style.visibility = 'visible'
        emailErrorIcon.style.color = 'red'
        emailInput.style.border = '2px solid red'
        emailCheck.style.visibility = 'hidden'
        return false
    } else if(!emailRegex.test(emailInput.value.trim())) {
        emailError.innerText = 'Your email must contain the @ sign'
        emailErrorIcon.style.visibility = 'visible'
        emailErrorIcon.style.color = 'red'
        emailInput.style.border = '2px solid red'
        emailCheck.style.visibility = 'hidden'
        return false
    } else if(emailInput.value.trim()) {
        emailError.innerText = 'Please enter a different email'
        emailErrorIcon.style.visibility = 'visible'
        emailErrorIcon.style.color = 'red'
        emailInput.style.border = '2px solid red'
        emailCheck.style.visibility = 'hidden'
        return false
    } else {
        emailError.innerText = ''
        emailErrorIcon.style.visibility = 'hidden'
        emailCheck.style.color = 'green'
        emailInput.style.border = '2px solid green'
        emailCheck.style.visibility = 'visible'
        setTimeout(() => {
            emailInput.style.border = ''
            emailCheck.style.visibility = 'hidden'
        }, 5000);
        return true
    }
}


function validatePassword () {
    const passwordInput = document.getElementById('password')
    const passwordError = document.getElementById('passwordError')
    const passwordCheck = document.getElementById('passwordCheck')
    const passwordErrorIcon = document.getElementById('passwordErrorIcon')

    if(passwordInput.value.trim() === '') {
        passwordError.innerText = 'Please enter your password'
        passwordErrorIcon.style.visibility = 'visible'
        passwordErrorIcon.style.color = 'red'
        passwordInput.style.border = '2px solid red'
        passwordCheck.style.visibility = 'hidden'
        return false
    } else if(passwordInput.value.trim().length < 6) {
        passwordError.innerText = 'Name should be at least 6 long'
        passwordErrorIcon.style.visibility = 'visible'
        passwordErrorIcon.style.color = 'red'
        passwordInput.style.border = '2px solid red'
        passwordCheck.style.visibility = 'hidden'
        return false
    } else if(passwordInput.value.trim()) {
        passwordError.innerText = 'Please enter a different password'
        passwordErrorIcon.style.visibility = 'visible'
        passwordErrorIcon.style.color = 'red'
        passwordInput.style.border = '2px solid red'
        passwordCheck.style.visibility = 'hidden'
        return false
    } else {
        passwordError.innerText = ''
        passwordErrorIcon.style.visibility = 'hidden'
        passwordCheck.style.color = 'green'
        passwordInput.style.border = '2px solid green'
        passwordCheck.style.visibility = 'visible'
        setTimeout(() => {
            passwordInput.style.border = ''
            passwordCheck.style.visibility = 'hidden'
        }, 5000);
        return true
    }
}