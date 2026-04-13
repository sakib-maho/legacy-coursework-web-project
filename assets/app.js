const STAGES = ["Backlog", "In Progress", "Review", "Done"];

const state = {
  tasks: [],
};

async function loadSeedTasks() {
  const response = await fetch("data/tasks.json");
  if (!response.ok) {
    throw new Error("Could not load seed tasks.");
  }
  state.tasks = await response.json();
  renderBoard();
}

function renderBoard() {
  const board = document.getElementById("board");
  const columnTemplate = document.getElementById("columnTemplate");
  const taskTemplate = document.getElementById("taskTemplate");

  board.innerHTML = "";

  STAGES.forEach((stage) => {
    const column = columnTemplate.content.cloneNode(true);
    column.querySelector(".column-title").textContent = stage;
    const items = column.querySelector(".column-items");

    state.tasks
      .filter((task) => task.stage === stage)
      .forEach((task) => {
        const taskFragment = taskTemplate.content.cloneNode(true);
        taskFragment.querySelector(".task-title").textContent = task.title;
        taskFragment.querySelector(".task-meta").textContent = `Priority: ${task.priority}`;
        const advanceBtn = taskFragment.querySelector(".task-advance");
        advanceBtn.addEventListener("click", () => advanceTask(task.id));
        if (stage === "Done") {
          advanceBtn.disabled = true;
          advanceBtn.textContent = "Completed";
        }
        items.appendChild(taskFragment);
      });

    board.appendChild(column);
  });
}

function addTask() {
  const titleInput = document.getElementById("taskInput");
  const priorityInput = document.getElementById("priorityInput");

  const title = titleInput.value.trim();
  if (!title) {
    return;
  }

  state.tasks.push({
    id: Date.now(),
    title,
    priority: priorityInput.value,
    stage: "Backlog",
  });

  titleInput.value = "";
  renderBoard();
}

function advanceTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) {
    return;
  }
  const currentIndex = STAGES.indexOf(task.stage);
  if (currentIndex < STAGES.length - 1) {
    task.stage = STAGES[currentIndex + 1];
    renderBoard();
  }
}

document.getElementById("addTaskButton").addEventListener("click", addTask);
loadSeedTasks().catch((error) => {
  document.getElementById("board").textContent = error.message;
});
