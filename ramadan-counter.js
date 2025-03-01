// Set the Start Date of Ramadan (Adjust If Necessary)
const ramadanStartDate = new Date("2025-03-01"); // Change if needed

// Get Today's Date
const today = new Date();

// Calculate the Difference in Days
const timeDiff = today - ramadanStartDate;
const currentRamadanDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; 

// Ensure the Day is Within 1-30 Range
const ramadanDay = (currentRamadanDay > 30 || currentRamadanDay < 1) ? 1 : currentRamadanDay;

// Update the Ramadan Counter on the Page
document.getElementById("ramadan-day").innerText = ramadanDay + " / 30";
