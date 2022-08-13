// import logo from "./logo.svg";
import "./App.css";
import { useStore,actions } from "./store";

function App() {
  const [state, dispatch] = useStore()
  const {todos, todoInput} = state

  const handleAdd = ()=>{
    dispatch(actions.addTodo(todoInput))
  }
  console.log(todos)

  return (
    <div id="app">
      <input 
        value={todoInput}
        placeholder="Enter todo...."
        onChange={e =>{
          dispatch(actions.setTodoInput(e.target.value))
        }}

      />
      <button onClick={handleAdd}>ADD</button>
      {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
      ))}
    </div>
  )
}

export default App;
