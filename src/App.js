import React from 'react';
import './css/main.css';


import ThemeChanger from './components/ThemeChanger'
import Filter from './components/Filter'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import {useSelector} from 'react-redux'


function App() {
  const theme = useSelector(state => state.theme)

  return (
    <div className="App">
      <div className={theme}>
        <div className="headerDiv">
          <ThemeChanger/>
          <AddTodo/>
          <br/>
          <Filter/>
        </div>
        <VisibleTodoList/>
      </div>
    </div>
  );
}

export default App;
