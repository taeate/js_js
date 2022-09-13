const toDoForm = document.getElementById('todo-form');
const toDoinput = document.querySelector('#todo-form input');
const toDolist = document.getElementById('todo-list');


const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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

function sayHello(item){
 console.log("이거 다음", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

