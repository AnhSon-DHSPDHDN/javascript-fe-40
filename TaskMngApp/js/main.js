// Task sẽ có các thuộc tính: taskName, createAt, createBy, id

const KEY_TASKS_LIST = "tasks";
let allTask = JSON.parse(localStorage.getItem(KEY_TASKS_LIST)) || []; // Lưu danh sách các tasks
let taskEdit = null;
// Trong trường hợp localStorage.getItem = null thì gán mảng rỗng cho allTask

function addTask(taskName, createBy) {
  const task = {
    taskName: taskName,
    createAt: new Date(),
    createBy: createBy,
    id: new Date().getTime(), // ms kể từ thời điểm hiện tại => 1970
    isDone: false, // Để kiểm tra trạng thái hoàn thành của task
  };

  allTask.push(task);
  // Lưu all task vào localStorage
  localStorage.setItem(KEY_TASKS_LIST, JSON.stringify(allTask));
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateOfMonth = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${year}/${month}/${dateOfMonth} ${hour}:${minute}`;
}

function renderTasks() {
  const tbodyElement = document.querySelector(".js-tbody-task-app");
  let bodyTableHtml = ``;

  allTask.forEach((task, index) => {
    bodyTableHtml += `
      <tr class="${task.isDone ? "task--done" : ""}">
        <td>${index + 1}</td>
        <td>${task.taskName}</td>
        <td>${formatDate(new Date(task.createAt))}</td>
        <td>
          <button onclick="deleteTaskById(${task.id})">Del</button>
          <button onclick="showTaskEdit(${task.id})">Edit</button>
          ${
            task.isDone
              ? ""
              : `<button onclick="handleDoneTask(${task.id})">Done</button>`
          }
        </td>
      </tr>`;
  });

  tbodyElement.innerHTML = bodyTableHtml;
}

function handleDoneTask(taskId) {
  // Tìm indexTask cần make done
  const indexTaskMakeDone = allTask.findIndex((task) => task.id === taskId);

  if (indexTaskMakeDone !== -1) {
    // Trong trường hợp indexTaskMakeDone khác -1 => tồn tại giá trị thoã mãn allTask
    allTask[indexTaskMakeDone] = {
      ...allTask[indexTaskMakeDone], // Lấy các properties khác theo properties cũ
      isDone: true, // Cập nhật task hiện tại trạng thái done => true
    };
    renderTasks();

    // Đồng bộ allTask với localStorage
    localStorage.setItem(KEY_TASKS_LIST, JSON.stringify(allTask));
    updateContentBtnAddTask();
  }
}

function updateContentBtnAddTask() {
  const btnAddTask = document.querySelector(".js-btn-add-task");

  if (taskEdit) {
    btnAddTask.textContent = "Edit Task";
  } else {
    btnAddTask.textContent = "Add Task";
  }
}

function showTaskEdit(taskId) {
  const existedTaskEdit = allTask.find((task) => task.id === taskId);

  if (existedTaskEdit) {
    console.log("existedTaskEdit", existedTaskEdit);
    const inputTaskEle = document.querySelector(".js-input-task-name");
    taskEdit = { ...existedTaskEdit };
    inputTaskEle.value = taskEdit.taskName;
    updateContentBtnAddTask();
  }
}

function deleteTaskById(taskId) {
  console.log("delete task", taskId);
  if (taskEdit?.id === taskId) {
    // Nếu task đang được chỉnh sửa thì chặn không cho xoá
    alert("Task đang được chỉnh sửa");
    return;
  }

  allTask = allTask.filter((task) => task.id !== taskId);

  localStorage.setItem(KEY_TASKS_LIST, JSON.stringify(allTask));
  renderTasks();
}

function editTask(newValue) {
  const indexTaskEdit = allTask.findIndex((task) => task.id === taskEdit.id);

  if (indexTaskEdit !== -1) {
    // Trong trường hợp indexTaskEdit khác -1 => tồn tại giá trị thoã mãn trong allTask
    allTask[indexTaskEdit] = {
      ...taskEdit,
      taskName: newValue,
    };
    renderTasks();

    // Đồng bộ allTask với localStorage
    localStorage.setItem(KEY_TASKS_LIST, JSON.stringify(allTask));
    taskEdit = null;
    updateContentBtnAddTask();
  }
}

function handleAddTask(event) {
  event.preventDefault();
  const inputTaskEle = document.querySelector(".js-input-task-name");

  if (taskEdit) {
    editTask(inputTaskEle.value);
  } else {
    addTask(inputTaskEle.value, "Son");
  }
  renderTasks();
  inputTaskEle.value = "";
}

function main() {
  const formInputTaskEle = document.querySelector(".js-form-task");
  formInputTaskEle.addEventListener("submit", handleAddTask);

  renderTasks();
}

main();
