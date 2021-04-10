import {List} from '@material-ui/core';
import React from 'react';
import Todo from "./Todo";
function TodoList({todos,toggleComplete,removeTodo}){
    var todo
    function handleCheckboxClick(){ 
        toggleComplete(todo.id);
      

    }
    return(
        <List>
            {todos.map(todo => (
                < todo key={todo.id}  todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
            ))}
            
        </List>
    )

}
export default TodoList;