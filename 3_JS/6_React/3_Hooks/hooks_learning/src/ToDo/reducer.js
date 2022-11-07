import {DELETE_JOB, SET_JOB, ADD_JOB} from "./constant"

// B1: khai báo các state 
export const initState = {
    job: '',
    jobs: [],
}

// B3 tạo hàm reducer
const reducer = (state, actions) => {

    console.log("state", state)
    console.log("actions", actions)
    let newState
    switch(actions.type) {
        case SET_JOB:
            // lấy giá trị job người dùng nhập vào và set cho state job
            newState = {
                ...state,
                job: actions.payload
            }
            break
        case ADD_JOB:
            // thêm job hiện tại vào mảng jobs để render lại dữ liệu mới
            newState = {
                ...state,
                jobs: [...state.jobs, actions.payload]
            }
            break

        case DELETE_JOB:
            // xoa job dựa vào index chú ý không xóa trực tiếp trên mảng state.jobs
            const newJobs = [...state.jobs]
            newJobs.splice(actions.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default: 
            throw new Error("Invalid action: " + actions)
    }
    return newState
}

export default reducer