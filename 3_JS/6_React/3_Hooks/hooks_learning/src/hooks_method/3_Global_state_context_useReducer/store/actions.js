import {SET_TODO_INPUT, ADD_TODO} from './constant'

export function setTodo(payload)
{
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

export function addTodo(payload)
{
    return {
        type: ADD_TODO,
        payload
    }
}
