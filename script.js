document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data values
    let name = document.getElementById('name').value;
    let reason = document.getElementById('reason').value;
    let date = document.getElementById('date').value;
    let loveAnswer = document.querySelector('input[name="love"]:checked').value;

    // Check if the "No" option is selected
    if (loveAnswer === 'no') {
        alert("Oops! Wrong answer! Try again 😜");
        return;
    }

    // Hide form and show result
    document.getElementById('loveForm').style.display = 'none';
    document.getElementById('result').classList.remove('hidden');

    // Show the answers in the result section
    document.getElementById('resultMessage').innerHTML = `
        <p>Here’s what you answered:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>De ce ar trebuii să te aleg</strong> ${reason}</p>
        <p><strong>Proma întâlnire:</strong> ${date}</p>
        <p><strong>Promiți să mă iubești pentru totdeauna?</strong> Da, normal! 💘</p>
    `;

    // Play the background sound starting from 30 seconds
    var audio = document.getElementById('backgroundSound');
    
    // Ensure the audio is loaded
    audio.oncanplaythrough = function() {
        audio.currentTime = 30; // Start the song at 30 seconds
        audio.play();
    };

    // If the audio is already ready, start it immediately
    if (audio.readyState >= 3) {
        audio.currentTime = 30; // Start at 30 seconds
        audio.play();
    }
});