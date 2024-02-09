import Addtodo from "./components/Addtodo"
import Header from "./components/Header"
import Todolist from "./components/Todolist"
import './App.css'

const App = ()=>{
  return(
    <>
    <Header />
    <Addtodo />
    <Todolist />
    </>
  )
}

export default App