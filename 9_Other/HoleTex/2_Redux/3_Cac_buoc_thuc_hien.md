# Hai cơ chế tự động trong redux:

-   Reducers tự động thực hiện logic khi có dispatch actions tương ứng
-   Component tự động render lại khi nghe thông tin state mình lấy ra từ reducers thay đổi.

# Redux core

-   Cài đặt: `yarn add redux react-redux`
-   Tạo một store tạo file redux/store.js.
-   Tạo file redux/reducers.js, truyền các reducer function qua cấu hình cho store.
-   Đưa store vào project để sử dụng bằng cách bọc App của chúng ta lại ở file index.js
-   Tạo các actions cần thiết dựa vào UI trong file actions.js
-   Trong các components chúng ta dispatch các actions tương ứng với eventHandler như onClick, obLoad, onSearch, .... Khi dispatch actions reducers sẽ tự động lắng nghe và thực hiện các actions tương ứng.
-   Dùng useSelector để lấy ra dữ liệu mới từ store và render lại UI.(Nên tạo các selectors function như actions để tránh lặp lại code)

# Dùng redux DevTools để quan sát sự thay đổi của State

-   Cài đặt extention: `yarn add redux-devtools-extension`
-   Vào file store.js cấu hình tham số enhancers bằng composeEnhancers từ redux-devtools-extension
