document.addEventListener("DOMContentLoaded", function () {
  const duaText = document.getElementById("todays-dua"); 
  const duaButton = document.querySelector(".dua-btn"); 
  const audioPlayer = document.getElementById("dua-audio"); 
  const audioButton = document.getElementById("audio-toggle"); 

  // Predefined List of Duas (30 Days)
  const duas = [
    { arabic: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة", translation: "O Allah, I ask You for forgiveness and well-being in this world and the Hereafter.", audio: "audio/dua1.mp3" },
    { arabic: "اللهم إنك عفو تحب العفو فاعف عني", translation: "O Allah, You are forgiving and love forgiveness, so forgive me.", audio: "audio/dua2.mp3" },
    { arabic: "اللهم اجعلني من التوابين واجعلني من المتطهرين", translation: "O Allah, make me among those who repent and those who purify themselves.", audio: "audio/dua3.mp3" },
    { arabic: "اللهم إني أسألك الجنة وأعوذ بك من النار", translation: "O Allah, I ask You for Paradise and seek refuge in You from the Fire.", audio: "audio/dua4.mp3" },
    { arabic: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار", translation: "Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.", audio: "audio/dua5.mp3" },
    { arabic: "اللهم اجعلني من عبادك الصالحين", translation: "O Allah, make me among Your righteous servants.", audio: "audio/dua6.mp3" },
    { arabic: "اللهم اجعلني من الذين لا خوف عليهم ولا هم يحزنون", translation: "O Allah, make me among those who have no fear nor shall they grieve.", audio: "audio/dua7.mp3" }
    // Continue adding duas for all 30 days...
  ];

  // Function to get the Dua of the Day based on Ramadan Day
  function getDailyDua() {
    const today = new Date();
    const ramadanStartDate = new Date("2025-03-01"); // Adjust the start date
    const dayNumber = Math.ceil((today - ramadanStartDate) / (1000 * 60 * 60 * 24)) + 1;

    // Ensure the day is within range (1-30)
    const selectedDua = (dayNumber > 30 || dayNumber < 1) ? duas[0] : duas[dayNumber - 1];

    displayDua(selectedDua);
  }

  // Function to display a new random dua
  function newDua() {
    const randomIndex = Math.floor(Math.random() * duas.length);
    displayDua(duas[randomIndex]);
  }

  // Function to display the dua
  function displayDua(dua) {
    duaText.style.opacity = "0"; // Fade out effect

    setTimeout(() => {
      duaText.innerHTML = `
        <p style="font-size:1.5rem; text-align:center; direction:rtl; font-weight:bold;">${dua.arabic}</p>
        <p style="text-align:center; margin-top:5px;">${dua.translation}</p>
      `;
      audioPlayer.src = dua.audio; // Set audio source
      duaText.style.opacity = "1"; // Fade in effect
    }, 300);
  }

  // Function to toggle audio playback
  function toggleAudio() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      audioButton.innerText = "Pause Audio";
    } else {
      audioPlayer.pause();
      audioButton.innerText = "Play Audio";
    }
  }

  // Set the initial daily dua
  getDailyDua();

  // Event listeners
  if (duaButton) duaButton.addEventListener("click", newDua);
  if (audioButton) audioButton.addEventListener("click", toggleAudio);
});
