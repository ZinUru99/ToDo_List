import './App.css';
import {useState} from 'react'
import { useEffect } from 'react';





function App() {
  const [data,setData] = useState(0)

  
  useEffect(()=>{
    
    const axios = require("axios");
    axios
      .get("https://gorest.co.in/public/v2/todos")
      .then(function (response) {
        setData(response.data);
        console.log(response.data, "test");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  },[])
 
  function strikethrough(e){
    e.target.style.textDecoration = "line-through";
  }

 
  return (
    <div className="App">
    <h1>My To Do List</h1>
    <label>
      <input className='input' type="text" placeholder='Enter here'></input>
      <button>New</button>
    </label>


    
      <ul style={{listStyleType:"none"}}>
        {data != 0 &&
          data.map((el) => {
            return <li onClick={strikethrough}>{el.title}</li>;
          })}
      </ul>
    </div>
  );
}



export default App;