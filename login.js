// login.js
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate successful login (client-side only)
    if (username === 'user' && password === 'password') {
        window.location.href = 'todo.html';
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});
