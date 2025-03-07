document.addEventListener("DOMContentLoaded", function() {
    const city = "Accra"; // Change to your location
    const apiURL = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Ghana&method=2`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            const list = document.getElementById("prayer-times");
            for (let key in timings) {
                let li = document.createElement("li");
                li.innerText = `${key}: ${timings[key]}`;
                list.appendChild(li);
            }
        })
        .catch(error => console.error("Error fetching prayer times:", error));
});