import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export function addTodo(payload) {
  return { ...payload, type: ADD_TODO }

}

export function removeTodo(payload) {
  return { ...payload, type: REMOVE_TODO }
}