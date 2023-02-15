import { createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// createStore nhận vào 3 tham số:
/**
 * rootReducer: là function reducer dùng để cập nhật các state trong kho chung.
 * initValue: khi tạo store ta muốn set một số giá trị mặt định nào đó.
 * enhancers: dùng để cấu hình các middleware như redux thunk, redux saga, ..., nếu không có initValue thì có thể truyền
 * ở tham số thứ 2.
 */

// Cấu hình sử dụng Redux devtools

const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composeEnhancers);

export default store;
