import Api from '../../apis/Api'
import types from '../types'

const getTodoItems = (parent_id) => async dispatch => {
    if (!parent_id) return null
    try{
        const res = await Api.todo_item.index(parent_id, {})
        dispatch({
            type: 'GET_TODO_ITEMS',
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type: 'TODO_ITEMS_ERROR',
            payload: console.log(e),
        })
    }
}

const storeTodoItems = () => async dispatch => {
    console.log("Store todo")
}

export {getTodoItems, storeTodoItems};