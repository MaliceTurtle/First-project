import {Checkbox,IconButton,ListItem,Typography} from '@material-ui/core';
import CloseIcon from '@material-ui/core/icons/Close';
import React from 'react';
import TodoList from './TodoList'
function Todo({todo,toggleComplete,removeTodo}){
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }
    function handleRemoveClick(){
        removeTodo(todo.id)

    }
    return(
        <div>
         <ListItem style={{display:'flex'}}/>
         
        <Checkbox  
        checked={todo.completed} 
        
        onClick={handleCheckboxClick} 
        />
        
        
        <Typography
        variant="body1"
        style={{
        textDecoration: todo.completed ? 'line-through':null}}>{todo.task} 
        </Typography>
       <IconButton> onClick={handleRemoveClick}
       <CloseIcon />
       </IconButton>
        <ListItem/>
        </div>
    );

}
export default Todo;