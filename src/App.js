import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'


export class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos:todosData,
      addItem:'',
    } 
    this.handleChange = this.handleChange.bind(this)
  }  
  
  handleChange(id){
    this.setState(prevState=>{
        const updatedTodos = prevState.todos.map(todo=>{
          if (todo.id === id){
            return{
              ...todo,
              completed:!todo.completed,
            }
          }
          return todo 
        })
        return {todos:updatedTodos}
    })
  }
  
  handleForm(event){
    const {name,value} = event.target
    this.setState({[name]:value})
  }
  
  handleSubmit(event){
    this.setState(prevState=>{
      const a = prevState.todos
      a.push({id:prevState.todos.length+1,text:prevState.addItem,completed:false})
      return {todos:a,addItem:""}
    })
    
  }  

  render() {
  
    const todos = this.state.todos.map(todo=>
      <TodoItem  key ={todo.id} item= {todo} handleChange = {this.handleChange}/>
    )

    return (
      <div className="todoList">
        <h1>My Todo List App</h1>
        {todos}
        <div className="searchbar" >
          <input
          placeholder="Add Item to Todo List" 
          type="text"
          onChange={ this.handleForm.bind(this)} 
          value={this.state.addItem}  
          name="addItem">
            
          </input>
          <button  onClick = {console.log("Button Clicked")}>Add</button>
        </div>
       {/* <h1>{this.state.addItem}</h1> */}
      </div>
    )
  }
}

export default App
