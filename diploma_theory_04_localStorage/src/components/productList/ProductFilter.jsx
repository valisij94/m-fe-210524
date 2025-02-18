import { useState } from "react";

export default function ProductFilter() {

  const [nameFilter, setNaemFilter] = useState('');

  return (
    <div>
      <input
        value={nameFilter}
        onChange={(e) => setNaemFilter(e.target.value)}
        placeholder="name"/>
      <button onClick={() => {}}>Apply Filters</button>
    </div>
  )
}