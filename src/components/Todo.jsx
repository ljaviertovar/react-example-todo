import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';


function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {

        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value:''
        });

    }

    if(edit.id){
        return <TodoForm
            edit={edit}
            onSubmit ={submitUpdate}
        />
    }

    return (
        <div className="todo-container">
            {
                todos.map(todo => (

                    <div
                        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                        key={todo.id}
                    >
                        <div onClick={() => completeTodo(todo.id)}>
                            {todo.text}
                        </div>
                        <div className="icons">
                            <RiCloseCircleLine 
                            className="delete-icon"
                                onClick={() => removeTodo(todo.id)}
                            />
                            <TiEdit 
                                className="edit-icon"
                                onClick={() => setEdit({id: todo.id, value: todo.text})}
                            />
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Todo
