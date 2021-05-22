import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState({
            id: Math.floor(Math.random() * 100000),
            text: ''
        });
    
    // const [inputUpdate, setInputUpdate] = useState(props.edit.value);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const { text } = input;

    const handleChange = e => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        // setInputUpdate(e.target.value);

    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit(input);

        setInput({
            id: Math.floor(Math.random() * 100000),
            text: ''
        });

    }

    return (

        <form
            className="todo-form"
            onSubmit={handleSubmit}
        >
            {props.edit
                ? (
                    <>
                        <input
                            type="text"
                            placeholder="Update todo"
                            value={text}
                            name="text"
                            className="todo-input edit"
                            onChange={handleChange}
                            ref={inputRef}
                        />

                        <button className="todo-button edit">
                            Update todo
                        </button>
                    </>
                )
                : (
                    <>
                        <input
                            type="text"
                            placeholder="Add a todo"
                            value={text}
                            name="text"
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />

                        <button className="todo-button">
                            Add todo
                        </button>
                    </>
                )
            }
        </form>

    )
}

export default TodoForm;
