
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const[users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  

  return (
    <>
 
      <h1>User management system</h1>
      <h3>Numbers of users: {users.length}</h3>
  
    </>
  )
}

export default App
