import React, { Component } from 'react';
import './TodoItem.css'

class AddTodo extends Component {
    state={
        title:''
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type="text" name="title" placeholder="Add Todo..."
                style={{flex:'10', padding:'5px'}} value={this.state.title} 
                onChange={this.onChange}/>
                <input type="submit" value="Add" className="add-btn" style={{flex:'2'}}/>
            </form>
        );
    }
}

export default AddTodo;