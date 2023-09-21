document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate and submit the form (you can add more validation here)
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;

    if (firstName && lastName && email && password && birthday && gender) {
        alert('Registration successful!');
        // Here, you can send the registration data to your server for processing.
    } else {
        alert('Please fill out all fields.');
    }
});
