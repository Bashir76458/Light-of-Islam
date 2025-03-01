// Set the Start Date of Ramadan (Adjust If Necessary)
const ramadanStartDate = new Date("2025-03-01"); // Ensure this is correct

// Get Today's Date
const today = new Date();

// Calculate the Difference in Days
const timeDiff = today - ramadanStartDate;
const currentRamadanDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1; // Fixed rounding issue

// Ensure the Day is Within 1-30 Range
const ramadanDay = (currentRamadanDay > 30 || currentRamadanDay < 1) ? 1 : currentRamadanDay;

// Update the Ramadan Counter on the Page
document.addEventListener("DOMContentLoaded", function () {
    const ramadanCounterElement = document.getElementById("ramadan-day");
    if (ramadanCounterElement) {
        ramadanCounterElement.innerText = `${ramadanDay} / 30`;
    } else {
        console.error("Element with ID 'ramadan-day' not found!");
    }
});
