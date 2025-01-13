import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTodo } = todosSlice.actions

export default todosSlice.reducer