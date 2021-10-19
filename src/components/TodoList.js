import React from 'react'
import styled from 'styled-components'
// import { VscCircleLargeFilled } from "react-icons/vsc";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { MdDelete } from "react-icons/md";
import TodoMapItem from './TodoMapItem';
const SctyledTodoContainer = styled.div`
    width: 500px;
	background-color: #fff;
	padding: 30px 20px;
	margin: 0 auto;
	position: relative;
	top: -38px;
	box-shadow: 5px 4px 4px 0px #706c6c;
	border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
	.todo-siplay-box {
		background-color: #fff;
	}
	.contained{
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 10px 10px;
        border: 2px solid hsl(348, 100%, 61%);
	    border-radius: 5px;
		margin: 10px 0;
		width: 460px;
		/* background-color: #fff; */
		.d {
			text-align: center;
			margin: auto 0;
			display: flex;
            justify-content: center;
            align-items: center;

			.filled {
				color: hsl(348, 100%, 61%);
				border: 1px solid hsl(348, 100%, 61%);
				border-radius: 100px;
				background-clip: border-box;
				box-sizing: border-box;
			}
		}
		.todo-value{
	    	text-decoration: line-through;
			-webkit-text-decoration-color: hsl(348, 100%, 61%); /* Safari */
            text-decoration-color: hsl(348, 100%, 61%);
	    }
		.iconDelete {
			font-size: 20px;
			display: flex;
            justify-content: center;
            align-items: center;
		}

	}
`
const TodoList = ({ todos, setTodo, deletefunction}) => {



	return (
		<SctyledTodoContainer data-target="SctyledTodoContainer">
			<div className="todo-siplay-box">
				{todos.map(
					todo => {
						const { Todo, ctime, hasdone, id } = todo

						return (
							<TodoMapItem
							    hasdone={hasdone}
								iconWithContext={
									<VscCircleLargeOutline className="filled" />
								}
								currentTime={ctime}
								setTodo={setTodo}
								key={id}
								todoText={Todo}
								icon={<MdDelete />}
								todos={todos}
								Todo={todo}
                                deletefunction={deletefunction}
							/>
						)
					}
				)}
			</div>
		</SctyledTodoContainer>
	)
}

export default TodoList

