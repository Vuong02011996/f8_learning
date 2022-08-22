# Thuộc tính tạo nền
## Background-image
+ Sử dụng image làm nền, thuộc tính background-image với function url() để hiển thị ảnh, có thể dùng nhiều url cách nhau bằng dấu, ảnh của url đầu tiên sẽ nằm lên trên.
+ Mặc định kích thước ảnh sẽ để nguyên khi hiển thị, sử dụng background-size để thay đổi kích thước ảnh(100% tương đương với kích thước của thẻ).
+ Mặc định ảnh sẽ repeat khi kích thước ảnh nhỏ hơn kích thước của thẻ, dùng background-repeat(thuộc tính: no-repeat, repeat-x(lặp lại theo chiều ngang), repeat-y, ...) thay đổi repeat , ứng dụng repeat để ghép các hình nền nhỏ - lớn.
+ Dùng hàm linear-gradient(0deg, #333, #ccc) - (góc xoay, màu bắt đầu, màu kết thúc). để trải màu đều đều.
    + Hướng xoay.
    + 90: trái sang phải.
    + 180: trên xuống dưới.
    + 45: chéo

## Background-size với cover, contain.
+ Thay đổi kích thước nền linh hoạt.(không dùng mặc định như pixel, %.)
+ contain: cố gắng lấy kích thước w hoặc h (ảnh) lớn hơn, chấp nhận khoảng trắng.
+ Cover: cố gắng lấy kích thước w hoặc h(ảnh) lớn nhất không chấp nhận khoảng trắng bằng cách cắt ảnh.
+ background-size: cover;
## Background origin:
+ Quyết định đổ image từ đâu: border, padding, hay content của thẻ.
+ Đổ màu nền : background-color chỉ đổ được tới phần padding. Không đổ  được vào phần margin. 
## Background position
+ Tùy chỉnh vị trí hình ảnh trong thẻ.
+ Syn: background-position: top right; Viết một giá trị thì gía trị thứ 2 mặc định là center. background-posotion: 50px - cách lề  trái 50 pixel, căn trên dưới center.
+ Kết hợp: background-position: top 20px right 20px: cách trên 20, phải 20. 
+ background-position: 20px 50px; (trục x, y)cách trái 20, cách trên 50.

## Background shorthand:
+ background: url() top center / cover no-repeat;
+ 
```
    background-image: url(/Project_example/Web_the_band/assets/img/slider/slider1.jpg);
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;


```