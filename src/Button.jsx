export default function Button({onClick, cliques}) {
  return (
    <>
    <button 
      style={{
        backgroundColor: 'blue',
        color: 'white'
      }}
      onClick={onClick}
    >
      Clique aqui ({cliques} cliques)
    </button>
    </>
  )
}