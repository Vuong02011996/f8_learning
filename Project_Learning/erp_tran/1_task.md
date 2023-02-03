# Task
+ So sánh class component vs function component -> OK
+ `Run example project ant-design, umi, dva`
+ Start project: npm i -> npm start
+ discuss task
+ Tìm hiểu các thư viện: lodash, table trong ant design, ... 

# Fix 
- click logo trở về trang chủ. 
- logo hinh tron

# Task1: Kiosk không hiển thị ngày phép năm, phép thường
- API:
    - Load data `Bảng công tháng ...`:  `workTotalV2/GET_DATA` ; src/pages/work/totalV2/index.js ; `onLoadData 158 `


# Task2 In phiếu đề xuất trên mẫu a5
+ sửa code ở:  src/pages/suggests/index.js. In phiếu
+ Tương tự nút : In từ phần mềm ở công v2,...
+ dva
    + 1. Component dispatch loại action, (`type: 'suggests/GET_PRINT' => namespace/ten_action`)
    + 2. action được định nghĩa ở model
    + 3. model gọi api từ service.

+ Dom element:
    + `formRef = React.createRef();` dùng để lấy những giá trị từ initialValues của DOM element.

