import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import todoItemReducer from './todoItemReducer'

export default combineReducers({
    todoReducer,
    todoItemReducer
})