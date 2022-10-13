# Xem lại video if else vs logical.
# Các chú ý khi làm project (copy lại html) sử dụng thư viện.
+ Nắm cấu trúc file html và các chức năng chính trước khi phân chia component 
+ Cách nội suy gọi function các component vào trong App(), copy các view html vào trong từng component tương ứng.
+ Sau khi copy xong Views ta phân tích các logic để  làm chức năng.

+ Làm những công việc cần làm trước khi vào chi tiết chức năng:
    + Xây dựng Store để lưu dữ liệu.(Tạo init trong reducer vài dữ liệu để test trước)
    + Thiết lập chức năng render để view lên dữ liệu từ Store test trước.
    + Rồi đến các chức năng như thêm , sửa , xóa, ...

+ Mỗi component phải import thèn connect để lấy dữ liệu Store ra cho component đưa ra View.