export const PRODUCT_ACTIONS = {
  START_FETCHING: 'PRODUCT/START_FETCHING',
  PRODUCTS_LOADED: 'PRODUCT/PRODUCTS_LOADED',
  PRODUCTS_FAILED: 'PRODUCT/PRODUCTS_FAILED',
  APPLY_FILTERS: 'PRODUCT/APPLY_FILTERS'
};

export const startProductsFetching = () => {
  return {
    type: PRODUCT_ACTIONS.START_FETCHING
  }
}

export const productsLoaded = (products) => {
  return {
    type: PRODUCT_ACTIONS.PRODUCTS_LOADED,
    payload: products
  }
}

export const productsFailed = (error) => {
  return {
    type: PRODUCT_ACTIONS.PRODUCTS_FAILED,
    payload: error
  }
}

export const applyFilters = (filters) => {
  return {
    type: PRODUCT_ACTIONS.APPLY_FILTERS,
    payload: filters
  }
}