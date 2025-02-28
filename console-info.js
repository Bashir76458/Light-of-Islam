document.addEventListener("DOMContentLoaded", function () {
    console.log("%c🚀 Ramadan Web App Loaded Successfully!", "color: green; font-size: 16px; font-weight: bold;");

    // Check if critical files are loaded
    const requiredScripts = ["script.js", "duas.js", "ramadan-counter.js", "prayer-time.js"];
    requiredScripts.forEach(script => {
        if (!document.querySelector(`script[src="${script}"]`)) {
            console.warn(`⚠️ Missing File: ${script} is not found!`);
        } else {
            console.log(`✅ ${script} is loaded successfully.`);
        }
    });

    // Track page views
    console.log(`📄 Current Page: ${document.title}`);

    // Track user interactions
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function () {
            console.log(`🔗 User clicked: ${this.innerText} (${this.href})`);
        });
    });

    // Track button clicks
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            console.log(`🖱️ Button Clicked: ${this.innerText}`);
        });
    });

    // Track errors
    window.onerror = function (message, source, lineno, colno, error) {
        console.error(`❌ ERROR: ${message} at ${source}:${lineno}:${colno}`);
    };
});
