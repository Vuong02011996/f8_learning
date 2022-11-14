import { SET_TODO_INPUT, ADD_TODO } from "./constant";

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action)
{
    let newState
    switch(action.type)
    {
        case SET_TODO_INPUT:
            newState = {
                ...state,
                todoInput: action.payload
            }
            return newState
        case ADD_TODO:
            newState = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            return newState
        default:
            throw new Error("Invalid actions")
    }

}

// Nên quy ước export cuối file để dễ nhìn code
export {initState}
export default reducer