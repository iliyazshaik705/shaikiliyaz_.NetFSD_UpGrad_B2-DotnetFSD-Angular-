// Task storage
let tasks = [];

/*   1️⃣ CALLBACK VERSION */

// Add task using callback
function addTaskCallback(task, callback) {
  setTimeout(function () {
    tasks.push(task);
    callback(`Task added: ${task}`);
  }, 1000);
}

// List tasks using callback
function listTasksCallback(callback) {
  setTimeout(function () {
    callback(`Tasks: ${tasks.join(", ")}`);
  }, 1000);
}


/*2️⃣ PROMISE VERSION */

function addTaskPromise(task) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      tasks.push(task);
      resolve(`Task added: ${task}`);
    }, 1000);
  });
}

function deleteTaskPromise(task) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      let index = tasks.indexOf(task);
      if (index !== -1) tasks.splice(index, 1);
      resolve(`Task deleted: ${task}`);
    }, 1000);
  });
}

function listTasksPromise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`Tasks: ${tasks.join(", ")}`);
    }, 1000);
  });
}


/*3️⃣ ASYNC / AWAIT VERSION */

async function runTaskManager() {
  console.log(await addTaskPromise("Learn JavaScript"));
  console.log(await addTaskPromise("Practice DSA"));

  console.log(await listTasksPromise());

  console.log(await deleteTaskPromise("Learn JavaScript"));
  console.log(await listTasksPromise());
}

runTaskManager();