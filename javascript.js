let taskList = document.getElementById("taskList");

    function addTask() {
      let input = document.getElementById("taskInput");
      let taskText = input.value.trim();

      if (taskText === "") {
        alert("Task cannot be empty!");
        return;
      }

      let li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button onclick="editTask(this)">Edit</button>
          <button onclick="deleteTask(this)">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
      input.value = "";
    }

    function editTask(btn) {
      let li = btn.parentElement.parentElement;
      let newTask = prompt("Edit task:", li.querySelector("span").innerText);
      if (newTask) li.querySelector("span").innerText = newTask;
    }

    function deleteTask(btn) {
      btn.parentElement.parentElement.remove();
    }