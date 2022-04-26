import './App.css';
import {useState} from 'react'
import { useEffect } from 'react';
import Todo from './komponenta/Todo';





function App() {
  const [data,setData] = useState([]);
  const [inputText,setInputText]=useState("");

  
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
  
  const inputTextHandler = (e)=>{
    setInputText(e.target.value);   
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setData([...data, {title: inputText,status: "pending", id: Math.random()*10000}])
        setInputText("");
    }

  return (
    <div className="App">
    <h1>My To Do List</h1>
    <label>
      <input onChange={inputTextHandler} className='input' type="text" placeholder='Enter here'></input>
      <button onClick={submitTodoHandler}>New</button>
    </label>


    
      <ul style={{listStyleType:"none"}}>
      {data.map(todo=>  
          (<Todo key={data.id} 
            data={data} 
            todo={todo}
            setData={setData}/>)
          )}
      </ul>
    </div>
  );
}



export default App;