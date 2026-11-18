import React, { useState } from 'react'

const App = () => {
  console.log("rendering")

  const [Count, setCount] = useState(0);
  const [User, setUser] = useState({
    name:"Raman"
  })
  return (
    <div>
      <h1>Count is - {Count}</h1>
      <h1>Name is - {User.name} </h1>


      <button onClick={()=>{setCount(Count+1)}}>Count inc</button><br /><br />
      <button onClick={()=>{setUser({name:"Baman"})}}>Change name </button>
      
    </div>
  )
}

export default App
