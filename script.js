// 🌙 Dark Mode Toggle
document.getElementById('darkMode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// 📅 Hijri Date Display
function displayHijriDate() {
  const hijriDate = new Date().toLocaleDateString('ar-SA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById('hijriDate').innerText = hijriDate;
}
displayHijriDate();

// ⏳ Countdown to Iftar
function updateIftarCountdown() {
  const now = new Date();
  const iftarTime = new Date();
  iftarTime.setHours(18, 30, 0);

  let diff = iftarTime - now;
  if (diff <= 0) {
    document.getElementById('iftarCountdown').innerText = "Iftar time!";
  } else {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('iftarCountdown').innerText = `Time left: ${hours}h ${minutes}m`;
  }
}
setInterval(updateIftarCountdown, 1000);
updateIftarCountdown();

// 🕋 Ramadan Counter
function updateRamadanCounter() {
  const ramadanStart = new Date('2025-03-03T00:00:00'); // Update if needed
  const now = new Date();
  const diffDays = Math.floor((now - ramadanStart) / (1000 * 60 * 60 * 24)) + 1;

  document.getElementById('ramadan-day').innerText = diffDays > 0 && diffDays <= 30 ? diffDays : "Not started";
}
updateRamadanCounter();

// 🌙 Fasting Tracker
let fastingDays = localStorage.getItem('fastingDays') || 0;
document.getElementById('fastingCount').innerText = fastingDays;
document.getElementById('fastingProgress').style.width = (fastingDays / 30) * 100 + '%';

document.getElementById('trackFasting').addEventListener('click', function() {
  if (fastingDays < 30) {
    fastingDays++;
    localStorage.setItem('fastingDays', fastingDays);
    document.getElementById('fastingCount').innerText = fastingDays;
    document.getElementById('fastingProgress').style.width = (fastingDays / 30) * 100 + '%';
  }
});

document.getElementById('resetFasting').addEventListener('click', function() {
  fastingDays = 0;
  localStorage.setItem('fastingDays', fastingDays);
  document.getElementById('fastingCount').innerText = fastingDays;
  document.getElementById('fastingProgress').style.width = '0%';
});

// 📿 Tasbih Counter
let tasbihCount = 0;
document.getElementById('increaseTasbih').addEventListener('click', function() {
  tasbihCount++;
  document.getElementById('tasbihCount').innerText = tasbihCount;
});
document.getElementById('resetTasbih').addEventListener('click', function() {
  tasbihCount = 0;
  document.getElementById('tasbihCount').innerText = tasbihCount;
});

// ❤️ Charity Tracker
document.getElementById('logCharity').addEventListener('click', function() {
  const charityInput = document.getElementById('charityInput').value;
  if (charityInput.trim() !== "") {
    let charityList = JSON.parse(localStorage.getItem('charityList')) || [];
    charityList.push(charityInput);
    localStorage.setItem('charityList', JSON.stringify(charityList));
    
    updateCharityList();
    document.getElementById('charityInput').value = "";
  }
});

function updateCharityList() {
  const charityList = JSON.parse(localStorage.getItem('charityList')) || [];
  const listElement = document.getElementById('charityList');
  listElement.innerHTML = "";
  charityList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listElement.appendChild(li);
  });
}
updateCharityList();

// 📜 Hadith Generator
const hadiths = [
  "The best among you are those who learn the Quran and teach it. - Bukhari",
  "A smile is charity. - Tirmidhi",
  "The strong believer is better and more beloved to Allah than the weak believer. - Muslim"
];

document.getElementById('hadith-text').innerText = hadiths[Math.floor(Math.random() * hadiths.length)];
document.getElementById('prevHadith').addEventListener('click', function() {
  const current = hadiths.indexOf(document.getElementById('hadith-text').innerText);
  document.getElementById('hadith-text').innerText = hadiths[(current - 1 + hadiths.length) % hadiths.length];
});
document.getElementById('nextHadith').addEventListener('click', function() {
  const current = hadiths.indexOf(document.getElementById('hadith-text').innerText);
  document.getElementById('hadith-text').innerText = hadiths[(current + 1) % hadiths.length];
});
