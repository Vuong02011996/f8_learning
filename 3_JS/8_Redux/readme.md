# Flow data in FE(React/Hook - React/redux)
## Redux
    + Redux là một thư viện javascript mã nguồn mở
    + Để quản lý trạng thái (state)của ứng dụng
    + Lý do đầu tiên mà các developer thường xuyên áp dụng Redux trong các dự án là vì khả năng `chia sẻ state giữa các component`
    + Nếu kết hợp nó trong React JS thì sẽ như hổ mọc thêm cánh

+ Redux có 2 bộ thư viện được coi là mạnh nhất là `Redux-thunk` và `Redux-saga`, 
    + redux-saga : https://co-well.vn/nhat-ky-cong-nghe/react-redux-reduxsaga-bo-ba-hoan-hao-cho-mot-ung-dung-react/
        + Redux-Saga là một thư viện redux middleware (Trong Redux, middleware là một lớp nằm giữa Reducers và Dispatch Action) giúp bạn quản lý những `side effect` trong redux.
        + Redux-Saga sử dụng Generators (function*) của ES6 để xử lý “`bất đồng bộ`” một cách “đồng bộ”.
        + Hơn nữa vì `Saga sử dụng generator function` nên mình sẽ `không cần phải dùng promise để then`, catch nhiều khi gặp bất đồng bộ. mà chỉ dùng `keyword yield` nổi tiếng.

## React + hooks vs React + redux? https://nvksolution.com/so-sanh-giua-redux-va-react-hooks/
+ `useContext` chúng ta có thể chia sẻ state tới các `component`, `useReducer` thì cho phép chúng ta cập nhật giá trị mới cho state giống như là `Redux`.
+ `useEffect` chúng ta có thể viết các `action` và `dispatch` chúng tới `reducer`



## So sánh redux vs hook/Context
+ Cách hoạt động tương tự nhau.
+ Ưu điểm của redux với hook context
    + Dễ debug, có tool dễ quan sát state thay đổi trong ứng dụng.
    + Cung cấp một kiến trúc sẵn sàng apply middleware (saga, thunk, logger..), context phải tự viết ra middleware
    + Addons dễ  dàng mở rộng
    + Đa nền tảng, sử dụng tất cả dự án bằng JS kể cả code thuần, Hook context chỉ dùng với React
    + Performance hơn hẵn dùng context
        + Vì context dùng Provider có useReducer nên mỗi lần state thay đổi thì tất cả component đều thay đổi.
        + Redux đã xử lí ở component nào thay đổi thì chỉ có component đó render lại.

=> hook/Context: dùng cho ứng dụng vừa nhỏ, và các chức năng ít set lại state(theme)
=> Còn lại nên dùng redux.