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