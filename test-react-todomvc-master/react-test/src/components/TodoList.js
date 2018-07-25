import React from 'react';
import TodoItem from '../components/TodoItem';
import AddNewTodo from '../components/AddNewTodo';
import AddTodoForm from '../components/AddTodoForm';
import uuid from 'uuid'
export default class TodoList extends React.Component{

    constructor(props){
        super(props)
        this.state={
            todos:[{
                id: uuid(),
                text: 'Create a todo App'
            },{
                id:uuid(),
                text: "Do grocerries"
            }],
            display: false
        }
        // this.onSubmit=this.onSubmit.bind(this);
    }

    onSubmit= (text)=>{
        const todos=[{id: uuid(),text}, ...this.state.todos]
        this.setState(()=>({
            todos
        }))
            
    }

    onClick= ()=>{
        this.setState(()=>({
           display: !this.state.display
        }))                
    }

    onRemomveTodo = (id)=>{
        const todos = this.state.todos.filter((todo)=>(todo.id!=id))
        this.setState(()=>({
            todos
        })) 
    }

    render(){
        const todoList = this.state.todos.length==0? 'No Todos' : this.state.todos.map((todo)=>{
            return <TodoItem key = {todo.id} todo={todo} removeTodo={this.onRemomveTodo}/>
        })

        return(
            <div>
                <AddNewTodo onButtonClick = {this.onClick} display={this.state.display}/>
                {this.state.display && <AddTodoForm onSubmit={this.onSubmit}/>}
                <div>{todoList}</div>  
            </div> 
        
             
        )
    }
}