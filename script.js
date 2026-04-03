// Select required elements
const addBenefitBtn = document.getElementById("addBenefitBtn");
const benefitInput = document.getElementById("benefitInput");
const hobbyList = document.getElementById("hobbyList");

// Add new benefit to the list
addBenefitBtn.onclick = function () {
    if (benefitInput.value !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = benefitInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        // Remove benefit on click
        deleteBtn.onclick = function () {
            listItem.remove();
        };

        listItem.appendChild(deleteBtn);
        hobbyList.appendChild(listItem);
        benefitInput.value = "";
    }
};

// Handle contact form submission
document.getElementById("contactForm").onsubmit = function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
};

// Format date as: Day, dd Month yyyy, HH:mm:ss
function formatDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    const date = now.toLocaleDateString('en-GB', options);
    const time = now.toLocaleTimeString('en-GB');

    document.getElementById("dateTime").innerText = `${date}, ${time}`;
}

<<<<<<< Updated upstream
// Update date & time every second
formatDateTime();
setInterval(formatDateTime, 1000);
=======
showDateTime();
setInterval(showDateTime, 1000);
>>>>>>> Stashed changes
