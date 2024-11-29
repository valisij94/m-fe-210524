import { useState } from "react";

export default function LonelyMountainRoute() {

  const [points, setPoints] = useState( ['Shire', 'Rivendale', 'Misty mountains', 'Mirkwood', 'Esgaroth', 'Erebor'] );

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue( event.target.value );
  }

  const handleBtnClick = () => {
    setPoints( (old) => {
      return [...old, inputValue]
    })
  }

  const removeLocation = (event) => {
    const pt = event.currentTarget.dataset.location;
    setPoints( old => old.filter(point => point !== pt ));
  }

  return (
    <div className="lonelyMountainRouteContainer">
      {
        points.map( point => {
          return (
            <div key={point} data-location={point} onClick={removeLocation}>
              <p>{point}</p>
            </div>
          );
        })
      }
      <input
        placeholder="New Point"
        type="text"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button
        onClick={handleBtnClick}
      >Add Point</button>
    </div>
  )

}