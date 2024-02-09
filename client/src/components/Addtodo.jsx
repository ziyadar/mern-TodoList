import { useState } from "react"
import axios from "axios"

const Addtodo = ()=>{
    const [message,setMessage] = useState('')
    const createTodo = async() =>{
        if(message === ''){
            alert('you need to add a message')
        }
        try {
           const newTodo = await axios.post('http://localhost:3000/todo',{
            message:message
           })
           console.log(newTodo.data.success)
           if(newTodo.data.success === true){
            window.location.reload()
           } 
        } catch (error) {
           console.log(error) 
        }
    }
    return(
        <div>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value) } placeholder="add task here..." />
            <button onClick={createTodo}>Add Todo</button>
        </div>

    )

}

export default Addtodo