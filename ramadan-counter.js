const ramadanStart = new Date("March 10, 2024"); // Adjust this based on actual Ramadan start date

function updateRamadanCounter() {
  const today = new Date();
  const timeDiff = today - ramadanStart;
  const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
  document.getElementById('ramadan-day').textContent = daysPassed;
}

updateRamadanCounter();
