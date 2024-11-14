document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Display the data in the #formData div
    const formDataDisplay = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
    document.getElementById("formData").innerHTML = formDataDisplay;

    // Show the data card
    document.getElementById("dataCard").style.display = "block";

    // Clear the form fields
    document.getElementById("signupForm").reset();
});
