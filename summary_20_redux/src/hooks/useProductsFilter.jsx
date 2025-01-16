import { useSelector } from "react-redux";

const filterProduct = (productData, filters) => {
  if (!filters) return true;
  const {name, priceFrom, priceTo} = filters;
  return (
    ((name && productData.title.toLowerCase().indexOf(name.toLowerCase()) >= 0) || (!name)) &&
    ( (priceFrom && productData.price >= priceFrom) || !priceFrom) &&
    ( (priceTo && productData.price <= priceTo) || !priceTo)
  );
};

const sortProduct = (products, orderBy) => {
  if (!orderBy) return products;
  switch (orderBy) {
    case 'priceAsc': return products.sort( (a,b) => a.price - b.price );
    case 'priceDesc': return products.sort( (a,b) => b.price - a.price );
    case 'nameAsc' : return products.sort( (a,b) => a.title.localeCompare(b.title) );
    case 'nameDesc' : return products.sort( (a,b) => b.title.localeCompare(a.title) );
    default: return products;
  }
};

export default function useProductsFilter() {

  const { filters, products } = useSelector(state => state.products);

  const filteredProducts = products.filter( (el) => filterProduct(el, filters) );
  if (filters && filters.orderBy) {
    sortProduct(filteredProducts, filters.orderBy);
  }

  return filteredProducts;
}