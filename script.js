// script.js

// Init Lucide Icons initially for static elements (Navbar, Hero, Why Matters)
lucide.createIcons();

// Data specifically mapped to provided exact audio filenames
const vocabularyData = [
    { word: "Think", ipa: "/θɪŋk/", example: "I think you are right.", wrongAudio: "common_mispronunciation/Think -.m4a.mp4", rightAudio: "correct_pronunciation/Think +.m4a.mp4" },
    { word: "Event", ipa: "/ɪˈvent/", example: "We plan the event carefully.", wrongAudio: "common_mispronunciation/Event -.m4a.mp4", rightAudio: "correct_pronunciation/Event +.m4a.mp4" },
    { word: "Listen", ipa: "/ˈlɪsn/", example: "Please listen to me.", wrongAudio: "common_mispronunciation/Listen -.m4a.mp4", rightAudio: "correct_pronunciation/Listen +.m4a.mp4" },
    { word: "Write", ipa: "/raɪt/", example: "I write emails every day.", wrongAudio: "common_mispronunciation/Write -.m4a.mp4", rightAudio: "correct_pronunciation/Write +.m4a.mp4" },
    { word: "Honest", ipa: "/ˈɒnɪst/", example: "I try to be honest.", wrongAudio: "common_mispronunciation/Honest -.m4a.mp4", rightAudio: "correct_pronunciation/Honest +.m4a.mp4" },
    { word: "Thought", ipa: "/θɔːt/", example: "I thought about it yesterday.", wrongAudio: "common_mispronunciation/Thought -.m4a.mp4", rightAudio: "correct_pronunciation/Thought +.m4a.mp4" },
    { word: "Separate", ipa: "/ˈsepərət/", example: "We separate the files.", wrongAudio: "common_mispronunciation/Separate -.m4a.mp4", rightAudio: "correct_pronunciation/Separate +.m4a.mp4" },
    { word: "Hidden", ipa: "/ˈhɪdn/", example: "They hide the hidden door well.", wrongAudio: "common_mispronunciation/Hidden -.m4a.mp4", rightAudio: "correct_pronunciation/Hidden +.m4a.mp4" },
    { word: "Determine", ipa: "/dɪˈtɜːmɪn/", example: "We determine the result.", wrongAudio: "common_mispronunciation/Determine -.m4a.mp4", rightAudio: "correct_pronunciation/Determine +.m4a.mp4" },
    { word: "Bought", ipa: "/bɔːt/", example: "I bought a new book.", wrongAudio: "common_mispronunciation/Bought -.m4a.mp4", rightAudio: "correct_pronunciation/Bought +.m4a.mp4" },
    { word: "Vegetable", ipa: "/ˈvedʒtəbl/", example: "I eat vegetables every day.", wrongAudio: "common_mispronunciation/Vegetable-.m4a.mp4", rightAudio: "correct_pronunciation/Vegetable +.m4a.mp4" },
    { word: "Mature", ipa: "/məˈtʃʊə(r)/", example: "People mature over time.", wrongAudio: "common_mispronunciation/Mature -.m4a.mp4", rightAudio: "correct_pronunciation/Mature +.m4a.mp4" },
    { word: "Archive", ipa: "/ˈɑːkaɪv/", example: "We archive old documents.", wrongAudio: "common_mispronunciation/Archive -.m4a.mp4", rightAudio: "correct_pronunciation/Archive +.m4a.mp4" },
    { word: "Debt", ipa: "/det/", example: "They pay their debt slowly.", wrongAudio: "common_mispronunciation/Debt -.m4a.mp4", rightAudio: "correct_pronunciation/Debt +.m4a.mp4" },
    { word: "Knife", ipa: "/naɪf/", example: "I use a knife to cut bread.", wrongAudio: "common_mispronunciation/Knife -.m4a.mp4", rightAudio: "correct_pronunciation/Knife +.m4a.mp4" },
    { word: "Knight", ipa: "/naɪt/", example: "The knight fights bravely.", wrongAudio: "common_mispronunciation/Knight -.m4a.mp4", rightAudio: "correct_pronunciation/Knight +.m4a.mp4" }
];

const container = document.getElementById('flashcards-container');
const mainPlayer = document.getElementById('main-player');

// Play Sound Logic
function playSound(audioPath) {
    // Encode the path to handle spaces and special chars like '+' correctly
    const encodedPath = audioPath.split('/').map(encodeURIComponent).join('/');
    mainPlayer.src = encodedPath;
    mainPlayer.play().catch(e => {
        console.error("Audio playback failed: ", e);
        alert("Cannot play audio. Make sure the file exists: " + audioPath);
    });
}

// Render Cards dynamically
vocabularyData.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'flashcard';

    card.innerHTML = `
        <div class="card-top">
            <h3>${item.word}</h3>
            <p>${item.ipa}</p>
        </div>
        
        <div class="audio-block">
            <p class="audio-label wrong">Common Mispronunciation</p>
            <button onclick="playSound('${item.wrongAudio}')" class="audio-btn wrong">
                <span></span> <!-- Spacer to push icon to right -->
                <i data-lucide="volume-2" style="width: 24px; height: 24px;"></i>
            </button>
        </div>
        
        <div class="audio-block">
            <p class="audio-label right">Correct Pronunciation</p>
            <button onclick="playSound('${item.rightAudio}')" class="audio-btn right">
                <span></span> <!-- Spacer to push icon to right -->
                <i data-lucide="volume-2" style="width: 24px; height: 24px; color: #f8fafc;"></i>
            </button>
        </div>
        
        <div class="card-bottom">
            <p>Sentence example:</p>
            <p>"${item.example}"</p>
        </div>
    `;
    container.appendChild(card);
});

// Re-init lucide icons for dynamically added elements in the flashcards
lucide.createIcons();
