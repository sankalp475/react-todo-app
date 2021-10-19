import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
const StyledForm = styled.div`
   padding: 10px;
   background-color: #ffff;
   border-radius: 10px;
   width: 500px;
   position: relative;
   /* transform: translate(-50px, 50px); */
   margin: 30px auto;
   box-shadow: 5px 4px 4px 0px #706c6c;
   /* border-bottom-left-radius: 0px;
   border-bottom-right-radius: 0px; */


    form {
		background-color: #fff;
		padding: 5px 10px ;
    }
    .form_input{
      background-color: #fff;
	  padding: 8px 15px ;
	  border-radius: 4px;
	  border: 2px solid #000;
	  width: 70%;
	  margin: 0 20px;
	  outline: none;
    }
	.todo_btn {
		padding: 8px 15px ;
		background-color: #000;
		color: #fff;
		border: 2px solid #000;
		border-radius: 5px;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
`
const Form = ({ setTodoState, Todo, setTodo, todoState, setDisplay}) => {

	const [count, setCount] = useState(0);

	function formatAMPM(date) {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		let strTime =  hours + ':' + minutes + ' ' + ampm;
		return strTime;
	}

	const TodoClickHandler = (e) => {
		e.preventDefault()
		setCount(prevCount => prevCount + 1)
		const currentTime = formatAMPM(new Date())
		setDisplay(true)
		setTodo([
			...Todo,
			{
				id: count,
				hasdone: false,
				Todo: todoState,
				ctime: currentTime
			}
		])
 	}

	const TodoChangeEvent = (e) => {
		e.preventDefault()
		console.log(e.target.value)
		setTodoState(e.target.value)

	}

	// const KeyDownfunction = (event) => {
	// 	event.preventDefault()
	// 	if (event.keyCode === '13') {
	// 		// event.preventDefault()
	// 		console.log("enter ter key pressed")
	// 	}

	// }

	return (
		<StyledForm>
		    <form>
				<input  type="text" className="form_input" onChange={TodoChangeEvent} />
				<input type="button" onClick={TodoClickHandler} value="todo" className="todo_btn" />
			</form>
		</StyledForm>
	)
}

export default Form
