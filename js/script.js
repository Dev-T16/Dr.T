// FOMO COUNTDOWN TIMER
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Registration ends in: " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // Resets for demo purposes
        }
    }, 1000);
}

window.onload = function () {
    let tenMinutes = 60 * 10,
    display = document.querySelector('#timer');
    startTimer(tenMinutes, display);
};
// 1. Find the button and the body in the document
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// 2. Tell the button to "listen" for a click
toggleBtn.addEventListener('click', () => {
   
    // 3. Toggle a special "light-mode" class on the body
    body.classList.toggle('light-mode');

    // 4. Change the emoji based on the mode
    if (body.classList.contains('light-mode')) {
        toggleBtn.innerText = '☀️'; // Show sun in light mode
    } else {
        toggleBtn.innerText = '🌙'; // Show moon in dark mode
    }
});