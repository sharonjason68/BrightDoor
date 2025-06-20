document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    var formData = {
        first: document.getElementById("first").value, // Matches {{first}}
        last: document.getElementById("last").value, // Matches {{last}}
        phone: document.getElementById("phone").value, // Matches {{phone}}
        email: document.getElementById("email").value, // Matches {{email}}
        message: document.getElementById("message").value // Matches {{message}}
    };

    // Send email using EmailJS
    emailjs.send("service_s7ml7hf","template_tf9x4ed", formData)
        .then(function(response) {
            alert("Email sent successfully!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Error sending email: " + JSON.stringify(error));
        });
});