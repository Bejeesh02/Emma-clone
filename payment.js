function completePayment() {

    // Simple validation
    const name = document.getElementById("cardName").value;
    const number = document.getElementById("cardNumber").value;
    const expiry = document.getElementById("expiry").value;
    const cvv = document.getElementById("cvv").value;

    if (name === "" || number === "" || expiry === "" || cvv === "") {
        alert("Please fill all payment details.");
        return;
    }
    if (number.length !== 16) {
    alert("Invalid card number");
    return;
}

if (cvv.length !== 3) {
    alert("Invalid CVV");
    return;
}

    // Clear cart from localStorage
    localStorage.removeItem("cart");

    alert("Payment Successful! Thank you for your purchase ❤️");

    // Redirect back to shop/home
    window.location.href = "index.html";
}