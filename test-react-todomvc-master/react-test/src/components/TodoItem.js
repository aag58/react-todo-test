import React from 'react';

const TodoItem = (props)=> (
    <div>
        <p>{props.todo.text} <button onClick={()=>{props.removeTodo(props.todo.id)}}>X</button></p>       
    </div>
)

export default TodoItem