// Handle clicking the "Add" button to add a new hobby benefit
var addBenefitButton = document.getElementById("addBenefitBtn");
var benefitInputField = document.getElementById("benefitInput");
var hobbyListElement = document.getElementById("hobbyList");

addBenefitButton.onclick = function(){
    if(benefitInputField.value !== ""){
        var listItem = document.createElement("li");
        listItem.innerText = benefitInputField.value;

        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.onclick = function(){
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        hobbyListElement.appendChild(listItem);
        benefitInputField.value = "";
    }
};

// Allow deleting any benefits that already have a delete button
var deleteButtons = document.getElementsByClassName("delete-btn");
for(var i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].onclick = function(){
        this.parentElement.remove();
    };
}

// Show an alert when the contact form is submitted (and stop page reload)
document.getElementById("contactForm").onsubmit = function(e){
    e.preventDefault();
    alert("Form submitted successfully!");
};

// Show the current date and time in the footer and update it every second
function showDateTime(){
    var now = new Date();
    document.getElementById("dateTime").innerText = now.toLocaleString();
}

showDateTime();
setInterval(showDateTime, 1000);

</script>