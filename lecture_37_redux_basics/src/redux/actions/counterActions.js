// List of possible action types - which actions could happen
// in bounds of counter's functionality
export const COUNTER_ACTIONS = {
  increment: 'COUNTER/INCREMENT',
  decrement: 'COUNTER/DECREMENT',
}

// Action creators
export const incrementAction = () => {
  return { type: COUNTER_ACTIONS.increment }
}

export const decrementAction = () => {
  return { type: COUNTER_ACTIONS.decrement }
}