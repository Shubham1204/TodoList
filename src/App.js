import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';

import Todos from './components/Todos';
import Header from './components/Header';
import About from './components/pages/About';
import axios from 'axios';
import AddTodo from './components/AddTodo';

class App extends Component{
  state = {
  todos : [
    // {
    //   id:1,
    //   title:"heyyyyy",
    //   completed:true
    // },
    // {
    //   id:2,
    //   title:"gfchjkcgvb",
    //   completed:false
    // },
    // {
    //   id:3,
    //   title:"qwertyuiop",
    //   completed:false
    // }
  ]
}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos: res.data}))
}

markComplete= (id) => {
  this.setState({todos:this.state.todos.map(todos =>{
    if(todos.id === id){
      todos.completed = !todos.completed
    }
    return todos;
  })})
}

delTodo = (id) =>{
  this.setState({todos:[...this.state.todos.filter(todo => 
    todo.id !==id)]});
}

delTodo = (id) =>{
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({todos:[...this.state.todos.filter(todo => 
    todo.id !==id)]}));
}

addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed: false
  }).then(res => this.setState({todos: [...this.state.todos,res.data]}));
    
  
}

render(){
  return (
    <Router>
    <div className="container">
      <Header />
      <Route exact path="/" render={() => (
        <React.Fragment>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        
        </React.Fragment>
      )}  />
      
      <Route path="/about" component={About} />
    </div>
    </Router>
  );
}
}

export default App;
