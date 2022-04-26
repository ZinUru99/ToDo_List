import './App.css';
import {useState} from 'react'
import { useEffect } from 'react';
const axios = require("axios");

var toggle = true;
function App() {
  const [data,setData] = useState(0)
  const [input,setInput] = useState("asdds");
  const [customList,setCustomList] = useState([]);

  function handleChange(e){
    setInput(e.target.value)
  }

  function strikethrough(e){




     if(toggle) {
      e.target.style.textDecoration = "line-through";
      toggle = false;
    } else {
      e.target.style.textDecoration = "";
      toggle = true;
    } 

    
  }

  function addNew(){
    // Send to-do task in the list
    setCustomList([input,...customList])
 
   /*  setCustomList(neww);  */
  }
  
  useEffect(()=>{
    axios
      .get("https://gorest.co.in/public/v2/todos")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },[])

  return (
    <div className="App">
      <div className='logo'><img src="https://cdn.pixabay.com/photo/2020/01/21/18/39/todo-4783676_960_720.png" alt="" /></div>
    <div className='new-wrap'>
      <input className='new-input' type="text" value={input} onChange={handleChange} placeholder='Enter here'></input>
      <button className="new-btn" onClick={addNew}>New</button>
    </div>
      
      <ul style={{listStyleType:"none"}}>
    {customList.map((item)=>{
        return <li onClick={strikethrough}>{item}</li>
      })}
  
        {data!=0 && data.map((el) => {
            return <li onClick={strikethrough}>{el.title}</li>;
          })}

      </ul>
      <div><img src='https://thumbs.gfycat.com/HeftyDescriptiveChimneyswift-max-1mb.gif' width="160px"></img></div>
      <a href="" style={{display:"block",marginTop:"80px"}}><i>Made by Romano</i></a>
    </div>
  );
}


export default App;