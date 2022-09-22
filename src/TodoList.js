import { Component } from "react";
import "./App.css";




export default function TodoList ({todo, onDelete, stateSwitch}) {
    return (
      <div className='listItem'>
        <div className='listItemState'>{todo.completed ? 'O' : 'X'}</div>
        <div className='listItemContent'>{todo.text}</div>
        <div className='listItemButton'>
          <button className='listItemDelete' onClick={onDelete}>刪除</button>
          <button className='listItemAction' onClick={stateSwitch}>{todo.completed ? '標示未完成' : '標示已完成'}</button>
        </div>
      </div>
    );
}