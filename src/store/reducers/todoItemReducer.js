import types from '../types'

const initialState = {
    todo_items:[],
    is_modal_control: null,
    loading:true
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        case 'GET_TODO_ITEMS':
            return {
                ...state,
                todo_items: action.payload
            }
        case types.SET_ACTION_ACTIVE:
            return {
                ...state,
                is_modal_control: action.payload
            }
        default: return state
    }
}