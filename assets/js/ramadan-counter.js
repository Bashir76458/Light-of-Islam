document.addEventListener("DOMContentLoaded", function() {
    const ramadanStart = new Date("2025-03-10"); // Update this with actual Ramadan start date
    const today = new Date();
    const diffTime = today - ramadanStart;
    const dayOfRamadan = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (dayOfRamadan > 0 && dayOfRamadan <= 30) {
        document.getElementById("ramadan-day").innerText = dayOfRamadan;
    } else {
        document.getElementById("ramadan-day").innerText = "Not Ramadan";
    }
});