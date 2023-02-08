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


# Hiển thị ca nghỉ trong thời gian nghỉ trên web giống kiosk
+ http://localhost:8001/xin-nghi-phep/2280?created_at=2022-11-05
+ http://localhost:8000/search/request/2280?dateHistory=2022-11-05

+ Tìm component trên web theo path url: `/xin-nghi-phep` => component absent/id
    {
        path: '/xin-nghi-phep/:id',
        component: './absent/id',
        Routes: ['src/components/LayoutComponents/Authorize/AuthFuntion'],
        authority: [permision.XEM_NGHI_PHEP],
    },

# Đổi placehoder của Thời gian cho phép chấm sớm ở  sửa ca: 
+ /DATA/data/Project_GG/FE/web.erp-tran/src/pages/calendar/config/add/index.js
+ https://source.greenglobal.vn/erp-tran-module-nhan-su/web.erp-tran/src/branch/develop/src/pages/calendar/config/add/index.js#L399 

# Thêm làm điều động ở chi tiết khai báo công nếu có
+ https://source.greenglobal.vn/erp-tran-module-nhan-su/web.erp-tran/src/branch/develop/src/pages/declarations/id.js#L618

# Hiển thị thêm ca nghỉ phép ở thời gian nghỉ
+ showDateAbsent -> /DATA/data/Project_GG/FE/web.erp-tran/src/pages/absent/id.js