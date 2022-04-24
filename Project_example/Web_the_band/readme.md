# Reference:
+ https://www.w3schools.com/w3css/tryw3css_templates_band.htm


# Các bước khi thực hiện một project.
    + Phân tích.(phân tích giao diện - designer)
    + Dựng base(Xây móng)
    + Xây dựng từng thành phần dựa vào phân tích.
    + Hoàn thiện.(kiểm tra lại)

## Phân biệt và gọi tên các thành phần html.
+ Header(đầu trang)
+ Navigation - điều hướng.
    + Các thành phần bấm vô sẽ vào một trang khác.
    + Điều hướng đến các trang chính của websites.
    + Nút bấm duy chuyển trang.
    + Sub navigation.
+ Breadcrumb: chỉ cho bạn biết vị trí của bạn đang ở đâu trên websites.
    + Bạn đang ở trang nào, phần nào của trang, ...

+ Sidebar: một cái thanh nằm ở một phía nào đó, giống menu.
+ Slider: là các phần chạy chạy trượt trượt (ảnh, video, chữ, ...)
+ Content: nội dung chính websites.
+ Baner: ảnh quảng cáo.
+ Footer(chân trang): logo, địa chỉ liên hệ, ...


## 1. Phân tích dự án.
Các thành phần html chính trong dự án.
+ Header
+ Navigation.
+ Slider
+ Content
+ Footer.


## 2. Dựng base.
+ Tạo thư mục assets chứa css, img, js, ...
+ Dựng các thành phần chính đã phân tích ở trên vào file html.
+ Tạo file css, reset css, chuyển các thành phần chính vào.(phím tắt :D ), 


## 3. Xây dựng các thành phần bên trong.
+ Các câu hỏi để thực hiện css cho một element:
    + Vị trí.
    + Kích thước.(width, height)
    + Màu sắc.
    + Hình dáng(kiểu chữ, hình tròn, vuông, ..)
    + Các thành phần html con trong nó.


### Khối bao bọc main.
### Header
    + Css vị trí, kích thước, màu sắc, hình dáng cho header
    + Các element trong header:
        + Có 5 thẻ li(home, band, tour, contact, more), mỗi li là một thẻ a, dạng navigation.
        + Thẻ more có 3 thẻ li con.
        + Css cho các thành phần con.



## 4. Hoàn thiện


## Other:
### Phim tat
1. General
ctrl + shift + L : select multi consor with the same word.
Alt + shift + arrow right: select word all consor. 
Alt + click: select multi consor.
Alt + arrow right: duy chuyen multi consor.
+ Phim shift them lua chon.

2. Phím tắt tạo thẻ nhanh trong file html.
    + header:
        + ul#nav>li*5>a + tab.


### Màu sắc
    + #000: đen
    + #fff: trắng 
    + #ccc: xám.

### Nguyên tắc thức hiện.
    + Từ ngoài vào trong.
    + Từ trên xuống dưới.
    + Từ tổng quan đến chi tiết.

### Format display:
    + List items:
        + list-item <=> block: nằm dọc.
        + inline-block: nằm ngang.
    + inline: mặc định không lấý kích thước element(auto)
    + inline-block: lấý kích thước element.


### Format chữ:
    + Chữ luôn nằm giữa line-height(phần chuột kéo.)
    + text-decoration: underline; gạch chân chữ.
    


+ Các thẻ inline như a, img, không hiện kích thước ở Computed trond dev tools. chỉ có các thẻ dạng block(li, div, ...) mới hiển thị.


