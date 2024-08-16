import React, { useState } from 'react'

import { FaCheck, FaRegEdit } from 'react-icons/fa'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { TodoType } from '../types/Types'
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';
interface TodoProps{
  todoProps:TodoType
}
function Todo({todoProps}:TodoProps) {

  const [editable, setEditable] = useState<boolean>(false)
  
  const {id,content}=todoProps
  const [newTodo,setNewTodo] = useState<string>(content)
  const dispatch= useDispatch()
 const handleRemoveTodo = ()=>{
dispatch(removeTodoById(id))
 }
 const handleUpdateTodo = ()=>{
  const payload = {
    id:id,
    content:newTodo
  }
  dispatch(updateTodo(payload))
  setEditable(!editable)
 }
  return (
    <div style={{display:'flex',alignItems:"center",justifyContent:"space-between",border:"1px solid lightgray",padding:"16px ",marginTop:"25px",borderRadius:"5px"}}>
        {
          editable?<input type="text" style={{width:"400px",border:"none",borderBottom:"1px solid lightgrey",outline:"none"}} value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/>:<div>{content}</div>
        }
        <div >
            <IoMdRemoveCircleOutline className='icons' onClick={handleRemoveTodo}/>
            {
              editable?<FaCheck className='icons' onClick={handleUpdateTodo}/>:<FaRegEdit className='icons' onClick={()=>setEditable(!editable)}/>
            }
            
            {/*  */}
        </div>
    </div>
  )
}

export default Todo