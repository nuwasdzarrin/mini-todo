import Api from '../../apis/Api'
import {closeModalForm, getTodos, setActionActive, setLoading} from './todoAction'

const storeTodoItem = (parentId, payload) => dispatch => {
    try {
        dispatch(setLoading(true))
        let todo_item = Api.todo_item.store(parentId, payload)
        todo_item.then((res) => {
            if (res.status === 201) {
                dispatch(getTodos())
                dispatch(closeModalForm())
            }
            return res
        })
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoading(false))
    }
}

const updateTodoItem = (parentId, taskId, payload) => dispatch => {
    try {
        dispatch(setLoading(true))
        let todo_item = Api.todo_item.update(parentId, taskId, payload)
        todo_item.then((res) => {
            if (res.status === 200) {
                dispatch(getTodos())
                dispatch(closeModalForm())
                dispatch(setActionActive(null))
            }
            return res
        })
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoading(false))
    }
}

const destroyTodoItem = (parentId, taskId) => dispatch => {
    try {
        dispatch(setLoading(true))
        let todo_item = Api.todo_item.destroy(parentId, taskId)
        todo_item.then((res) => {
            dispatch(getTodos())
            dispatch(closeModalForm())
            return res
        })
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoading(false))
    }
}

export {storeTodoItem, updateTodoItem, destroyTodoItem};