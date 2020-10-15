import React from 'react';
import './Footer.css';

function PopupTodo({todo}){

    return(
        <div style={{display:todo}} className="modal" id="popup-todo">
            <span>할 일 목록</span>
            <div className="todo-middle">
                <input type="checkbox"/>
                안녕
            </div>
        </div>
    )
}

export default PopupTodo;