# Các bước làm web có responsive
1. Làm giao diện hoàn chỉnh trên máy tính.
2. Sử dụng Toggle device toolbar để  soi các chỗ  cần sửa lại trên tablet, trên mobile.
    + Chữ sát viền.
    + Lệch
    + Vỡ ảnh, 
    + ...
3. Sau đó CSS lại vùng media query đối với những chỗ cần sửa. Tạo 1 file responsive.css ghi đè lại file css gốc(để sau)
    + Hiển thị bao nhiêu cột trên 1 hàng
    + Căn chỉnh lại chữ
    + Sửa chiều ngang thành dọc, inline -> block
    + ...

# Toggle device toolbar
+ Tablet: chọn Ipad, 50%, Online
+ Mobile: chọn Iphone 6/7/8 plus
+ Các thiết bị khác còn lỗi thêm media queries cho nó.

# Media Queries( Khái niệm quan trọng nhất trong responsive - câu truy vấn Khoanh vùng CSS được chạy tương ứng với chiều rộng màn hình)

## max-width: nhỏ hơn hoặc bằng giá trị mới chạy css bên trong
## min-width: lớn hơn hoặc bằng giá trị mới chạy css bên trong

Các giá trị bên dưới khi làm thực tế có thể du di. 
+ PC: min-width: >= 1024px
+ Tablet: >= 740px and < 1024px.
+ Mobile: < 740px.

```
/* PC */
@media (min-width: 64em (1024px)) {

			
}
/* Tablet and Mobile */
@media (max-width: 63.9375em(1023px)) {

}

/* Tablet */
@media (min-width: 46.25em (740px))  and (max-width: 63.9375em){
	
}

/* Mobile */
@media (max-width: 46.1875em) {
}
```




