// ===============================
// QUANTITY BUTTONS
// ===============================

const cartItems = document.querySelectorAll(".cart-item");

cartItems.forEach(function(item) {

    const minus = item.querySelector(".minus");
    const plus = item.querySelector(".plus");
    const quantity = item.querySelector(".quantity span");

    let count = parseInt(quantity.textContent);


    plus.addEventListener("click", function() {

        count++;

        quantity.textContent = count;

        updateTotal();

    });


    minus.addEventListener("click", function() {

        if (count > 1) {

            count--;

            quantity.textContent = count;

            updateTotal();

        }

    });

});


// ===============================
// DELETE PRODUCT
// ===============================

const deleteButtons = document.querySelectorAll(".delete");

deleteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const item = button.closest(".cart-item");

        item.remove();

        updateTotal();

    });

});


// ===============================
// COUPON
// ===============================

const couponBtn = document.getElementById("couponBtn");

couponBtn.addEventListener("click", function() {

    const coupon = document.getElementById("coupon").value;

    const message = document.getElementById("couponMessage");

    if (coupon.toUpperCase() === "SAVE10") {

        message.textContent = "10% discount applied!";

        message.style.color = "green";

        document.getElementById("discount").textContent = "$160.99";

        updateTotal(160.99);

    } else {

        message.textContent = "Invalid coupon code.";

        message.style.color = "red";

    }

});


// ===============================
// PAYMENT METHOD
// ===============================

const paymentMethods = document.querySelectorAll(".payment");

paymentMethods.forEach(function(payment) {

    payment.addEventListener("click", function() {

        paymentMethods.forEach(function(item) {

            item.classList.remove("active");

        });

        payment.classList.add("active");

    });

});


// ===============================
// CHECKOUT
// ===============================

const checkout = document.querySelector(".checkout");

checkout.addEventListener("click", function() {

    alert("Proceeding to checkout...");

});


// ===============================
// CANCEL ORDER
// ===============================

const cancel = document.querySelector(".cancel");

cancel.addEventListener("click", function() {

    const confirmation = confirm(
        "Are you sure you want to cancel your order?"
    );

    if (confirmation) {

        document.querySelectorAll(".cart-item").forEach(function(item) {

            item.remove();

        });

        updateTotal();

    }

});


// ===============================
// CALCULATE TOTAL
// ===============================

function updateTotal(discount = 0) {

    let subtotal = 0;

    document.querySelectorAll(".cart-item").forEach(function(item) {

        const quantity =
            parseInt(item.querySelector(".quantity span").textContent);

        const priceText =
            item.querySelector(".price").textContent;

        const price =
            parseFloat(priceText.replace("$", ""));

        subtotal += quantity * price;

    });


    const delivery = subtotal > 0 ? 29.99 : 0;

    const tax = subtotal > 0 ? 39.99 : 0;

    const total = subtotal + delivery + tax - discount;


    document.getElementById("total").textContent =
        "$" + total.toFixed(2);

}