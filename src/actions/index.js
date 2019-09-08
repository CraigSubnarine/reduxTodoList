//theme 
export const setTheme = theme => ({
  type: "SET_THEME",
  theme
});

// todo app
export const addTodo = (text, uuid) => ({
  type: "ADD_TODO",
  id: uuid,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});