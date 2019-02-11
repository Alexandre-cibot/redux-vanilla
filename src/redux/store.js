import { createStore } from 'redux';
import { ADD_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: []
}

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, {
          id: state.todos.length,
          title: action.title,
          isDone: false
        }]
      }
      break;
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, isDone: !todo.isDone }
          } else {
            return todo
          }
        })
      }
  }
});

store.subscribe(() => console.log(store.getState()));

export default store;
// store.dispatch({ type: 'ADD_TODO', title: "Auto-generated todo" });
// setTimeout(() => {
//   store.dispatch({ type: 'CHECK_TODO', id: 0 })
// }, 2000);