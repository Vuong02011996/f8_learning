import {SET_JOB, DELETE_JOB, ADD_JOB} from "./constant"

// B4 dispatch

// hàm dispatch cần truyền vào object gồm : hành động và dữ liệu người từ thẻ input để vào hàm reducer update lại state
// nên ta viết một hàm như sau payload dữ liệu mang theo
export function setJob(payload)
{
    return {
        type: SET_JOB,
        payload
    }
}
export function addJob(payload)
{
    return {
        type: ADD_JOB,
        payload
    }
}

export function deleteJob(payload)
{
    return {
        type: DELETE_JOB,
        payload
    }
}
