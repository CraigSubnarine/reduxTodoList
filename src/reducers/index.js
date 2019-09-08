import { combineReducers } from "redux";
import theme from "./themeChanger";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const allReducers = combineReducers({
  todos,
  visibilityFilter,
  theme
});


export default allReducers