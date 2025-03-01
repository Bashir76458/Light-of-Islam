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
// 30 Preloaded Quranic Verses (One for Each Day of Ramadan)
const quranicVerses = [
    "Indeed, with hardship comes ease. - (Quran 94:6)",
    "And seek help through patience and prayer. - (Quran 2:45)",
    "Do not despair of the mercy of Allah. - (Quran 39:53)",
    "So verily, with the hardship, there is relief. - (Quran 94:5)",
    "Indeed, Allah is with those who are patient. - (Quran 2:153)",
    "And He found you lost and guided you. - (Quran 93:7)",
    "Whoever puts his trust in Allah, He will be enough for him. - (Quran 65:3)",
    "Allah does not burden a soul beyond that it can bear. - (Quran 2:286)",
    "The best among you are those who learn the Quran and teach it. - (Hadith)",
    "He is with you wherever you are. - (Quran 57:4)",
    "Be patient. Surely, Allah is with those who are patient. - (Quran 8:46)",
    "If you are grateful, I will certainly give you more. - (Quran 14:7)",
    "Indeed, the reminder benefits the believers. - (Quran 51:55)",
    "Do good as Allah has done good to you. - (Quran 28:77)",
    "And whoever relies upon Allah – then He is sufficient for him. - (Quran 65:3)",
    "Indeed, prayer prohibits immorality and wrongdoing. - (Quran 29:45)",
    "And your Lord is the Forgiving, Full of Mercy. - (Quran 18:58)",
    "Indeed, Allah is with the doers of good. - (Quran 29:69)",
    "Every soul will taste death. - (Quran 3:185)",
    "Indeed, to your Lord is the final return. - (Quran 96:8)",
    "The most honored by Allah is the most righteous. - (Quran 49:13)",
    "And speak to people good words. - (Quran 2:83)",
    "Verily, Allah loves those who put their trust in Him. - (Quran 3:159)",
    "And We have certainly made the Quran easy for remembrance. - (Quran 54:17)",
    "Guide us to the Straight Path. - (Quran 1:6)",
    "And establish prayer and give zakah. - (Quran 2:110)",
    "And He is with you wherever you are. - (Quran 57:4)",
    "Indeed, those who have believed and done righteous deeds will have gardens beneath which rivers flow. - (Quran 85:11)",
    "And rely upon Allah; and sufficient is Allah as Disposer of affairs. - (Quran 33:3)",
    "Indeed, it is We who sent down the Quran and indeed, We will be its guardian. - (Quran 15:9)"
];

// Function to Display the Correct Verse for the Day
function updateQuranicVerse() {
    const verseElement = document.getElementById("quranic-verse");
    
    // Get the Current Ramadan Day (from Ramadan Counter)
    let currentDay = parseInt(document.getElementById("ramadan-day").innerText) || 1;

    // Ensure the day is within range
    if (currentDay < 1 || currentDay > 30) currentDay = 1;

    // Display the Quranic verse for the day
    verseElement.innerText = quranicVerses[currentDay - 1];
}

// Run the Function After Page Load
document.addEventListener("DOMContentLoaded", updateQuranicVerse);
