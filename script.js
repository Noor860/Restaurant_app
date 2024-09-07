// Simple form handling and validation

document.addEventListener("DOMContentLoaded", () => {
    const reservationForm = document.getElementById("reservationForm");
    const orderForm = document.getElementById("checkoutForm");
    const contactForm = document.getElementById("contactForm");

    reservationForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("reservationMessage").textContent = "Reservation submitted successfully!";
        reservationForm.reset();
    });

    orderForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("orderMessage").textContent = "Order placed successfully!";
        orderForm.reset();
    });

    contactForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("contactFormMessage").textContent = "Message sent successfully!";
        contactForm.reset();
    });
});
