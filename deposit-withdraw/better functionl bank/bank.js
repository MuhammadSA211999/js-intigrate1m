document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value
    // password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value
    if (userEmail == 'abc@ceo.com' && userPassword == 'tarmat') {
        window.location.href = "banking.html";
    }
    else {
        window.location.href = "password.html"
    }

})