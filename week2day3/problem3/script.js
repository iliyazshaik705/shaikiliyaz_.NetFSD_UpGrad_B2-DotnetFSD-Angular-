 
// ======Module Pattern======


const TodoApp = (() => {

  // ======DOM Elements======
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

 
  // ======Add Task======
  
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (!taskText) return;

    const li = document.createElement("li");
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
  };

 
  // =======Handle Task Actions=======
  // =======(Event Delegation)=======
 
  const handleTaskClick = (e) => {

    const target = e.target;

    // Delete Task
    if (target.classList.contains("delete-btn")) {
      target.parentElement.remove();
    }

    // Mark Complete
    if (target.classList.contains("task-text")) {
      target.parentElement.classList.toggle("completed");
    }
  };

  
  // Initialize App
 
  const init = () => {
    addTaskBtn.addEventListener("click", addTask);
    taskList.addEventListener("click", handleTaskClick); // 🔥 Event Delegation
  };

  return { init };

})();


// Start App
TodoApp.init();
