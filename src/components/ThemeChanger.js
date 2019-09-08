import React from "react";
import {setTheme} from "../actions"
import {useDispatch} from 'react-redux'


function ThemeChanger (){
    const dispatch = useDispatch();
    
    return (
        <div>
            <button className="lightButton" onClick={()=>dispatch(setTheme('light-theme'))}>Light</button>
            <button className="darkButton" onClick={()=>dispatch(setTheme('dark-theme'))}>Dark</button>
            <button className="forestButton" onClick={()=>dispatch(setTheme('green-theme'))}>Green</button>
        </div>
    )
}

export default ThemeChanger;
