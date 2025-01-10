import { PRODUCT_ACTIONS } from "../actions/productActions";

const initialState = {
  src: [],
  fetching: false,
  error: '',
  filters: {},
  filteredProducts: []
};

export const productReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case PRODUCT_ACTIONS.START_FETCHING: {
      return {
        ...state,
        error: '',
        fetching: true,
      }
    }
    case PRODUCT_ACTIONS.PRODUCTS_FAILED: {
      return {
        ...state,
        src: [],
        error: action.payload,
        fetching: false
      }
    }
    case PRODUCT_ACTIONS.PRODUCTS_LOADED: {
      return {
        ...state,
        fetching: false,
        error: '',
        src: action.payload,
        filteredProducts: action.payload
      }
    }
    case PRODUCT_ACTIONS.APPLY_FILTERS: {
      const filters = action.payload;
      const filtered = state.src.filter( el => el.title.indexOf(filters.name) >= 0 );
      return {
        ...state,
        filteredProducts: filtered
      }
    }
    default: return state;
  }
}