import React from 'react'

const TodoMapItem = ({ todoText, icon, Todo, todos, iconWithContext, hasdone, setTodo, currentTime, deletefunction }) => {

	const ChangeStateContext = (e) => {
		setTodo(
		    todos.map(item => {
		    	if (item.id === Todo.id) {
		    	   	return {
		    	   		...item,
		    	   		hasdone: true
		    	   	}
		    	}
		    	return item
			})
		)
	}




	return (
		<div className="contained" >
			<span className="d" onClick={(e) => {
				e.target.style.background = "hsl(348, 100%, 61%)"
				ChangeStateContext()
			}}>
			    {iconWithContext}
			</span>
			<span className={(hasdone)? 'todo-value' : 'todo-item'}>{ todoText } {(hasdone)? currentTime : ''}</span>
			<span className="iconDelete" onClick={deletefunction}> { icon } </span>
		</div>
	)
}

export default TodoMapItem
