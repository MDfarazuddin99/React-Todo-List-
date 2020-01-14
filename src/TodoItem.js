import React from 'react'




function TodoItem(props){
    return(
    <div className="todoItem">
        <p style={{display:'inline',textDecoration : props.item.completed?'line-through':'none'}}> {props.item.text}</p>
        <input style = {{float:'right' }}
        type="checkbox"
        checked={props.item.completed} 
        onChange={()=>props.handleChange(props.item.id)}>
            
        </input>
    </div>)
}


export default TodoItem
