# Task
+ So sánh class component vs function component -> OK
+ `Run example project ant-design, umi, dva`
+ Start project: npm i -> npm start
+ discuss task
+ Tìm hiểu các thư viện: lodash, table trong ant design, ... 

# Fix 
- click logo trở về trang chủ. 
- logo hinh tron

# 1. Kiosk không hiển thị ngày phép năm, phép thường
- API:
    - Load data `Bảng công tháng ...`:  `workTotalV2/GET_DATA` ; src/pages/work/totalV2/index.js ; `onLoadData 158 `

- Test: 
    + Live https://kiosk.erptran.projects.greenglobal.vn/search/timekeeping -> chưa chạy
    + Local http://localhost:8000/search/timekeeping -> OK
# 2. In phiếu đề xuất trên mẫu a5
+ sửa code ở:  src/pages/suggests/index.js. In phiếu
+ Tương tự nút : In từ phần mềm ở công v2,...
+ dva
    + 1. Component dispatch loại action, (`type: 'suggests/GET_PRINT' => namespace/ten_action`)
    + 2. action được định nghĩa ở model
    + 3. model gọi api từ service.

+ Dom element:
    + `formRef = React.createRef();` dùng để lấy những giá trị từ initialValues của DOM element.

+ Test: 
    + Live: https://webapp.erptran.projects.greenglobal.vn/de-xuat chưa chạy

# 3. Khi báo công không có vân tay sẽ hiện thông báo đỏ để điều hành kiểm tra lý do
+ /DATA/data/Project_GG/FE/web.erp-tran/src/pages/declarations/index.js search `Người gửi`
+ Test trên live: https://webapp.erptran.projects.greenglobal.vn/khai-bao-cong?page=32&limit=50&store_id=1&end_date=2023-02-28&start_date=2022-04-01 => ok


# 4. Đổi placehoder của Thời gian cho phép chấm sớm ở  sửa ca: 
+ /DATA/data/Project_GG/FE/web.erp-tran/src/pages/calendar/config/add/index.js
+ https://source.greenglobal.vn/erp-tran-module-nhan-su/web.erp-tran/src/branch/develop/src/pages/calendar/config/add/index.js#L399 

+ Test:
    + Local: http://localhost:8001/lich-lam-viec/cau-hinh/1406 => ok
    + Live: https://webapp.erptran.projects.greenglobal.vn/lich-lam-viec/cau-hinh/1406 => chưa ăn
# 5. Thêm làm điều động ở chi tiết khai báo công nếu có
+ https://source.greenglobal.vn/erp-tran-module-nhan-su/web.erp-tran/src/branch/develop/src/pages/declarations/id.js#L618

+ Test trên live: https://webapp.erptran.projects.greenglobal.vn/khai-bao-cong/4960 => ok

# 6. Hiển thị ca nghỉ trong thời gian nghỉ trên web giống kiosk
+ http://localhost:8001/xin-nghi-phep/2280?created_at=2022-11-05 web
+ http://localhost:8000/search/request/2280?dateHistory=2022-11-05 kiosk
+ /DATA/data/Project_GG/FE/web.erp-tran/src/pages/absent/id.js search showDateAbsent

+ Tìm component trên web theo path url: `/xin-nghi-phep` => component absent/id
    {
        path: '/xin-nghi-phep/:id',
        component: './absent/id',
        Routes: ['src/components/LayoutComponents/Authorize/AuthFuntion'],
        authority: [permision.XEM_NGHI_PHEP],
    },
+ Đã có giờ nghỉ sao lúc trước trên live không chạy.

+ Test:
    + Live: https://webapp.erptran.projects.greenglobal.vn/xin-nghi-phep/3044?created_at=2023-02-09 -> chạy đúng như local test nhưng format chưa đúng.
# 7. Thêm chức năng in Năng suất
+ /DATA/data/Project_GG/FE/web.erp-tran/src/pages/reviews-productivity/total.js
+ Test:
    + Live: https://webapp.erptran.projects.greenglobal.vn/danh-gia-nang-suat/tong-hop chưa chạy 

# 8. Bảng công theo bộ phận VP và bộ phận KTCH
+ /DATA/data/Project_GG/FE/web.erp-tran/src/pages/work/totalV2/index.js search Bộ phận 
+ /DATA/data/Project_GG/FE/web.erp-tran/src/pages/work/totalV2/index.js search columns={this.header()} header_ktch
