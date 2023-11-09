// signup.js
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Simulate successful sign-up (client-side only)
    alert('Signup successful! You can now log in.');
    window.location.href = 'index.html'; // Redirect to the login page
});
