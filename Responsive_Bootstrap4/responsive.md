# Giới thiệu
+ Thay đổi: dùng CSS thay đổi hình ảnh, cỡ chữ , bút bấm, ...thay đổi font-size, width , height.
+ Ẩn hiện các thành phần theo kích thước cho phù hợp.

+ Cách chú ý khi làm Responsive
    + Các chạm như radio, checkbox cho to hết thẻ div để dễ  bấm.
    + Các button(quan trọng): cho dài hết màn hình điện thoại cho dễ bấm.
    + Các navbar ẩn đi, cho một icon menu bấm vô mới hiện ra 
    + Header search ẩn đi, cho icon search bấm vô mới hiện ra.
    + Nhiều sản phẩm cho hiện ít lại.

# Toggle device toolbar
+ Tablet: chọn Ipad, 50%, Online
+ Mobile: chọn Iphone 6/7/8 plus
+ Các thiết bị khác còn lỗi thêm media queries cho nó.
+ Chú ý % để 100% mới đúng thực tê trên mobile.
+ Nút xoay màn hình.

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

# View port, @media, breakpoint 
## Thẻ meta viewport
+ Thẻ meta viewport: giúp định nghĩa khai báo nhiều thông tin, tùy chọn nhiều tham số.
+ Dùng width: device-width, initial-scale: 1.0
+ Dấu chấm ! khi tạo file HTML đã tự tạo thẻ này :). 

## Media Queries( Khái niệm quan trọng nhất trong responsive - câu truy vấn Khoanh vùng CSS được chạy tương ứng với chiều rộng màn hình)

+ Có thể dùng thẻ link thuộc tính media để  viết CSS riêng cho từng device thì bên trong không cần dùng @media. Hoặc viết chung vô một file responsive thì thêm @media bên trong để phân chia vùng CSS cho các device.

+ Cú pháp:
```
@media not|only mediatype and (mediafeature and|or|not mediafeature) {
    CSS code.
}
```
+ Mediatypes: print(chuột phải print-máy in), screen, speech, all(default)
+ Mediafeatures: min-width, max-width. 

+ Chú ý IE < 9(if lt IE 9) thì thêm command script dòng này.
```
https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js
```

### max-width: nhỏ hơn hoặc bằng giá trị mới chạy css bên trong
### min-width: lớn hơn hoặc bằng giá trị mới chạy css bên trong

## Breakpoints: Các giá trị bên dưới khi làm thực tế có thể du di. 
+ PC: min-width: >= 1024px
+ Tablet: >= 740px and < 1024px.
+ Mobile: < 740px.

## File responsive tham khảo
+ Sử dụng em là ngon nhất(hỗ trợ trên nhiều trình duyệt không bị lỗi).(1em = 16px)

```
/* PC */
@media (min-width: 64em (1024px)) {

			
}
/* Tablet and Mobile */
@media (max-width: 63.9375em(1023px)) {

}

/* Tablet */
@media (min-width: 46.25em (740px))  and (max-width: 63.9375em(1023px))){
	
}

/* Mobile */
@media (max-width: 46.1875em(739px)) {
}
```

# Thực hành nhỏ: Responsive Navbar không dùng JS
# Grid System 
# Áp dụng vào thực tế
# Responsive web Shopee 

# Note
+ Một trang web nên hạn chế download file nhiều từ bên ngoài để load sẽ châm nên responsive nên viết vào một file css thôi và dùng @media.

+ Có thể xem các design layout mẫu trong trang collectui.com 