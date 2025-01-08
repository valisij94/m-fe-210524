import { TODO_ACTIONS } from "../actions/todoActions.js";

const initialState = {
  data: [],
  filter: null,
  todosCount: 0
};

export const todoReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO: {
      return {
        ...state,
        data: [ ...state.data, action.payload],
        todosCount: state.todosCount + 1
      }
    }
    case TODO_ACTIONS.DROP_TODO: {
      return {
        ...state,
        data: state.data.filter( el => el !== action.payload ),
        todosCount: state.todosCount - 1
      }
    }
    case TODO_ACTIONS.FILTER_TODOS: {
      return {
        ...state,
        filter: action.payload
      }
    }
    case TODO_ACTIONS.CLEAR_FILTERS: {
      return {
        ...state,
        filter: null
      }
    }
    default: return state;
  }
}