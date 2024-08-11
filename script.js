// initial variables for stop-watch
let count = 0;
let hour = 0;
let minute = 0;
let second = 0;
let stopInterval;

// Select digit elemets for dom manupulation
const digitHour = document.querySelector(".hour");
const digitMin = document.querySelector(".minute");
const digitSec = document.querySelector(".second");
const digitCount = document.querySelector(".count");

// Select button element for dom manupulation
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");

// add event listner to stopwatch buttons
startBtn.addEventListener("click", startStopWatch);
stopBtn.addEventListener("click", stopStopWatch);
resetBtn.addEventListener("click", resetStopWatch);

/*---------------------------------------------------
fucntion to start the stop watch
---------------------------------------------------*/
function startStopWatch() {
  clearInterval(stopInterval);
  stopInterval = setInterval(() => {
    count++;
    if (count == 100) {
      count = 0;
      second++;
    }

    if (second == 60) {
      minute++;
      second = 0;
    }

    if (minute == 60) {
      hour++;
      minute = 0;
    }
    updateStopWatch();
  }, 10);
}

/*---------------------------------------------------
fucntion to stop the stop watch
    - this function will remove the timeinterval
---------------------------------------------------*/
function stopStopWatch() {
  clearInterval(stopInterval);
}

/*---------------------------------------------------
fucntion to reset the stop watch
-this function will clear the time interval
- it will reset the all initial variables
- after reset it will update the page
---------------------------------------------------*/
function resetStopWatch() {
  clearInterval(stopInterval);

  // set all variables to its initial conditions
  count = 0;
  hour = 0;
  minute = 0;
  second = 0;
  updateStopWatch();
}

/*---------------------------------------------------
fucntion to update the stop watch
- it will check the hour, minute and second variable and update the stop watch accordingly
---------------------------------------------------*/
function updateStopWatch() {
  hour < 10 ? (digitHour.innerHTML = "0" + hour) : (digitHour.innerHTML = hour);

  minute < 10
    ? (digitMin.innerHTML = "0" + minute)
    : (digitMin.innerHTML = minute);

  second < 10
    ? (digitSec.innerHTML = "0" + second)
    : (digitSec.innerHTML = second);

  digitCount.innerHTML = count;
}
