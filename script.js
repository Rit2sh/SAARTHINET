// Voice Demo Simulation
document.getElementById('voiceDemoBtn').addEventListener('click', function() {
    const commands = [
        "PM-Kisan balance check karo",
        "Ramesh ko 100 rupiye bhejo",
        "Meri Aadhaar details dikhao"
    ];
    
    const randomCommand = commands[Math.floor(Math.random() * commands.length)];
    const response = `You said: "<strong>${randomCommand}</strong>"<br>
                    <em>Response: Processing in Hindi/Telugu...</em>`;
    
    document.getElementById('voiceResult').innerHTML = response;
});

// Investor Form
document.getElementById('investorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We\'ll send the pitch deck shortly.');
    this.reset();
});
// Web Speech API (Browser Native)
const recognition = new webkitSpeechRecognition();
recognition.lang = 'hi-IN';
recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('voiceResponse').textContent = transcript;
};
recognition.start();