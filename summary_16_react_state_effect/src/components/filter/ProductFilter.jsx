import { useEffect, useState } from "react";

export default function ProductFilter( {setFilter} ) {

  const [categories, setCategories] = useState( [] );
  const [error, setError] = useState(false);
  const [filterData, setFilterData] = useState( {
    name: '',
    priceFrom: '',
    priceTo: '',
    category: ''
  });

  useEffect( () => {
    fetch('https://dummyjson.com/products/categories')
      .then(resp => resp.json())
      .then(data => setCategories(data));
  }, []);

  const changeHandler = (e) => {
    const nameAttr = e.target.name;
    const value = e.target.value;
    setFilterData(old => ( {...old, [nameAttr]: value}) );
  }

  const btnClickHandler = () => {
    let numberFrom = 0, numberTo = Infinity;
    if (filterData.priceFrom.length > 0) {
      numberFrom = +filterData.priceFrom;
      if (Number.isNaN(numberFrom)) {
        setError(true);
        return;
      }
    }
    if (filterData.priceTo.length > 0) {
      numberTo = +filterData.priceTo;
      if (Number.isNaN(numberTo)) {
        setError(true);
        return;
      }
    }
    if (numberFrom >= numberTo) {
      setError(true);
      return;
    }

    setError(false);
    setFilter(filterData);
  }

  return (
    <div className="productFilterContainer">
      <input name='priceFrom' placeholder="Price from" onChange={changeHandler}/>
      <input name='priceTo' placeholder="Price to" onChange={changeHandler}/>
      <input name='name' placeholder="Product name" onChange={changeHandler}/>
      <select name='category' onChange={changeHandler}>
        <option selected value=''>Select category</option>
        { categories.map( cat => {
          return <option key={cat.slug} value={cat.slug}>{cat.name}</option>
        })}
      </select>
      <button onClick={btnClickHandler}>Apply filters</button>
      { error && <p>Something went wrong!</p> }
    </div>
  );
}