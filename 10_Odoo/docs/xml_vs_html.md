# So sánh :
+ HTML là ngôn ngữ đánh dấu chủ yếu để hiển thị nội dung trên web, 
+ trong khi XML được sử dụng để lưu trữ và truyền tải dữ liệu cấu trúc giữa các hệ thống.
+ HTML: Cú pháp HTML chủ yếu dựa trên các thẻ có sẵn như <html>, <head>, <body>, vv. 
  Mỗi thẻ HTML thường có một ý nghĩa cụ thể trong việc hiển thị nội dung trên trình duyệt.
+ XML: XML cho phép người dùng tự định nghĩa các thẻ và cấu trúc tùy ý. 
  Ví dụ: <book>, <author>, <title>, vv. Cú pháp của XML phải được tuân theo cẩn thận với việc mở và đóng các thẻ phù hợp.
  
+ Giống: Ngôn ngữ đánh dấu thường có cú pháp tương tự, bao gồm thẻ và thuộc tính.
+ https://aws.amazon.com/vi/compare/the-difference-between-html-and-xml/
# XML - eXtensible Markup Language 
+ https://vi.wikipedia.org/wiki/XML
## Lịch sử 
+ XML (viết tắt từ tiếng Anh: eXtensible Markup Language, tức "Ngôn ngữ đánh dấu mở rộng") là ngôn ngữ đánh dấu với mục đích chung do W3C đề nghị(1990).
+ Mục đích chính của XML là đơn giản hóa việc chia sẻ dữ liệu giữa các hệ thống khác nhau, đặc biệt là các hệ thống được kết nối với Internet.

## Cú pháp

```<tên thuộc_tính="giá trị">nội dung</tên>```

+ Ví dụ:
  ```commandline
  <?xml version="1.0" encoding="UTF-8"?>
  <công_thức_nấu_ăn tên="bánh mì" thời_gian_chuẩn_bị="5 phút" thời_gian_nấu="3 tiếng">
   <title>Bánh mì cơ bản</title>
   <nguyên_liệu lượng="3" đơn_vị="ca">Bột mì</nguyên_liệu>
   <nguyên_liệu lượng="7" đơn_vị="gram">Men</nguyên_liệu>
   <nguyên_liệu lượng="1.5" đơn_vị="ca" trạng_thái="ấm">Nước</nguyên_liệu>
   <nguyên_liệu lượng="1" đơn_vị="thìa cà phê">Muối</nguyên_liệu>
   <chỉ_dẫn>
   <bước>Trộn tất cả các nguyên liệu với nhau và nhào kĩ</bước>
   <bước>Phủ một mảnh vải, ủ một tiếng đồng hồ trong phòng ấm.</bước>
   <bước>Nhào lại, đổ vào khuôn, cho vào lò nướng.</bước>
   </chỉ_dẫn>
  </công_thức_nấu_ăn>
  ```
+ Đọc https://vi.wikipedia.org/wiki/XML để hiểu cú pháp từng dòng.