import React from 'react';

const AddNewTodo = (props)=> (
    <div>
        <p>Add a todo   
            <span><button onClick={props.onButtonClick}>
                {props.display? 'Hide form' : 'Add Todo'}
            </button></span> 
        </p>  
    </div>
)

export default AddNewTodo