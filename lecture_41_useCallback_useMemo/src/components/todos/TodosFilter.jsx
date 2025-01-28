import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearFilters, filterTodos } from "../../redux/actions/todoActions";

export default function TodosFilter() {

  const [state, setState] = useState( { from: '', to: '' } );
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setState( old => ({...old, [e.target.id]: e.target.value }))
  }

  const clickHandler = () => {
    dispatch( filterTodos(state) );
  }

  const clearFiltersClickHandler = () => {
    dispatch( clearFilters() );
  }

  return (
    <div>
      <input onChange={changeHandler} id='from' type='number' placeholder='From'/>
      <input onChange={changeHandler} id='to' type='number' placeholder='To'/>
      <button onClick={clickHandler}>Apply Filter</button>
      <button onClick={clearFiltersClickHandler}>Clear Filters</button>
    </div>
  )
}