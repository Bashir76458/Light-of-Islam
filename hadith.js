document.addEventListener("DOMContentLoaded", function () {
    const hadithText = document.getElementById("hadith-text");
    const hadithButton = document.getElementById("newHadith");

    // 30 Hadiths for each day
    const hadiths = [
        "Actions are judged by intentions. (Bukhari & Muslim)",
        "The best among you are those who learn the Quran and teach it. (Bukhari)",
        "A good word is charity. (Bukhari & Muslim)",
        "The strong believer is better than the weak believer. (Muslim)",
        "Whoever believes in Allah and the Last Day should speak good or remain silent. (Bukhari & Muslim)",
        "A Muslim is the one from whose tongue and hands other Muslims are safe. (Bukhari & Muslim)",
        "Do not get angry, and Paradise will be yours. (Tirmidhi)",
        "The most beloved actions to Allah are those that are consistent, even if small. (Bukhari & Muslim)",
        "Whoever treads a path seeking knowledge, Allah will make his path to Jannah easy. (Muslim)",
        "He who does not thank people does not thank Allah. (Abu Dawood)",
        "The best wealth is the wealth of the soul. (Bukhari & Muslim)",
        "Whoever builds a mosque for Allah, Allah will build for him a house in Jannah. (Bukhari & Muslim)",
        "The best among you are those with the best manners. (Bukhari & Muslim)",
        "Smiling is charity. (Tirmidhi)",
        "The best Jihad is speaking a word of truth to an unjust ruler. (Abu Dawood)",
        "Whoever removes a hardship from a believer, Allah will remove a hardship from him on Judgment Day. (Muslim)",
        "The best prayer after the obligatory ones is the night prayer. (Muslim)",
        "Allah does not look at your wealth and appearance but at your hearts and actions. (Muslim)",
        "The closest to the Prophet on Judgment Day are those with the best character. (Tirmidhi)",
        "None of you truly believes until he loves for his brother what he loves for himself. (Bukhari & Muslim)",
        "Do not waste water, even if performing ablution on the banks of a flowing river. (Ibn Majah)",
        "The one who recites the Quran beautifully will be with the noble and righteous scribes. (Bukhari & Muslim)",
        "A good friend is like a seller of musk; either he gives you some, or you smell its fragrance. (Bukhari & Muslim)",
        "The best gift a father can give his child is good manners. (Tirmidhi)",
        "The most beloved people to Allah are those who are most beneficial to others. (Tabarani)",
        "The one who maintains ties of kinship will have his life extended and blessings increased. (Bukhari & Muslim)",
        "Whoever fasts Ramadan with faith and expectation of reward will have his sins forgiven. (Bukhari & Muslim)",
        "If anyone travels on a road seeking knowledge, Allah will ease his way to Paradise. (Muslim)",
        "The most beloved deeds to Allah are prayer at its proper time, being good to parents, and Jihad in His cause. (Bukhari & Muslim)",
        "Whoever prays Fajr in congregation is under the protection of Allah. (Muslim)"
    ];

    function getDailyHadith() {
        const today = new Date().getDate();
        let storedHadith = localStorage.getItem("dailyHadith");

        if (!storedHadith || localStorage.getItem("hadithDate") !== today.toString()) {
            storedHadith = hadiths[(today - 1) % hadiths.length]; // Loops after 30 days
            localStorage.setItem("dailyHadith", storedHadith);
            localStorage.setItem("hadithDate", today.toString());
        }

        hadithText.textContent = storedHadith;
    }

    function newHadith() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * hadiths.length);
        } while (hadiths[newIndex] === hadithText.textContent); // Ensures a different Hadith

        hadithText.style.opacity = "0"; // Fade out effect
        setTimeout(() => {
            hadithText.textContent = hadiths[newIndex];
            hadithText.style.opacity = "1"; // Fade in effect
        }, 500);
    }

    getDailyHadith();

    if (hadithButton) {
        hadithButton.addEventListener("click", newHadith);
    }
});
