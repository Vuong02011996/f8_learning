import {useState, useEffect, useRef, useReducer} from 'react'

// useReducer hoạt động tương tự như thư viện Redux
// Cung cấp thêm một công cụ làm việc như useState
// Nhưng công việc useState làm được thì useReducer đều làm được và ngược lại

// Vậy khi nào dùng cái nào
// useState: dùng trong trường hợp số state trong một component ít, dữ liệu các state không phụ thuộc vào nhau, hoặc state chỉ là kiểu nguyên thủy, object một cấp, ..
// useReducer: trong những trường hợp phức tạp còn lại, .. 


// So sánh bước làm với useState
// useState
// 1. Init State: 0
// 2. Có hai Actions: Up(state + 1) / Down(state -1)

// useState
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
function HookReducer()
{
    // Bước 1: 
    const initState = 0

    // Bước 2:
    const UP_ACTION = 'up'
    const DOWN_ACTION = 'down'

    // Bước 3
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

    // Bước 4

    // useReducer: nhận vào 3 đối số
    // 1. hàm reducer ở bước 3
    // 2. initState

    // Trong lần đầu tiên App render useReducer sẽ nhận đối số làm hàm reducer nhưng không chạy
    // sẽ nhận về giá trị thứ hai là initState và trả về phần tử đầu tiên của mảng
    // trả về vần tử thứ hai là một hàm dispatch 

    // Hàm reducer chỉ chạy mỗi khi gọi hàm dispatch
    // Khi gọi hàm dispatch(hàm này sẽ nhận đối số là một action hoặc object có action và dữ liệu kèm theo) thì thèn useReducer sẽ gọi hàm reducer
    // và truyền state hiện tại, action nhận từ dispatch cho hàm reducer sau đó hàm reducer làm việc và trả về state mới lưu vào biến là phần 
    // tử thứ nhất của mảng trả về

    // Mỗi khi dispatch sẽ gọi useReducer nhận state mới và  re-render lại App
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
export default HookReducer