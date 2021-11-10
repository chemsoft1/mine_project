// Lets practice props and mapping on our todo list app
// I've created a js file with some todo data in it, normally this data would come from an Api
// challenge: using the array map Method, render a child Component for each todo item in the todosData
// array and pass the relevant data to it.

import React, { Component } from 'react';

import TodoItem from './TodoItem';
import './style.css'
import TodosData from './TodosData';


class App extends React.Component {
    constructor(){
        super()
    this.state = {
        todos : TodosData
    }
        this.handleTodos = this.handleTodos.bind(this)
    }
       handleTodos(id) {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if(todo.id === id) {
                  todo.completed = !todo.completed
              }
              return todo
          })
          return {
              todos : updatedTodos
          }
      })
       }

    render(){
        const todos = TodosData.map( item => {
            return <TodoItem item={item} key={item.id} handleTodos={this.handleTodos} />
    })
    return(
        <div className="todo-list">
           {todos}
        </div>
    );
    }
};

export default App;