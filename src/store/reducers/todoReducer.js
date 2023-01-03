import types from "../types";

const initialState = {
    todos:[],
    modal_form: {
        is_show: false,
        type: 'add',
        data: {}
    },
    is_modal_control: null,
    is_modal_add: false,
    is_modal_edit: null,
    loading: true
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    console.log("reducer action payload: ", action.payload)
    let {type, payload} = action
    switch(type){
        case 'GET_TODOS':
            return {
                ...state,
                todos: payload,
                loading: false
            }
        case types.SET_ACTION_ACTIVE:
            return {
                ...state,
                is_modal_control: payload
            }
        case types.SET_MODAL_FORM:
            return {
                ...state,
                modal_form: {
                    ...state.modal_form,
                    is_show: payload.is_show,
                    type: payload.type || 'add',
                    data: payload.data || {}
                }
            }
        case types.CLOSE_MODAL_FORM:
            return {
                ...state,
                modal_form: {
                    ...state.modal_form,
                    is_show: false
                }
            }
        case types.SET_MODAL_ADD:
            return {
                ...state,
                is_modal_add: payload
            }
        case types.SET_MODAL_EDIT:
            return {
                ...state,
                is_modal_edit: payload
            }
        default: return state
    }
}