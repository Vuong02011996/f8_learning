// Các bước viết code khi làm việc với Redux

// 1. Tạo các action constants
// 2. Tạo actions bằng action creators


import {createStore} from "redux"


// Tạo constants
const SET_JOB = 'SET_JOB'
const ADD_JOB = 'ADD_JOB'
const DELETE_JOB = 'DELETE_JOB'

// Tạo Action có 2 cách 
// Tạo bằng mảng object : ít dùng(bị vấn đề về  phải viết nhiều actions với mỗi payload khác nhau)
// Tạo bằng action creators: truyền payload vô để một action có nhiều data khác nhau.
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

