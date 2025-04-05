var typed = new Typed(".text", {
    strings: ["Web Developer", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop:true
});

function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("show");
}

document.querySelector(".contact-form form").addEventListener("submit", async function (event) {
    event.preventDefault();

    let form = event.target;
    let formData = new FormData(form);
    let messageContainer = document.createElement("p");
    messageContainer.classList.add("success-message");
    form.appendChild(messageContainer);

    try {
        let response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            messageContainer.textContent = "Thanks for reaching out! I'll reply shortly.";
            form.reset();
        } else {
            messageContainer.textContent = "Something went wrong. Please try again.";
        }
    } catch (error) {
        messageContainer.textContent = "Error: " + error.message;
    }
});
