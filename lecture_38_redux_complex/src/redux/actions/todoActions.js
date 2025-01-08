export const TODO_ACTIONS = {
  ADD_TODO: 'TODOS/ADD_TODO',
  DROP_TODO: 'TODOS/DROP_TODO',
  FILTER_TODOS: 'TODOS/FILTER_TODOS',
  CLEAR_FILTERS: 'TODOS/CLEAR_FILTERS'
}

/**
 * Функция, которая создает эжкшн для добавления нового дела
 * @param {string} todo Название дела
 * @returns Объект-экшн
 */
export const addTodo = (todo) => {
  return {
    type: TODO_ACTIONS.ADD_TODO,
    payload: todo
  }
}

export const dropTodo = (todo) => {
  return {
    type: TODO_ACTIONS.DROP_TODO,
    payload: todo
  }
}

export const filterTodos = ( filterData ) => {
  return {
    type: TODO_ACTIONS.FILTER_TODOS,
    payload: filterData
  }
}

export const clearFilters = () => {
  return {
    type: TODO_ACTIONS.CLEAR_FILTERS
  }
}