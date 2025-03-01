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
    { arabic: "اللهم اجعلني من الذين لا خوف عليهم ولا هم يحزنون", translation: "O Allah, make me among those who have no fear nor shall they grieve.", audio: "audio/dua7.mp3" },
    { arabic: "اللهم اغفر لي ذنوبي ما تقدم منها وما تأخر", translation: "O Allah, forgive me for my past and future sins.", audio: "audio/dua8.mp3" },
    { arabic: "اللهم إني أعوذ بك من الكفر والفقر وعذاب القبر", translation: "O Allah, I seek refuge in You from disbelief, poverty, and the punishment of the grave.", audio: "audio/dua9.mp3" },
    { arabic: "اللهم ارزقني حبك وحب من يحبك وحب العمل الذي يقربني إلى حبك", translation: "O Allah, grant me Your love, the love of those who love You, and the love of deeds that bring me closer to Your love.", audio: "audio/dua10.mp3" },
    { arabic: "اللهم اجعل القرآن ربيع قلبي ونور صدري", translation: "O Allah, make the Quran the joy of my heart and the light of my chest.", audio: "audio/dua11.mp3" },
    { arabic: "اللهم أعني على ذكرك وشكرك وحسن عبادتك", translation: "O Allah, help me remember You, be grateful to You, and worship You in excellence.", audio: "audio/dua12.mp3" },
    { arabic: "اللهم ارزقني رزقا طيبا وعملا متقبلا", translation: "O Allah, grant me pure sustenance and accepted deeds.", audio: "audio/dua13.mp3" },
    { arabic: "اللهم إني أسألك علما نافعا ورزقا طيبا وعملا متقبلا", translation: "O Allah, I ask You for beneficial knowledge, pure sustenance, and accepted deeds.", audio: "audio/dua14.mp3" },
    { arabic: "اللهم اجعل لي نورًا في قلبي ونورًا في لساني", translation: "O Allah, place light in my heart and light upon my tongue.", audio: "audio/dua15.mp3" },
    { arabic: "اللهم استر عوراتي وآمن روعاتي", translation: "O Allah, cover my faults and calm my fears.", audio: "audio/dua16.mp3" },
    { arabic: "اللهم إني أسألك موجبات رحمتك وعزائم مغفرتك", translation: "O Allah, I ask You for deeds that lead to Your mercy and determination to gain Your forgiveness.", audio: "audio/dua17.mp3" },
    { arabic: "اللهم إني أعوذ بك من العجز والكسل والجبن والبخل", translation: "O Allah, I seek refuge in You from incapacity, laziness, cowardice, and miserliness.", audio: "audio/dua18.mp3" },
    { arabic: "اللهم إني أعوذ بك من الهم والحزن والعجز والكسل", translation: "O Allah, I seek refuge in You from worry, grief, weakness, and laziness.", audio: "audio/dua19.mp3" },
    { arabic: "اللهم زدني ولا تنقصني، وأكرمني ولا تهني", translation: "O Allah, increase me and do not decrease me, honor me and do not humiliate me.", audio: "audio/dua20.mp3" },
    { arabic: "اللهم اجعلني من أهل الجنة", translation: "O Allah, make me among the people of Paradise.", audio: "audio/dua21.mp3" },
    { arabic: "اللهم إني أعوذ بك من زوال نعمتك وتحول عافيتك", translation: "O Allah, I seek refuge in You from the removal of Your blessings and the change of Your well-being.", audio: "audio/dua22.mp3" },
    { arabic: "اللهم اجعل آخر كلامي في الدنيا لا إله إلا الله", translation: "O Allah, make my last words in this world 'There is no god but Allah.'", audio: "audio/dua23.mp3" },
    { arabic: "اللهم اجعل لي نورًا في سمعي وبصري", translation: "O Allah, place light in my hearing and my sight.", audio: "audio/dua24.mp3" },
    { arabic: "اللهم إني أعوذ بك من الفقر والقلة والذلة", translation: "O Allah, I seek refuge in You from poverty, scarcity, and humiliation.", audio: "audio/dua25.mp3" },
    { arabic: "اللهم اجعلني هاديا مهديا غير ضال ولا مضل", translation: "O Allah, make me a guide, rightly guided, neither astray nor misleading others.", audio: "audio/dua26.mp3" },
    { arabic: "اللهم اغفر لي ذنوبي كلها دقها وجلها وأولها وآخرها", translation: "O Allah, forgive all my sins, the small and the large, the first and the last.", audio: "audio/dua27.mp3" },
    { arabic: "اللهم اجعلنا من عبادك الشاكرين الصابرين", translation: "O Allah, make us among Your grateful and patient servants.", audio: "audio/dua28.mp3" },
    { arabic: "اللهم اجعل لي لسانا صادقا في الآخرين", translation: "O Allah, grant me a truthful tongue among those who come after me.", audio: "audio/dua29.mp3" },
    { arabic: "اللهم اجعلني من الذين يسمعون القول فيتبعون أحسنه", translation: "O Allah, make me among those who hear the best of speech and follow it.", audio: "audio/dua30.mp3" }
  ];

  // Ensure daily dua updates correctly
  function getDailyDua() {
    const today = new Date();
    const ramadanStartDate = new Date("2025-03-01"); 

    let dayNumber = Math.floor((today - ramadanStartDate) / (1000 * 60 * 60 * 24)) + 1;
    if (dayNumber < 1 || dayNumber > 30) dayNumber = 1;

    displayDua(duas[dayNumber - 1]);
  }

  function displayDua(dua) {
    duaText.innerHTML = `<p style="direction:rtl;">${dua.arabic}</p><p>${dua.translation}</p>`;
    audioPlayer.src = dua.audio;
  }

  getDailyDua();
});
