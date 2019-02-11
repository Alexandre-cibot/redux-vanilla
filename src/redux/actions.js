import store from './store';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addOneTodo(text) {
  store.dispatch({
    type: ADD_TODO,
    title: text
  })
};

export function toggleTodoStatus(todoId) {
  store.dispatch({
    type: TOGGLE_TODO,
    id: todoId
  })
}