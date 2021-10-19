import './App.css';
// import { FaBeer } from 'react-icons/fa';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react'
const App = () => {



	const [todoState, setTodoState] = useState('')
	const [Todo, setTodo] = useState([])
	const [Display, setDisplay] = useState(false)

	const deletecontextIcon = () => {
		setTodo(
			Todo.filter( (item, todos) => {
				return (item.id === todos.id) ? item : todos
			})
		)

		console.log(Todo.length)

		if (Todo.length === 1) {
			console.log(' deleted all ')
			setDisplay(false)
		}

	}


	return (
		<div className="App">
			<h1 className="todo-heading">TODO-APP</h1>
			<Form setTodo={ setTodo } todoState={ todoState } Todo={ Todo } setDisplay={setDisplay} setTodoState={setTodoState}/>
			{Display && <TodoList setTodo={ setTodo } todos={Todo}  deletefunction={deletecontextIcon}  />}
		</div>
	);
}

export default App;
