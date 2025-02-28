document.addEventListener("DOMContentLoaded", function () {
  const duaText = document.getElementById("dua-text");
  const duaButton = document.querySelector(".dua-btn");
  const audioPlayer = document.getElementById("dua-audio");
  const audioButton = document.getElementById("audio-toggle");

  const duas = [
    { arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ العَلِيمُ", translation: "Our Lord, accept from us. Indeed, You are the Hearing, the Knowing. - Quran 2:127", audio: "audio/dua1.mp3" },
    { arabic: "اللهم اجعلني من التوابين واجعلني من المتطهرين", translation: "O Allah, make me among those who repent and those who purify themselves. - Hadith", audio: "audio/dua2.mp3" },
    { arabic: "رَبِّ زِدْنِي عِلْمًا", translation: "My Lord, increase me in knowledge. - Quran 20:114", audio: "audio/dua3.mp3" },
    { arabic: "اللهم اغفر لي ولوالدي وللمؤمنين يوم يقوم الحساب", translation: "O Allah, forgive me, my parents, and the believers on the Day of Reckoning. - Quran 14:41", audio: "audio/dua4.mp3" },
    { arabic: "اللهم إنك عفو تحب العفو فاعف عني", translation: "O Allah, You are forgiving and love forgiveness, so forgive me. - Hadith", audio: "audio/dua5.mp3" },
    { arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", translation: "Our Lord, grant us good in this world and good in the Hereafter and protect us from the punishment of the Fire. - Quran 2:201", audio: "audio/dua6.mp3" },
    { arabic: "اللهم إني أعوذ بك من زوال نعمتك، وتحول عافيتك، وفجأة نقمتك، وجميع سخطك", translation: "O Allah, I seek refuge in You from the loss of Your blessings, the change of Your protection, the suddenness of Your punishment, and all that displeases You. - Hadith", audio: "audio/dua7.mp3" }
    // Continue adding duas for all 30 days...
  ];

  function getDailyDua() {
    const today = new Date().getDate();
    const selectedDua = duas[(today - 1) % duas.length];
    displayDua(selectedDua);
  }

  function newDua() {
    const randomIndex = Math.floor(Math.random() * duas.length);
    const selectedDua = duas[randomIndex];
    displayDua(selectedDua);
  }

  function displayDua(dua) {
    duaText.style.opacity = "0"; 

    setTimeout(() => {
      duaText.innerHTML = `
        <p style="font-size:1.5rem; text-align:center; direction:rtl; font-weight:bold;">${dua.arabic}</p>
        <p style="text-align:center; margin-top:5px;">${dua.translation}</p>
      `;
      audioPlayer.src = dua.audio; // Set audio source
      duaText.style.opacity = "1"; 
    }, 300);
  }

  function toggleAudio() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      audioButton.innerText = "Pause Audio";
    } else {
      audioPlayer.pause();
      audioButton.innerText = "Play Audio";
    }
  }

  // Set initial daily dua
  getDailyDua();

  // Event listeners
  if (duaButton) duaButton.addEventListener("click", newDua);
  if (audioButton) audioButton.addEventListener("click", toggleAudio);
});
