const quotes = [
    "The best among you are those who have the best manners and character. - Prophet Muhammad (PBUH)",
    "Indeed, with hardship comes ease. - Quran 94:6",
    "And seek help through patience and prayer. - Quran 2:45",
    "The strongest among you is the one who controls his anger. - Prophet Muhammad (PBUH)",
    "Do not lose hope, nor be sad. - Quran 3:139"
];

document.addEventListener("DOMContentLoaded", function() {
    const quoteText = document.querySelector(".glow-text");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerText = quotes[randomIndex];
});



