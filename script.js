// script.js

// DONOR DATA

let donors = [

    {
        name: "Rahul Sharma",
        blood: "O+",
        phone: "9876543210",
        location: "Pune"
    },

    {
        name: "Anjali Patil",
        blood: "A+",
        phone: "9876501234",
        location: "Mumbai"
    },

    {
        name: "Arjun Verma",
        blood: "B+",
        phone: "9874512365",
        location: "Nagpur"
    }

];


// FORM

const donorForm =
document.getElementById("donorForm");


// DONOR REGISTER

donorForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name =
    document.getElementById("name").value;

    const phone =
    document.getElementById("phone").value;

    const blood =
    document.getElementById("bloodGroup").value;

    const location =
    document.getElementById("location").value;

    const donor = {

        name,
        phone,
        blood,
        location

    };

    donors.push(donor);

    displayDonors(donors);

    updateDashboard();

    showPopup();

    donorForm.reset();

});


// DISPLAY DONORS

function displayDonors(donorArray){

    const tableBody =
    document.getElementById("donorTableBody");

    tableBody.innerHTML = "";

    donorArray.forEach(function(donor){

        tableBody.innerHTML += `

            <tr>

                <td>
                    ${donor.name}
                </td>

                <td>
                    <span class="blood-badge">
                        ${donor.blood}
                    </span>
                </td>

                <td>
                    ${donor.phone}
                </td>

                <td>
                    ${donor.location}
                </td>

            </tr>

        `;

    });

}


// SEARCH DONOR

function searchDonor(){

    const selectedBlood =
    document.getElementById("searchBlood").value;

    if(selectedBlood === ""){

        displayDonors(donors);
        return;

    }

    const filteredDonors =
    donors.filter(function(donor){

        return donor.blood === selectedBlood;

    });

    displayDonors(filteredDonors);

}


// UPDATE DASHBOARD

function updateDashboard(){

    document
    .getElementById("totalDonors")
    .innerText = donors.length;

}


// SHOW POPUP

function showPopup(){

    document
    .getElementById("successPopup")
    .classList.add("active");

}


// CLOSE POPUP

function closePopup(){

    document
    .getElementById("successPopup")
    .classList.remove("active");

}


// EMERGENCY REQUEST COUNT

const emergencyForm =
document.getElementById("emergencyForm");

let emergencyRequests = 0;

emergencyForm.addEventListener("submit", function(event){

    event.preventDefault();

    emergencyRequests++;

    document
    .getElementById("emergencyCount")
    .innerText = emergencyRequests;

    showEmergencyPopup();

    emergencyForm.reset();

});


// EMERGENCY POPUP

function showEmergencyPopup(){

    const popup =
    document.getElementById("successPopup");

    popup.classList.add("active");

    popup.querySelector("h3").innerText =
    "Emergency Request Sent";

    popup.querySelector("p").innerText =
    "Emergency blood request submitted successfully.";

}


// INITIAL LOAD

displayDonors(donors);

updateDashboard();