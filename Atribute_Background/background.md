# Thuộc tính tạo nền
## Background-image
+ Sử dụng image làm nền.
+ Sử dụng background-size: 100%; để thay đổi kích thước nền.
+ Sử dụng background-repeat(thuộc tính: no-repeat, repeat-x, repeat-y, ...) để  dùng ghép các hình nền nhỏ - lớn.
+ Sử dụng function url() để hiển thị ảnh.
+ Có thể sử  dụng nhiều ảnh để làm background, dùng ảnh trong suốt - rgba().Dùng dấu phẩy nghen cách các ảnh, ảnh nào viết trước hiển thị trên cùng.
+ Dùng hàm linear-gradient(0deg, #333, #ccc) - (góc xoay, màu bắt đầu, màu kết thúc). để trải màu đều đều.
    + Hướng xoay.
    + 90: trái sang phải.
    + 180: trên xuống dưới.
    + 45: chéo

## Background-size với cover, contain.
+ Thay đổi kích thước nền không linh hoạt.(không dùng mặc định như pixel, %.)
+ contain: cố gắng lấy kích thước w hoặc h (ảnh) lớn hơn, chấp nhận khoảng trắng.
+ Cover: cố gắng lấy kích thước w hoặc h(ảnh) lớn nhất không chấp nhận khoảng trắng bằng cách cắt ảnh.
+ background-size: cover;

## Background position
+ Tùy chỉnh vị trí hình ảnh nền trong css.
+ Syn: background-position: top right; Viết một giá trị thì gía trị thứ 2 mặc định là center. background-posotion: 50px - cách lề  trái 50 pixel, căn trên dưới center.
+ Kết hợp: background-position: top 20px right 20px: cách trên 20, phải 20. 
+ background-position: 20px 50px; (trục x, y)cách trái 20, cách trên 50.

## Background shorthand:
+ background: ...
+ Dùng bằng 1 dòng.