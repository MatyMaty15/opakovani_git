// Interaktivní funkce - počítání kliknutí
let clickCount = 0;
const messages = [
    "🎯 Ahoj! Krásné si vybral/a téma!",
    "🤖 AI je opravdu skvělá technologie!",
    "💻 JavaScript funguje bez problémů!",
    "🚀 Pokud pokračuješ v klikání, stane se něco zábavného...",
    "🌟 Gratulace! Věš, kolik jsi klikl/a?",
    "🎮 Hvězdná nálada se mi líbí!",
    "🔮 AI bude zřejmě součástí budoucnosti každého programátora",
    "💡 Neustávej! Jsi už blízko něčeho speciálního!",
    "🎊 WOW! Jsi fakt vytrvalý/á!",
    "✨ SPECIÁLNÍ ZPRÁVA: Máš 10 kliknutí! Už jsi expert/ka na toto tlačítko! 🏆"
];

const button = document.getElementById('magic-btn');
const messageBox = document.getElementById('message');
const counterDisplay = document.getElementById('counter');

// Kliknutí na tlačítko
button.addEventListener('click', function() {
    clickCount++;
    
    // Výběr zprávy na základě počtu kliknutí
    const messageIndex = Math.min(clickCount - 1, messages.length - 1);
    messageBox.textContent = messages[messageIndex];
    
    // Aktualizace počítadla
    counterDisplay.textContent = `Počet kliknutí: ${clickCount}`;
    
    // Změna barvy tlačítka po 5 kliknutích
    if (clickCount > 5) {
        button.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    }
    
    // Animace - zmizení a znovuobjevení zprávy
    messageBox.style.opacity = '0';
    setTimeout(() => {
        messageBox.style.opacity = '1';
    }, 100);
    
    // Vibrace zpětná vazba (pokud je dostupná)
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // Log do konzole
    console.log(`🖱️ Kliknutí č.${clickCount}`);
});

// Nastavení počáteční zprávy
messageBox.textContent = messages[0];

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Kontrola uloženého tématu
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Uložení preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Změna ikony
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    
    console.log(`🌙 Přepnuto na ${isDarkMode ? 'dark' : 'light'} mode`);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Inicializační zpráva v konzoli
console.log('%c🤖 AI Hub - JavaScript je aktivní!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('Počet kliknutí na tlačítko:', clickCount);
console.log('Zkus kliknout na tlačítko a vidět, co se stane!');
