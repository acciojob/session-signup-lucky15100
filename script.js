//your JS code here. If required.
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password === confirmPassword) {
        // Save data in session storage
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        // Show success message
        alert('Sign up successful!');
    } else {
        // Show error message if passwords don't match
        alert('Passwords do not match');
    }
});

