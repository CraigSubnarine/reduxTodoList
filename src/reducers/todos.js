import cookie from 'react-cookies'

let todoList = cookie.load('Todos');

if(todoList === undefined){
  todoList = []
}

const todos = (state = todoList, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        let newTodo =  [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
        cookie.save('Todos', newTodo, {path:'/'})
        return newTodo
      case 'TOGGLE_TODO':
        let changeTodo = state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
        cookie.save('Todos', changeTodo, {path:'/'})
        return changeTodo
      case 'DELETE_TODO':
        let removeTodo = state.filter(todo =>(action.id!==todo.id))
        cookie.save('Todos', removeTodo, {path:'/'})
        return removeTodo
      default:
        return state
    }
  }
  
  export default todos
  