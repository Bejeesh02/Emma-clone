
// login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        document.getElementById("loginError").innerText = "Invalid credentials";
    }
});
