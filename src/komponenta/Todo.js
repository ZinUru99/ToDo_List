import React from 'react'

const Todo = ({data,setData,todo}) => {
    const deleteHandler=()=>{
        setData(data.filter(el=> el.id !== todo.id))
    }
    const completeHandler=()=>{
        setData(data.map((item)=>{
            if(item.id===todo.id){
                return {
                    ...item,status: item.status==="completed" ? "pending" : "completed"
                }
            }
            return item;
        }))
    }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.status==="completed" ? "completed" : ""}`}>{todo.title}</li>
        <button onClick={completeHandler} className='complete-btn'>
            <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandler} className='trash-btn'>
            <i className='fas fa-trash'>
                </i>
        </button>

    </div>
  )
}

export default Todo