import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { TodoType } from '../types/Types'

function TodoCreate() {
  const [newTodo,setNewTodo] =useState<string>("")
  const dispatch = useDispatch()
  const handleCreateTodo = ()=>{
if(newTodo.trim().length==0){
  alert("enter your todo")
  return
}

const payload:TodoType = {
  id:Math.floor(Math.random()*99999999999999)
  ,
  content:newTodo
}
dispatch(createTodo(payload))
setNewTodo('')
  }
  return (
    <div className='todoCreate'>
        <input placeholder='Enter Your Todo...' type="text" name="" id="" value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/>
        <button onClick={handleCreateTodo}>Create</button>
    </div>
  )
}

export default TodoCreate