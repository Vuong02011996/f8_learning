# Các bước làm web có responsive
1. Làm giao diện hoàn chỉnh trên máy tính.
2. Sử dụng Toggle device toolbar để  soi các chỗ  cần sửa lại trên tablet, trên mobile.
    + Chữ sát viền.
    + Lệch
    + Vỡ ảnh, 
    + ...
3. Sau đó CSS lại phần media query đối với những chỗ cần sửa.
    + Hiển thị bao nhiêu cột trên 1 hàng
    + Căn chỉnh lại chữ
    + Sửa chiều ngang thành dọc
    + ...
# Media Queries( Khái niệm quan trọng nhất trong responsive - câu truy vấn Khoanh vùng CSS được chạy tương ứng với chiều rộng màn hình)

Các giá trị bên dưới khi làm thực tế có thể du di. 
+ PC: min-width: 1024px
+ Tablet: >= 740px and < 1024px.
+ Mobile: < 740px.

# 
```
/* PC */
@media (min-width: 64em) {

			
}
/* Tablet and Mobile */
@media (max-width: 63.9375em) {

}

/* Tablet */
@media (min-width: 46.25em)  and (max-width: 63.9375em){
	
}

/* Mobile */
@media (max-width: 46.1875em) {
}
```




