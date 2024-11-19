import SimpleHeader from "../simpleHeader/SimpleHeader";

export default function DwarfCard(props) {

  return (
    <div className="dwarfCardContainer">

      <SimpleHeader headerText={`${props.name} ${props.nickname}`}/>

      <p>Age: {props.age}</p>
      <p>Primary weapon: {props.primaryWeapon}</p>
    </div>
  )
}