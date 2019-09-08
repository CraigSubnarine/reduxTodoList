import React from "react";
import {deleteTodo} from "../actions"
import {useDispatch} from 'react-redux'



function DeleteTodo (){
    const dispatch = useDispatch();
    
    return (
        <div>
            <button onClick={()=>dispatch(deleteTodo(key))}>Delete</button>
        </div>
    )
}

export default DeleteTodo;
