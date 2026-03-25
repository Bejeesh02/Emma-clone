
function showAlert() {
    alert("Emergency alert sent! Stay Safe.");
}


// registerForm
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMsg = document.getElementById("errorMsg");

    if (name === "") {
        errorMsg.innerText = "Name is required";
        return;
    }

    if (!email.includes("@")) {
        errorMsg.innerText = "Enter valid email";
        return;
    }

    if (password.length < 6) {
        errorMsg.innerText = "Password must be at least 6 characters";
        return;
    }

    if (password !== confirmPassword) {
        errorMsg.innerText = "Passwords do not match";
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration Successful!");
    window.location.href = "login.html";
});



// LOGOUT

function logout() {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}




function toggleDarkMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}






let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
    alert("Added to cart");
}

function updateCart() {
    let cartCount = document.getElementById("cartCount");
    let cartTotal = document.getElementById("cartTotal");
    let cartItems = document.getElementById("cartItems");

    if (!cartCount || !cartTotal || !cartItems) return;

    cartItems.innerHTML = ""; // Clear list

    let total = 0;

    cart.forEach(function (item, index) {
        total += item.price;

        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            ${item.name} - ₹${item.price}
            <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">❌</button>
        `;

        cartItems.appendChild(li);
    });

    cartCount.innerText = cart.length;
    cartTotal.innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1); // remove item
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
     alert("Remove from cart");
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    updateCart();
     alert("Clear Cart");
}

document.addEventListener("DOMContentLoaded", function () {
    updateCart();
});





