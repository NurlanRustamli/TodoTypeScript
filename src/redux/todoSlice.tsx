import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'
const initialState: TodoInitialState = {
    todos: JSON.parse(localStorage.getItem("todosTypeScript"))||[]

}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload]
            localStorage.setItem("todosTypeScript",JSON.stringify([...state.todos]))
        },
        removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
            localStorage.removeItem("todosTypeScript")
            localStorage.setItem("todosTypeScript",JSON.stringify([...state.todos]))

        },
        updateTodo:(state:TodoInitialState,action:PayloadAction<TodoType>)=>{
            state.todos = [...state.todos.map((todo:TodoType)=>todo.id !== action.payload.id?todo:action.payload)]
            localStorage.removeItem("todosTypeScript")
            localStorage.setItem("todosTypeScript",JSON.stringify([...state.todos]))
        }
    }
})

export const { createTodo,removeTodoById,updateTodo } = todoSlice.actions

export default todoSlice.reducer