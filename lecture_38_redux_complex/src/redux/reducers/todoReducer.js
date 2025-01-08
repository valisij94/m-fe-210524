import { TODO_ACTIONS } from "../actions/todoActions.js";

const initialState = {
  data: [],
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
    default: return state;
  }
}