function createTodoManager() {
    let tasks = [];
    let nextId = 1;

    function addTask(title) {
      if (title === "") {
        throw new Error("Task title cannot be empty");
      }

      const newTask = {
        id: nextId++,
        title: title.trim(),
        completed: false,
        createdAt: new Date()
      };

      tasks.push(newTask);
    }

    function removeTask(id) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                tasks.splice(i, 1);
                break;
            }
        }
    }

    function toggleTask(id) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                tasks[i].completed = !tasks[i].completed;
                break;
            }
        }
    }

    function getTasks() {
      return tasks;
    }

    return { addTask, removeTask, toggleTask, getTasks };
}

const manager = createTodoManager();

function addTask() {
  const title = document.getElementById("title").value;
  manager.addTask(title);
}

function removeTask() {
  const id = Number(document.getElementById("deleteId").value);
  manager.removeTask(id);
}

function toggleTask() {
  const id = Number(document.getElementById("toggleId").value);
  manager.toggleTask(id);
}

function loadTasks() {
  document.getElementById("output").textContent =
    JSON.stringify(manager.getTasks(), null, 2);
}