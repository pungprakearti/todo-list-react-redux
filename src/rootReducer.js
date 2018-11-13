import { ADD_TODO, REMOVE_TODO } from './actionTypes';

const INITIAL_STATE = { todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === ADD_TODO) {
    return {
      todos: [...state.todos, {
        task: action.task,
        id: action.id
      }]
    }
  }
  if (action.type === REMOVE_TODO) {
    return {
      todos: state.todos.filter(todo => todo.id !== action.id)
    }
  }

  return state;
}

export default rootReducer;