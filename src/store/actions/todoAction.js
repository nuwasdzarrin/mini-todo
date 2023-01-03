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
            let group_id_list = res.data.sort((a, b) => a.id - b.id).map(m => m.id)
            res.data.forEach((d, key) => {
                promises.push(getItem(d.id).then(response => {
                    new_group.push({
                        ...d,
                        items: response.data.map(dt => {
                            return {
                                ...dt,
                                left: key > 0 ? group_id_list[key-1] : null,
                                right: key < group_id_list.length - 1 ? group_id_list[key+1] : null
                            }
                        })
                    })
                }))
            })
            Promise.all(promises).then((result) => {
                dispatch({
                    type: types.GET_TODOS,
                    payload: new_group.sort((a, b) => a.id - b.id)
                })
            })
        })
    } catch (e) {
        console.log(e)
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

export {getTodos, storeTodos, setActionActive, setModalForm, closeModalForm};