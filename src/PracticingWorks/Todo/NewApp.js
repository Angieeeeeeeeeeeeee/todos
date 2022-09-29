import './App.css';
import TodoList from './TodoList';
import { Component, useLayoutEffect, useState, useEffect } from 'react';


function App() {
    const [isComposing, setIsComposing] = useState(false);

    const [input, newInput] = useState('');
    const onNewInputChange = (e) => newInput(e.target.value);

    const [filter, setFilter] = useState('All')

    const [todos, newTodo] = useState([]);
    const addTodo = () => {
        const inputText = input.trim();
        newTodo([{ text: inputText, completed: false }, ...todos])
        newInput('')
    }

    const onNewInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    const stateSwitch = (i) => {
        newTodo(todos.map((todo, index) => {
            if (index !== i) {
                return todo;
            }

            return {
                ...todo,
                completed: !todo.completed,
            }
        }))
    }

    const deleteToto = (e) => {
        newTodo(todos.filter(
            (todo, index) => index !== e
        ))
    };

    return (
        <div className='todolist'>
            <div className='wrapper'>
                <h1 className='title'>Todo List</h1>
                <input
                    className='input'
                    value={input}
                    onChange={onNewInputChange}
                    onKeyDown={onNewInputKeyDown}
                    onCompositionStart={() => setIsComposing(true)}
                    onCompositionEnd={() => setIsComposing(false)}
                />
                <button className='button' onClick={addTodo}>新增</button>
                <div></div>
                <div className='filter' onClick={() => setFilter('All')}>全部</div>
                <div className='filter' onClick={() => setFilter('Done')}>已完成</div>
                <div className='filter' onClick={() => setFilter('Undo')}>未完成</div>
                <div className='list'>

                    {todos.filter((todo) => {
                        if (filter === 'All') return true;
                        return filter === 'Done' ? todo.completed : !todo.completed
                    })
                        .map((todo, index) => (
                            <TodoList
                                key={index}
                                todo={todo}
                                onDelete={() => deleteToto(index)}
                                stateSwitch={() => stateSwitch(index)}
                            />
                        ))}

                </div>
            </div>
        </div>
    )
}

export default App;


