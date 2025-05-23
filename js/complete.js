const now = new Date();
document.getElementById("today").innerText = now.toLocaleString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const taskBtns = document.getElementsByClassName("task-btn");
for (const taskBtn of taskBtns) {
  taskBtn.addEventListener("click", function (event) {
    const taskCnt = document.getElementById("task-cnt");
    const CompleteTaskCnt = document.getElementById('complete-task-cnt');
    const taskTitle = event.target.parentNode.parentNode.querySelector('h2').innerText;

    if (parseInt(taskCnt.innerText) > 1) {
      alert("Board updated successfully!");
    } else {
      alert("Congrets you have complete all tasks");
    }
    taskBtn.innerText = "Completed";
    taskBtn.classList.add("btn-disabled");
    taskCnt.innerText = parseInt(taskCnt.innerText) - 1;
    CompleteTaskCnt.innerText = parseInt(CompleteTaskCnt.innerText) + 1;

    const activityLog = document.getElementById("activity-log");
    const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const newLog = document.createElement("div");
    newLog.innerHTML = `
        <div class="bg-gray-200 rounded-md p-1">
            <p class="text-sm">You have Complete The Task "${taskTitle}" at ${dayName} ${time}</p>
        </div>
    `;

    activityLog.appendChild(newLog);
    
  });
}
