document.addEventListener("DOMContentLoaded", function () {
    console.log(" Web Storage Application Initialized");
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const statusMessage = document.getElementById("statusMessage");
    const tableContainer = document.getElementById("tableContainer");
    const clearBtn = document.getElementById("clearBtn");

    // Load saved records from localStorage on initial render
    displayRegistrations();

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Stop default HTTP page reload

            // Extract form values
            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const eventChoice = document.getElementById("eventChoice").value;
            const sourceRadio = document.querySelector('input[name="source"]:checked');
            const source = sourceRadio ? sourceRadio.value : "N/A";

            // Build structured registration object
            const registrationData = {
                id: Date.now(),
                fullName: fullName,
                email: email,
                phone: phone,
                eventChoice: eventChoice,
                source: source
            };

            // Fetch existing array or initialize empty array
            let registrations = JSON.parse(localStorage.getItem("clubRegistrations")) || [];
            registrations.push(registrationData);

            // Persist JSON string back to localStorage
            localStorage.setItem("clubRegistrations", JSON.stringify(registrations));

            // User feedback & form reset
            statusMessage.textContent = "Registration successful! Your seat has been reserved.";
            statusMessage.className = "status-message success";
            form.reset();

            // Update dynamic UI table
            displayRegistrations();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", function () {
            if (confirm("Are you sure you want to clear all saved registrations?")) {
                localStorage.removeItem("clubRegistrations");
                statusMessage.textContent = "All registrations cleared from storage.";
                statusMessage.className = "status-message info";
                displayRegistrations();
            }
        });
    }

    function displayRegistrations() {
        const registrations = JSON.parse(localStorage.getItem("clubRegistrations")) || [];

        if (!tableContainer) return;

        if (registrations.length === 0) {
            tableContainer.innerHTML = "<p>No registrations found in localStorage.</p>";
            return;
        }

        let tableHTML = `
            <table class="data-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Event</th>
                        <th>Referral Source</th>
                    </tr>
                </thead>
                <tbody>
        `;

        registrations.forEach((reg, index) => {
            tableHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${escapeHTML(reg.fullName)}</td>
                    <td>${escapeHTML(reg.email)}</td>
                    <td>${escapeHTML(reg.phone)}</td>
                    <td>${escapeHTML(reg.eventChoice)}</td>
                    <td>${escapeHTML(reg.source)}</td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        tableContainer.innerHTML = tableHTML;
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
});