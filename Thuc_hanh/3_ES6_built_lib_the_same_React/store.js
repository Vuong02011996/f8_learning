import { createStore } from "./core.js";
import reducer from "./reducer.js";

// Khi chạy createStore lần đầu sẽ tạo ra state = init từ reducer.
// Những lần tiếp theo dispatch vô cái gì mới sẽ update lại state qua reducer
//  state = reducer(state, action, args) chạy trong dispatch
const {attach, connect2, connect, dispatch} = createStore(reducer)

// Tạo biến global dispatch để ở đâu cũng gọi được dispatch, trong 
window.dispatch = dispatch

export {attach, connect2, connect}