# State Management

-   Trong React có nhiều các quản lí state như useState, useReduce,...redux cũng quản lý state như vậy.
-   Redux kho lưu trữ state tập trung và có các quy ước phải tuân theo để cập nhật các state trong kho chung này.

# Immutability(bất biến)

-   Không thay đổi giá trị object và array, dùng spread(...) để cập nhât state. Copy dữ liệu state cũ trước khi cập nhật.
-   Luôn sử dụng cách immutability để tránh xảy ra lỗi không đáng có.
    -   Bug UI , không cập nhật một cách chính xác điển hiển thị lên các giá trị mới nhất.
    -   Viết test rất khó.
    -   Không thể debug để xem giá trị state ở từng thời điểm khác nhau.
    -   Phá vỡ đi PATTERN mà redux đã xây dựng.

# Kiến trúc Redux

-   Store nơi lưu trữ tất cả state.
-   Store gồm nhiều REDUCERS.

## REDUCERS

-   Chỉ đơn giản là một `function` nhận vào hai tham số (state_hien_tai=init_value, action).
-   Function này được sử dụng để cập nhật state trong kho chung của chúng ta.
-   Function sẽ kiểm tra action là gì sau đó cập nhật lại các state tương ứng.
-   `Các quy ước trong reducers`
    -   Các state mới luôn được tính toán dựa vào state hiện tại.
    -   Phải luôn dùng `immutability` để thay đổi state.
    -   Không có bất kỳ một đoạn code bất đồng bộ nào trong function reducer như(Math.random, Date.now(), các side effects(gọi api), ...).Bởi vì các hành động này mỗi lần thực hiện sẽ trả về một giá trị khác nên ta không thể dự đoán được kết quả của state tiếp theo (Khi ta truyền cùng tham số đầu vào nhưng kết quả state mới lại khác nhau.)Reducers function phải là` PURE function`
-   Các quy ước trên giúp ta dự đoán được state khi biết logic bên trong function.(`Predictable`)

## ACTION

-   Chỉ đơn giản là một `object` gồm hai field:
    -   `type`: một string mô tả hành động là gì.
    -   `payload` - optional(có hoặc không):dữ liệu mang theo.
-   `Action creator`: function để tạo ra một action, giúp chúng ta không phải viết các object lặp đi lặp lại.

## DISPATCH

-   Cơ bản cũng là một `function` nhận tham số là object action hoặc Action creator định nghĩa ở trên.
-   Một cách duy nhất để cập nhật lại state trong store là sử dụng dispatch function.
-   Dispatch sẽ bắn đi một action từ phía UI.

# Các thành phần trong Redux kết nối với nhau như thế nào?

-   Khi thao tác một hành động nào đó trên UI -> sẽ dispatch action tương ứng với dữ liệu kèm theo nếu có -> action này sẽ được chuyển đến store và gọi hàm reducer tương ứng -> reducer sẽ lấy ra dữ liệu state hiện tại cùng với dữ liệu mới từ action tính toán và cập nhật lại state -> Trên `UI khi nghe tin state trên store thay đổi(như một event listner)` thì sẽ tiến hành re-render lại component với giá trị state mới.
