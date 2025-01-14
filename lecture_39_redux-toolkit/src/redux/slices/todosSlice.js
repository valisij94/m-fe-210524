import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filters: null
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    dropTodo: (state, action) => {
      state.todos = state.todos.filter(el => el !== action.payload)
    },
    applyFilters: () => {},
    clearFilters: () => {}
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, dropTodo } = todosSlice.actions

export default todosSlice.reducer