
const w3 = document.getElementById("w3")

function labelToEdit(event) {
  let display = event.target;
  let edit = display.parentElement.children[1]
  edit.value = display.innerHTML
  display.style.display = "none"
  edit.style.display = "block"
  edit.focus();
}

function editToLabel(event) {
  let edit = event.target;
  let display = edit.parentElement.children[0]
  display.style.display = "block"
  display.value = edit.innerHTML
  edit.style.display = "none"
}

function createLabel(text) {
  let p = document.createElement("p")
  p.ondblclick = labelToEdit
  p.innerHTML = text
  return p
}

function createEdit(text) {
  let ta = document.createElement("textarea")
  ta.value =  text
  ta.addEventListener("focusout", (event) => {
    editToLabel(event)
  });
  ta.style.display = "none"
  return ta
}

function createTaskList(tasks) {
  for (let i in tasks) {
    addToList(tasks[i])
  }
}

function addToList(task) {
  let div = document.createElement("div")
  div.appendChild(createLabel(task.text))
  div.appendChild(createEdit(task.text))
  w3.appendChild(div)
}

let tasks = [
  {"text": "task 1", "detail": "detail of task1", "completed": false},
  {"text": "task 2", "detail": "detail of task2", "completed": true},
  {"text": "task 3", "detail": "detail of task3", "completed": false},
]


createTaskList(tasks)

