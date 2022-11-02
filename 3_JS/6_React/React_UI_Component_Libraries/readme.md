# Thư viện UI trong front end
+ Các thư viện UI hổ trợ tuyệt vời về tính responsive cho các màn hình thiết bị khác nhau, các component javascript có sẵn.
+ Its good to use a UI framework for `React` as they give you pre-build components that are efficient, responsive, and customizable.
+ Những cái tên quen thuộc như: `Material-UI`(mui) do Google phát triển, `Boostraps` do Twitter làm ra, thời nào cũng có hào kiệt - một thế lực 
đang phất lên rất nhanh là `Ant Design` do Alibaba tạo ra.
+ [Compare](https://stackoverflow.com/questions/63218673/should-i-use-ant-design-or-materialui-or-react-bootstrap)


## Ant Design(antd) - UMI 
+ `ANT DESIGN` và `ANT DESIGN PRO` là hai phần khác nhau của ANTD.
    + `ANT DESIGN`: Dành cho những components đã được viết sẵn, bạn chỉ cần import và tái sử dụng lại những components đó, ví dụ như `Carousels, Form,     Upload, Modal, Badge`,…etc. Khả năng hỗ trợ Customize Base component, bạn sẽ muốn thay đổi các base components để đáp ứng như cầu của khách hàng/dự án và props của ANTD sẽ là công cụ đắc lực giúp bạn dễ customize hơn và viết code tối giản hơn nhiều.

    + `ANT DESIGN PRO` thì khác, nó là một theme gần như hoàn chỉnh dành cho các trang Admin, CMS ( Control Management System).
    + `ANTD PRO` còn mang đậm tính `"all-in-one"`, chỉ 1 lần cài đặt mà bạn có thể sử dụng luôn:
        + Webpack
        + Less ( một CSS preprocessor giống với SCSS )
        + Sự tuyệt vời đến từ  `UmiJS`: chính là một thư viện Plugin enterprise-level cho React. UmiJS bao hàm bên trong là `redux-saga`, gọi api thay vì với `Axios` thì sẽ là `Request`.
            + Ai cũng biết `Axios` hỗ trợ việc gọi api request tốt và "uy tín" như thế nào nhưng `UMI-Request` lại hơn thế đấy, cùng xem bảng so sánh của umi-request với Axios và Fetch sau
            + https://magz.techover.io/2021/08/09/ant-design-dieu-gi-khien-thu-vien-nay-vuot-mat-material-ui-cua-google/#web-component-vs-mobile-component