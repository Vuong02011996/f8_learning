
// Ứng dụng context để đưa state ra cấp cao nhất dùng chung cho tất cả các component con

// Tạo ứng dụng hoạt động như Redux

//B1: Tạo Context lưu state toàn cục ở Store , và các file liên quan đến cấu trúc useReducer như
// actions, reducer, constants, ... ta lưu hết ở store
// B2: Tạo Provider , các global state, actions và truyền Provider cho component cha
// B3: Từ component con tạo customer để lấy state từ component cha

// B3

// Ta thấy trong mỗi component con muốn sử dụng state đều phải import hai thèn này
// Nên ta sẽ cunstom một hook tên là useStore để rút gọn khi import 

// import {StoreContext} from './store'
// import {useContext} from 'react'

import {useStore, actions} from './store'


function ToDoApp()
{
    const [state, dispatch] = useStore()
    const {todos, todoInput} = state
    return (
        <div>
            <input 
                value={todoInput}
                placeholder="Nhập công việc..."
                onChange={(e) => dispatch(actions.setTodo(e.target.value))}
            />
            <button onClick={() => dispatch(actions.addTodo(todoInput))}>ADD</button>
            <ul>
                {todos.map((todo, index) => 
                    <li key={index}>
                        {todo}
                    </li>
                    )}
            </ul>
        </div>
    )
}

export default ToDoApp