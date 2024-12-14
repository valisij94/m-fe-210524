export default function Page2() {

  return (
    <div className="page page2">
      <h2>This is the second page of our app</h2>
      <p>It also contains this small dummy text, and contains small grid below.</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
        <p>Fist col</p>
        <p>Second col</p>
        <p>Third col</p>
      </div>
    </div>
  )
}