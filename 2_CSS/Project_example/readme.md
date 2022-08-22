# Các bước khi thực hiện một project.
1. Phân tích.(phân tích giao diện - designer) để biết phải làm gì rồi mới bắt tay vào làm.
2. Dựng base(Xây móng)
3. Xây dựng từng thành phần dựa vào phân tích.
4. Hoàn thiện.(kiểm tra lại)

# Các nguyên tắc thực hiện một websites.
    + Từ ngoài vào trong.
    + Từ trên xuống dưới.
    + Từ tổng quan đến chi tiết.

# Phân tích - rất quan trọng không thể bỏ qua bước này.
Xem websites gồm những thành gì. Sau đó code từng thành phần là được.
## Để phân tích được một trang web phải biết gọi tên các thành phần của nó.
1. Header(đầu trang)
2. Navigation - điều hướng.
    + Các thành phần bấm vô sẽ vào một trang khác.
    + Điều hướng đến các trang chính của websites.
    + Nút bấm duy chuyển trang.
    + Sub navigation.
3. Breadcrumb(map): chỉ cho bạn biết vị trí của bạn đang ở đâu trên websites, Bạn đang ở trang nào, phần nào của trang, ...

4. Sidebar: một cái thanh nằm ở một phía nào đó, không quan tâm bên trong nó chứa gì(danh mục, sub-navigation, ..).
5. Slider: là các phần chạy chạy trượt trượt (ảnh, video, chữ, ...)
6. Footer(chân trang): thường cuối trang web(logo, địa chỉ liên hệ, ...)

7. Content: nội dung chính websites, không có một hình thái đặc thù nào.
8. Baner: ảnh quảng cáo.
9. Modal.

# Xây dựng các element bên trong.
+ Phân tích từng element trước khi bắt thêm vào html và css cho nó.
    + Những yêu cầu cần thực hiện của element.
    + Điểm chung các element(nếu có.)
   
# Các câu hỏi để thực hiện css cho một element:
    + Vị trí.
    + Kích thước.(width, height)
    + Màu sắc.
    + Hình dáng(kiểu chữ, hình tròn, vuông, ..)
    + Các thành phần con trong nó.

# Cách thực hiện các element ẩn hiện.
    + B1: Cho hiện lên thực hiên css hoàn chỉnh.
    + B2: Cho ẩn đi.
    + B3: Thực hiện rê chuột vào hiện lên.
        + Rê vào đâu(thẻ cha)
        + Hiện cái gì(thẻ con.) 
        + Rê vô li hiện subnav.
        ```
        #nav li:hover .subnav{
            display: block;
        }
        ```
    + Các thẻ inline như a, img, không hiện kích thước ở Computed trond dev tools. chỉ có các thẻ dạng block(li, div, ...) mới hiển thị.