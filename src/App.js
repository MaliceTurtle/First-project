import Typography from '@material-ui/core/Typography';
import './App.css';
import React,{useState, useEffect} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const LOCAL_STORAGE_KEY='react-todo-list-todos';




function App() {
  const [todos,setTodos]= useState([]);
  useEffect(() => {
    const storageTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos){
      setTodos(storageTodos);

    }
  },[]);
  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));


  },[todos]);
  function addTodo(todo){
    setTodos([todo, ...todos]);
  }
  function toggleComplete(id){
    setTodos(
      todos.map(todo =>{
        if(todo.id==id){
          return{
            ...todo,
            completed: !todo.completed
          };
        }
      })
    )

  }
  function removeTodo(id){
    setTodos(todos.filter(todo =>todo !== id));

  }
  <Typography style={{padding:16}} variant='body1'>\
  </Typography>
  return (
    <div className="App">
      
      <h1> #example todo</h1> 
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete}
      removeTodo={removeTodo}
       /> 
     
     
     
     
    </div>
  );
  
}



export default App;
