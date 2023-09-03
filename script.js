let startTime;
let intervalId;

const stopwatchElement = document.getElementById('stopwatch');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');

startStopButton.addEventListener('click', toggleStartStop);
resetButton.addEventListener('click', resetStopwatch);

function toggleStartStop() {
    if (!startTime) {
        startTime = new Date().getTime() - (intervalId ? intervalId : 0);
        startStopButton.textContent = 'Stop';
        intervalId = setInterval(updateStopwatch, 1000); // Update every second
    } else {
        clearInterval(intervalId);
        startStopButton.textContent = 'Start';
        startTime = null;
    }
}

function updateStopwatch() {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = elapsedTime.getUTCHours();
    const minutes = elapsedTime.getUTCMinutes();
    const seconds = elapsedTime.getUTCSeconds();

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    stopwatchElement.textContent = formattedTime;
}

function resetStopwatch() {
    clearInterval(intervalId);
    startStopButton.textContent = 'Start';
    startTime = null;
    stopwatchElement.textContent = '00:00:00';
}
