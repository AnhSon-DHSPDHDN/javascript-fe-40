// Task sẽ có các thuộc tính: taskName, createAt, createBy, id

let allTask = [
  {
    taskName: "An com",
    createAt: new Date(),
    createBy: "Son",
    id: 1,
  },
  {
    taskName: "Di ngu",
    createAt: new Date(),
    createBy: "Son",
    id: 2,
  },
  {
    taskName: "Thuc day",
    createAt: new Date(),
    createBy: "Son",
    id: 3,
  },
]; // Lưu danh sách các tasks

function addTask(taskName, createBy) {
  const task = {
    taskName: taskName,
    createAt: new Date(),
    createBy: createBy,
    id: new Date().getTime(), // ms kể từ thời điểm hiện tại => 1970
  };

  allTask.push(task);
}

function renderTasks() {
  const tbodyElement = document.querySelector(".js-tbody-task-app");
  let bodyTableHtml = ``;

  allTask.forEach((task, index) => {
    bodyTableHtml += `
      <tr>
        <td>${index + 1}</td>
        <td>${task.taskName}</td>
        <td>${task.createAt}</td>
        <td>
          <button onclick="deleteTaskById(${task.id})">Del</button>
        </td>
      </tr>`;
  });

  tbodyElement.innerHTML = bodyTableHtml;
}

function deleteTaskById(taskId) {
  console.log("delete task", taskId);
  allTask = allTask.filter((task) => task.id !== taskId);
  renderTasks();
}

function handleAddTask(event) {
  event.preventDefault();
  const inputTaskEle = document.querySelector(".js-input-task-name");

  addTask(inputTaskEle.value, "Son");
  renderTasks();
  inputTaskEle.value = "";
}

function main() {
  const formInputTaskEle = document.querySelector(".js-form-task");
  formInputTaskEle.addEventListener("submit", handleAddTask);

  renderTasks();
}

main();
