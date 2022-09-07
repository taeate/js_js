const toDoForm = document.getElementById('todo-form');
const toDoinput = document.querySelector('#todo-form input');
const toDolist = document.getElementById('todo-list');

const toDos = [];

function saveToDos(){
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo){
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = "삭제";
  button.addEventListener('click',deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDolist.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoinput.value;
  toDoinput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);