document.addEventListener("DOMContentLoaded", function() {
    // Dummy agenda data
    const agendaItems = [
        { time: "9:00 AM", event: "Registration" },
        { time: "10:00 AM", event: "Opening Ceremony" },
        { time: "11:00 AM", event: "Keynote Speech" },
        // Add more agenda items as needed
    ];

    // Populate agenda list
    const agendaList = document.getElementById("agenda-list");
    agendaItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.time} - ${item.event}`;
        agendaList.appendChild(li);
    });

    // Handle registration form submission
    const registrationForm = document.getElementById("registration-form");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const formData = new FormData(this);
        const name = formData.get("name");
        const email = formData.get("email");
        const tickets = formData.get("tickets");

        // Check if all required fields are filled out
        if (name && email && tickets) {
            // Open a new window with the success message
            const successPageUrl = "success.html";
            window.open(successPageUrl, "_blank");
        } else {
            // If any required field is empty, display an error message
            alert("Please fill out all required fields.");
        }
    });
});
