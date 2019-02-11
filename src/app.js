import store from './redux/store.js';
import { addOneTodo, toggleTodoStatus } from './redux/actions';

const addBtn = document.querySelector('#addTodo-btn');
const todoElement = document.querySelector('#todo');
const tasksElement = document.querySelector('#tasks');

addBtn.addEventListener('click', () => {
  const text = todoElement.value.trim();
  if (text) {
    addOneTodo(todoElement.value.trim());
    todoElement.value = '';
  }
});

store.subscribe(() => {
  const { todos } = store.getState();
  updateTodosDisplayed(todos);
});

function updateTodosDisplayed(todos) {
  tasksElement.innerHTML = "";
  todos.forEach(todo => {
    const todoElement = createTodoElement(todo);
    tasksElement.appendChild(todoElement)
  })
}

function createTodoElement(todo) {
  const todoElement = document.createElement('LI');
  const titleElement = document.createElement('P');
  const statusElement = document.createElement('BUTTON');
  titleElement.innerText = todo.title;
  statusElement.addEventListener('click', () => {
    toggleTodoStatus(todo.id);
  })
  statusElement.innerText = todo.isDone;
  todoElement.appendChild(titleElement)
  todoElement.appendChild(statusElement)
  todoElement.classList.add('todo-item')
  return todoElement;
}