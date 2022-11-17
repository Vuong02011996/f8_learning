

// Cách để tránh import dùng nhiều dấu / từ một component con
// Trong component chỉ cần tạo file index là chỉ cần import tới tên thư mục component

// File này có nhiệm vụ là export những file xung quanh nó ra bên ngoài (trong phạm vi component store)

// Khi đó ta muốn import các file trong store ta chỉ cần / tới thư mục(component) store là được.
// ở đây ta export lẻ nên sẽ import lẻ

// Ở src/index.js
// import {StoreProvider} from './hooks_method/3_Global_state_context_useReducer/store'

export {default as StoreProvider} from './Provider'
export {default as StoreContext} from './Context'

// Cái nào bên trong hooks_custom export lẻ ra thì sẽ export hết ra ngoài
export * from './hooks_custom'

// Gom tất cả export của actions vào object actions
export * as actions from './actions'
