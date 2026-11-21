document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    if (!/^\d{10}$/.test(phone)) {
        alert("Enter a valid 10-digit phone number");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return;
    }

    document.getElementById("message").textContent =
        "Registration Successful! Welcome " + name;

    document.getElementById("registrationForm").reset();
});
