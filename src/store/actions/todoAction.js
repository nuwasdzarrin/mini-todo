import Api from '../../apis/Api'
import types from "../types";

const getTodos = () => dispatch => {
    try {
        let todos = Api.todo.index({})
        todos.then((res) => {
            let new_group = []
            const getItem = (parent_id) => {
                return Api.todo_item.index(parent_id, {})
            }
            let promises = []
            res.data.forEach(d => {
                promises.push(getItem(d.id).then(response => {
                    new_group.push({...d, items: response.data})
                }))
            })
            Promise.all(promises).then((result) => {
                dispatch({
                    type: 'GET_TODOS',
                    payload: new_group
                })
            })
        })
    } catch (e) {
        dispatch({
            type: 'TODOS_ERROR',
            payload: console.log(e),
        })
    }
}

const storeTodos = () => async dispatch => {
    console.log("Store todo")
}

const setActionActive = (payload) => async dispatch => {
    dispatch({
        type: types.SET_ACTION_ACTIVE,
        payload: payload
    })
}
const setModalForm = (payload) => {
    console.log("ini dia payload: ", payload)
    return {
        type: types.SET_MODAL_FORM,
        payload: payload
    }
}
const closeModalForm = () => {
    return {
        type: types.CLOSE_MODAL_FORM
    }
}
const setModalAddActive = (payload) => {
    console.log("ini dia payload: ", payload)
    return {
        type: types.SET_MODAL_ADD,
        payload: payload
    }
}

export {getTodos, storeTodos, setActionActive, setModalAddActive, setModalForm, closeModalForm};