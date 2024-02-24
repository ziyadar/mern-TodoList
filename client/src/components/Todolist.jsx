import { AiFillDelete } from "react-icons/ai"; 
import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Todolist = ()=>{
    const [Todoo,setTodoo] = useState([])
    const getAllTodos = async() =>{
        try {
            const response = await axios.get('http://localhost:3000/todo/getallTodo')
            console.log(response.data.data) 
            setTodoo(response.data.data)  //array data storing in state
        
            
        } catch (error) {
            console.log(error.message) //array data
        }
    }
    const handleDelete = async(id) =>{
        try {
            const newDelete = await axios.delete(`http://localhost:3000/todo/tododelete/${id}`)
            console.log(newDelete)
            if(newDelete.data.success === true){
                getAllTodos()
            }
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        getAllTodos()
    }, [])



    

    return(
        <div>
            <ul className="todo-list-wrapper">
{Todoo.map((todo)=>{ 
                return(
                    <li className="todo-list" key={todo._id}>{todo.message} <AiFillDelete className="tododelete-btn" size={20} onClick={()=> handleDelete(todo._id)}/></li>
                )
               })}
            </ul>
        </div>

    )
}

export default Todolist