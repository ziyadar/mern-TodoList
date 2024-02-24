import Addtodo from "./components/Addtodo"
import Header from "./components/Header"
import Todolist from "./components/Todolist"
import './App.css'

const App = ()=>{
  return(
    <div className="main">
    <Header />
    <Addtodo />
    <Todolist />
    </div>
  )
}

export default App