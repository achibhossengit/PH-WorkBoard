document.getElementById("clear-btn").addEventListener("click", function () {
  const activityLog = document.getElementById("activity-log");
  activityLog.innerHTML = "";
});

document.getElementById("color-picker").addEventListener("click", function () {
    const body = document.getElementById('body-container');
    body.style.backgroundColor = getRandomColor();
});
