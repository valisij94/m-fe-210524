import SimpleHeader from "../simpleHeader/SimpleHeader";

function RandomText() {
  const rand = Math.random();
  return (
    <div>
      <SimpleHeader headerText="Header for RandomText component"/>
      { rand < 0.5 && <p>Small value</p> }
      { rand > 0.5 && <p>Greater value</p> }
    </div>
  )
}

export { RandomText };