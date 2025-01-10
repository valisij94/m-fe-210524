import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyFilters } from "../../redux/actions/productActions";

export default function ProductFilter() {

  const [nameFilter, setNaemFilter] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={nameFilter}
        onChange={(e) => setNaemFilter(e.target.value)}
        placeholder="name"/>
      <button onClick={() => { dispatch(applyFilters( {name: nameFilter} ) )}}>Apply Filters</button>
    </div>
  )
}