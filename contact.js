 // Form validation
 document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";
    document.getElementById("successMessage").style.display = "none";
    document.getElementById("errorMessage").style.display = "none";

    let isValid = true;

    // Validate name
    const name = document.getElementById("username").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    }

    // Validate email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    // Validate message
    const message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required.";
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzvx6zbu-MCmSDRw_9XP5arAAP8mboKZvU9vM4lVuV4Un2ZkzuKcEUpS0ymA-sjvNnREQ/exec",
            data: $("#contact-form").serialize(),
            method: "post",
            success: function (response) {
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("contact-form").reset(); // Reset form fields
            },
            error: function (err) {
                document.getElementById("errorMessage").style.display = "block";
            }
        });
    }
});