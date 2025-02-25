document.addEventListener("DOMContentLoaded", function() {
    const ramadanStart = new Date("2025-03-10");
    const today = new Date();
    const diffTime = today - ramadanStart;
    const dayOfRamadan = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById("ramadan-day").innerText = 
        dayOfRamadan > 0 && dayOfRamadan <= 30 ? dayOfRamadan : "Not Ramadan";
});



