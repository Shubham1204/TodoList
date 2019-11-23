import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed?'line-through':'none'
        }
    }
    
    render() {
        const {id,title} = this.props.todo
        return (
            
            <div className="todoitem" style={this.getStyle()}>

    <p> 
        <input type="checkbox" className="mr-3 ml-2" onChange={this.props.markComplete.bind(this,id)} />
        {title}
        <button className="btn mr-4" onClick={this.props.delTodo.bind(this,id)}>X</button>
    </p>
            </div>
        );
    }
}

export default TodoItem;