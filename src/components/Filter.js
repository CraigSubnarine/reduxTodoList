import React from "react";
import {setVisibilityFilter} from "../actions"
import {useDispatch, useSelector} from 'react-redux'



function Filter (){
    const dispatch = useDispatch();
    const filter = useSelector(state => state.visibilityFilter)

    
    return (
        <div className={filter}>
            <button className="all" onClick={()=>dispatch(setVisibilityFilter('SHOW_ALL'))}>All</button>
            <button className="active" onClick={()=>dispatch(setVisibilityFilter('SHOW_ACTIVE'))}>Active</button>
            <button className="complete" onClick={()=>dispatch(setVisibilityFilter('SHOW_COMPLETED'))}>Completed</button>
        </div>
    )
}

export default Filter;
