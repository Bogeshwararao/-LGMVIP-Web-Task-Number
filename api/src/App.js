
import { useState } from 'react';
import './App.css';

function App() {
  const [users,setUsers]=useState([]);
  const loadUsers=async ()=>{
    const response=await fetch("https://api.github.com/users")
    const jsonResponse=await
    response.json();
    setUsers(jsonResponse); 
  }
  return (
    <center>
        <div>
          <h1>hello</h1>
          <button onClick={loadUsers}>GET DATA</button>
          <h2>USERS: </h2>
          <ul>
              {users.map(({id, login, avatar_url})=>(
                <li key={id}>Name:{login}
                <br></br>
                Link:
                {avatar_url}{" "}</li>
                
              ))}
          </ul>
        </div>
        </center>

  );
}

export default App;
