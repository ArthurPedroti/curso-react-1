import Button from "./Button"
import './App.css'
import { Greetings } from "./Greetings"
import { AdminMenu } from './AdminMenu'
import { UserMenu } from './UserMenu'
import SupermarketList from "./SupermarketList"
import { useState } from "react"

function App() {
  const user = {
    name: 'Arthur',
    age: 28,
    role: 'admin'
  }

  let content

  if(user.role === 'admin') {
    content = <AdminMenu />
  } else {
    content = <UserMenu />
  }

  const isAdmin = user.role === 'admin'

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const [cliques, setCliques] = useState(0)

  function handleClick() {
    setCliques(cliques + 1)
  }
  
  
  return (
    <>
      <Greetings name={user.name} age={user.age}/>
      <Button onClick={handleClick} cliques={cliques}/>
      <br />
      <Button onClick={handleClick} cliques={cliques}/>
      {content}
      {isAdmin && <AdminMenu />}
      <SupermarketList products={products} />
    </>
  )
}

export default App
