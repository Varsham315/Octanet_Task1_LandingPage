document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Home Appliances", price: 10 },
        { id: 2, name: "Women Dresses", price: 20 },
        { id: 3, name: "Men Clothing", price: 30 },
        { id: 4, name: "Jewellery", price: 40 },
        { id: 5, name: "Stationary", price: 50 },
        { id: 6, name: "Watches", price: 60 },
        { id: 7, name: "Kids", price: 50 },
        { id: 8, name: "Shoes", price: 60 },
    ];

    let cart = [];
    
    function updateCart() {
        const cartItemsDiv = document.getElementById("cart-items");
        cartItemsDiv.innerHTML = "";
        let totalPrice = 0;

        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const cartItemDiv = document.createElement("div");
            cartItemDiv.textContent = `${product.name} - $${product.price} x ${item.quantity}`;
            cartItemsDiv.appendChild(cartItemDiv);
            totalPrice += product.price * item.quantity;
        });

        document.getElementById("total-price").textContent = totalPrice;
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", event => {
            const productId = parseInt(event.target.closest(".product").dataset.id);
            const cartItem = cart.find(item => item.id === productId);

            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({ id: productId, quantity: 1 });
            }

            updateCart();
        });
    });

    document.getElementById("feedback-form").addEventListener("submit", event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        console.log("Feedback submitted", { name, email, message });

        alert("Thank you for your feedback!");

        event.target.reset();
    });
});
