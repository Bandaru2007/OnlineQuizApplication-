function checkAnswer(button, isCorrect) {
    const buttons = document.querySelectorAll('.option');
    buttons.forEach(btn => btn.disabled = true); // Disable further clicks

    const message = document.getElementById('result-message');
    if (isCorrect) {
        button.classList.add('correct');
        message.textContent = "Correct! Good job.";
        message.style.color = "#155724";
    } else {
        button.classList.add('incorrect');
        message.textContent = "Incorrect. The correct answer is 'object'.";
        message.style.color = "#721c24";
    }
}