function RandomText() {
  const rand = Math.random();
  return (
    <div>
      { rand < 0.5 && <p>Small value</p> }
      { rand > 0.5 && <p>Greater value</p> }
    </div>
  )
}

export { RandomText };