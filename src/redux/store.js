import { combineReducers, createStore } from "redux";
import boardsReducer from './../reducers/boardsReducer';
import { reducer as formReducer } from "redux-form"
const reducers = combineReducers({
  boards: boardsReducer,
  form: formReducer
})

export const store = createStore(reducers)
window.store = store
