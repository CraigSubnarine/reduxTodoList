import React from 'react'
// import DeleteTodo from '../containers/DeleteTodo'
import PropTypes from 'prop-types'

const Todo = ({onClick, onRemove, completed, text }) => (
  <li className="todoItem">
    <div
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none'}}
    >
      <input id="todo-checkbox" type="checkbox" checked={completed} readOnly></input>
      {text}
    </div>
    <button className="delete-button" id="themeButton" onClick={onRemove}>Delete</button>
    <br/>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default Todo
