export function Greetings({name, age}) {
  return (
    <>
      <p className="test" >Hello {name}</p>
      {age && ( <p className="test" >Eu tenho {age} anos.</p> )}
    </>
  )
}