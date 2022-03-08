import {useState} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  }

  const[usernameReg, setUsernameReg] = useState('')
  const[passwordReg, setPasswordReg] = useState('')
  return (
    <div className="App">
      <div>
        <h1>Registration</h1>

        <label>Username</label><br/>
        <input 
        type = "text" 
        onChange={(e)=>{
          setUsernameReg(e.target.value)
        }}

        /><br/>

        <label>Password</label><br/>

        <input 
        type = "password"
        onChange={(e)=>{
          setPasswordReg(e.target.value)
        }}
        /><br/>
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default App;
