import React from 'react';


export default class AddTodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const text = e.target.value
        this.setState(()=>({text}))
                
    }
    handleSubmit(e){
        e.preventDefault();
        // console.log(this.props)
        this.props.onSubmit(this.state.text)
        this.setState(()=>({text:''}))
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} value={this.state.text} required/>
                <button>Submit</button>
            </form>
        )
    }
}