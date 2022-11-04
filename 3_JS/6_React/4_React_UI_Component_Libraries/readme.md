# Thư viện UI trong front end
+ Các thư viện UI hổ trợ tuyệt vời về tính responsive cho các màn hình thiết bị khác nhau, các component javascript có sẵn.
+ Its good to use a UI framework for `React` as they give you pre-build components that are efficient, responsive, and customizable.
+ Những cái tên quen thuộc như: `Material-UI`(mui) do Google phát triển, `Boostraps` do Twitter làm ra, thời nào cũng có hào kiệt - một thế lực 
đang phất lên rất nhanh là `Ant Design` do Alibaba tạo ra.
+ [Compare](https://stackoverflow.com/questions/63218673/should-i-use-ant-design-or-materialui-or-react-bootstrap)


## Ant Design(antd) - UMI - Phú đang dùng.
+ `ANT DESIGN` và `ANT DESIGN PRO` là hai phần khác nhau của ANTD.
    + `ANT DESIGN`: Dành cho những components đã được viết sẵn, bạn chỉ cần import và tái sử dụng lại những components đó, ví dụ như `Carousels, Form,    Upload, Modal, Badge`,…etc. Khả năng hỗ trợ Customize Base component, bạn sẽ muốn thay đổi các base components để đáp ứng như cầu của khách hàng/dự án và props của ANTD sẽ là công cụ đắc lực giúp bạn dễ customize hơn và viết code tối giản hơn nhiều.

    + `ANT DESIGN PRO` thì khác, nó là một theme gần như hoàn chỉnh dành cho các trang Admin, CMS ( Control Management System).
    + `ANTD PRO` còn mang đậm tính `"all-in-one"`, chỉ 1 lần cài đặt mà bạn có thể sử dụng luôn:
        + Webpack
        + Less ( một CSS preprocessor giống với SCSS )
        + Sự tuyệt vời đến từ  `UmiJS`: chính là một thư viện Plugin enterprise-level cho React. UmiJS bao hàm bên trong là `redux-saga`, gọi api thay vì với `Axios` thì sẽ là `Request`.
            + Ai cũng biết `Axios` hỗ trợ việc gọi api request tốt và "uy tín" như thế nào nhưng `UMI-Request` lại hơn thế đấy, cùng xem bảng so sánh của umi-request với `Axios` và `Fetch` sau
            + https://magz.techover.io/2021/08/09/ant-design-dieu-gi-khien-thu-vien-nay-vuot-mat-material-ui-cua-google/#web-component-vs-mobile-component
            + https://labs.flinters.vn/none/ant-design-ngon-co-ma-khong-ngon/

=> Trong  thực tế  ta sẽ cần một `giải pháp luồng dữ liệu` như `redux` để `quản lí state`. `Ant-design` có thể sử dụng với bất kì giải pháp luồng dữ liệu nào trong hệ sinh thái `React` như `dva dựa trên Redux,` hay `umi`
+ `Dva` là một giải pháp luồng dữ liệu nhẹ dựa trên `redux`.
+ `umi` is a routing-based framework that supports next.js-like conventional routing and various advanced routing functions
+ https://ant.design/docs/react/practical-projects


# Flow data in FE(function/context - class/redux)
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

# React + hooks vs React + redux? https://nvksolution.com/so-sanh-giua-redux-va-react-hooks/
+ `useContext` chúng ta có thể chia sẻ state tới các `component`, `useReducer` thì cho phép chúng ta cập nhật giá trị mới cho state giống như là `Redux`.
+ `useEffect` chúng ta có thể viết các `action` và `dispatch` chúng tới `reducer`