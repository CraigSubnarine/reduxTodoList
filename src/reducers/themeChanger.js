import cookie from 'react-cookies'

let savedTheme = cookie.load('theme');

if(savedTheme === undefined){
  savedTheme = 'light-theme'
}

const themeChanger = (state = savedTheme, action) => {
  switch (action.type) {
    case "SET_THEME":
      cookie.save('theme', action.theme, {path:'/'})
      return action.theme;
    default:
      return state;
  }
};

export default themeChanger;