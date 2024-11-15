import { Torin, Bilbo, Gandalf } from '../../data/persons.js';

export default function Managers() {

  return (
    <div>
      <div>
        <h4>{Torin.name} {Torin.nickname}</h4>
        <p>{Torin.race}</p>
        <p>{Torin.weapons.join(', ')}</p>
      </div>
      <div>
        <h4>{Bilbo.name} {Bilbo.nickname}</h4>
        <p>{Bilbo.race}</p>
        <p>{Bilbo.weapons.join(', ')}</p>
      </div>
      <div>
        <h4>{Gandalf.name} {Gandalf.nickname}</h4>
        <p>{Gandalf.race}</p>
        <p>{Gandalf.weapons.join(', ')}</p>
      </div>
    </div>
  )
}