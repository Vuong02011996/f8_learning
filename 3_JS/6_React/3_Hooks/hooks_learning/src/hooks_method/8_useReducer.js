import {useState, useEffect, useRef, useReducer} from 'react'

// useReducer hoạt động tương tự như thư viện Redux
// Cung cấp thêm một công cụ làm việc như useState
// Nhưng công việc useState làm được thì useReducer đều làm được và ngược lại

// Vậy khi nào dùng cái nào
// useState: dùng trong trường hợp số state trong một component ít, dữ liệu các state không phụ thuộc vào nhau, hoặc state chỉ là kiểu nguyên thủy, object một cấp, ..
// useReducer: trong những trường hợp phức tạp còn lại, .. 

// Cách dùng
    // useReducer: nhận vào 3 đối số
    // 1. hàm reducer ở bước 3
    // 2. initState

    // Trong lần đầu tiên App render useReducer sẽ nhận đối số là hàm reducer nhưng không chạy
    // nhận giá trị thứ hai là initState và trả initState về phần tử đầu tiên của mảng
    // trả về vần tử thứ hai là một hàm dispatch 

    // Hàm reducer chỉ chạy mỗi khi gọi hàm dispatch
    // Khi gọi hàm dispatch(hàm này sẽ nhận đối số là một action hoặc object có action và dữ liệu kèm theo) thì thèn useReducer sẽ gọi hàm reducer
    // và truyền state hiện tại, action nhận từ dispatch cho hàm reducer sau đó hàm reducer làm việc và trả về state mới lưu vào biến là phần 
    // tử thứ nhất của mảng trả về

    // Mỗi khi dispatch sẽ gọi useReducer nhận state mới và  re-render lại App


// So sánh bước làm với useState
// useState
// 1. Init State: 0
// 2. Có hai Actions: Up(state + 1) / Down(state -1)

// useReducer
// 1. Init State: 0
// 2. Có hai Actions: Up(state + 1) / Down(state -1)
// 3. Tạo ra hàm reducer: nhận vào state hiện tại và một hành động , và trả về state mới thông qua hành động đó.
// 4. dispatch: đi kích hoạt một actions.

// Dùng State 
function HookState()
{
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>Up</button>
            <span> / </span>
            <button onClick={()=> setCount(count - 1)}>Down</button>
        </>
    )
}
// const HookReducer = HookState

// Dùng Reducer
function HookReducer1()
{
    // Bước 1: Khai báo các state cần re-render
    const initState = 0

    // Bước 2: Tạo các actions để xử lí
    const UP_ACTION = 'up'
    const DOWN_ACTION = 'down'

    // Bước 3: Tạo hàm reducer xử lí logic 
    function reducer(state, action)
    {
        console.log(" reducer running...")
        switch(action){
            case UP_ACTION:
                // luôn return ra giá trị cùng kiểu với state innit
                return state + 1
            case DOWN_ACTION:
                return state - 1
            default:
                return new Error("Invalid action")
        }

    }

    // Bước 4 Dispatch

    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={()=> dispatch(UP_ACTION)}>Up</button>
            <span> / </span>
            <button onClick={()=> dispatch(DOWN_ACTION)}>Down</button>
        </>
    )
}

// Ví dụ 2: Viết todo app bằng useReducer
function HookReducer()
{
    // B1: khai báo các state 
    const initState = {
        job: '',
        jobs: [],
    }
    const inputRef = useRef()

    // B2 Tạo các action cần xử lí
    const SET_JOB = "set_job"
    const ADD_JOB = "add_job"
    const DELETE_JOB = "delete_job"

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

    // B4 dispatch

    // hàm dispatch cần truyền vào object gồm : hành động và dữ liệu người từ thẻ input để vào hàm reducer update lại state
    // nên ta viết một hàm như sau payload dữ liệu mang theo
    function setJob(payload)
    {
        return {
            type: SET_JOB,
            payload
        }
    }
    function addJob(payload)
    {
        return {
            type: ADD_JOB,
            payload
        }
    }

    function deleteJob(payload)
    {
        return {
            type: DELETE_JOB,
            payload
        }
    }

    const [state, dispatch] = useReducer(reducer, initState)
    console.log("state innit: ", state)


    function handleSubmit()
    {
        dispatch(addJob(state.job))
        dispatch(setJob(""))
        inputRef.current.focus()

    }
    return (
        <>
            <h1>To Do App</h1>
            <input
                ref={inputRef}
                value={state.job}
                placeholder="Enter job..."
                onChange={(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {state.jobs.map((job, index) => 
                <li key={index}>{job}
                    <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
                </li>
                )}
            </ul>
        </>
    )
}

export default HookReducer