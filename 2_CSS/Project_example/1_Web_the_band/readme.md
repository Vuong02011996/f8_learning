# Reference:
+ [w3_demo](https://www.w3schools.com/w3css/tryw3css_templates_band.htm)

# Các bước thức hiện
## Phân tích các thành phần.  
Các thành phần html chính trong dự án(websites).
+ Header - Navigation, Icon.
+ Slider
+ Content
    + About
    + Tour
    + Contact
    + Image(map)
+ Footer.

## Dựng base - tạo project base.
+ Tạo thư mục assets chứa các file tĩnh css, img, video, font, js, ...
+ Tạo file css, viết reset css.
+ Viết các thành phần chính đã phân tích ở trên vào file html(chỉ tạo thẻ div bao bọc ngoài + tên thành phần chính).

## Xây dựng các element bên trong.
### Header
+ Thực hiện css cho header: vị trí, kích thước, màu sắc, hình dáng
+ Chú ý: các navigation có dạng nhiều phần tử giống nhau nên dùng ul, li.(có thể dùng div)
+ Các element trong header:
    + Có 5 thẻ li(home, band, tour, contact, more), mỗi li là một thẻ a, dạng navigation(không có hướng dẫn làm sao phân tích ra được cái ni?).
    + Thẻ a MORE có 3 thẻ li con.
    + Menu đa cấp.(ẩn hiện)
    + Header search: icon, navigation, cursor.
    + Position fixed.

### Slider
+ Hiển thị ảnh.
+ Chữ trên ảnh.(position)
+ Căn chỉnh, format ảnh, chữ.

### Content
+ Css phần content chung giống nhau cho cả 3 phần(about, tour, contact)
    + heading
    + sub heading
    + Căn chỉnh làm mờ chữ, space các chũ cái trong chữ, chữ nghiêng.
+ Phần about team.
    + Căn chỉnh đoạn văn.
    + Căn chỉnh vị trí , kích thước ảnh các thành viên, bo góc ảnh.
+ Phần tour:
    + Phần tour tickets.
        + Thẻ ul, li*3. border_bottom ở li.
        + Căn chỉnh màu cho text sold out, vị trí hình dáng cho số lượng vé.
    + Phần tour places:
        + Căn chỉnh vị trí, kích thước ảnh.(margin âm kết hợp với padding)
        + Format test: heading, time., desciption.
        + Căn chỉnh button but tickets: hover
    + Modal:
        + Vị trí kích thước modal(modal_tickets)
        + Container, animation container.
        + Java script, add and remove class open stopPropagation
### Footer
## Hoàn thiện

