import React from "react";
import './todoItem.css'

interface TodoItemProps{
    type?: string
    shortDescription?: string
}

export default function TodoItem({...props}: TodoItemProps){
    return(
        <div className="todoItem">
            <div className="todoItem__type">
                {props.type}
            </div>
        </div>
    )
}