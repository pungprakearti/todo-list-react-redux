const INITIAL_STATE = { todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === 'ADD_TODO') {
    return {
      todos: [...state.todos, {
        text: action.text,
        id: action.id
      }]
    }
  }
  if (action.type === 'REMOVE_TODO') {
    return {
      todos: state.todos.filter(todo => todo.id !== action.id)
    }
  }

  return state;
}

export default rootReducer;