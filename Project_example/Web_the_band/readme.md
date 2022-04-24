# Reference:
+ https://www.w3schools.com/w3css/tryw3css_templates_band.htm

# Web the band
## 1. Phân tích dự án.
Các thành phần html chính trong dự án.
+ Header - Navigation.
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
        + Menu đa cấp.(ẩn hiện)
        + Header search: icon, navigation, cursor.
        + Position fixed.

### Slider




## 4. Hoàn thiện


# Note:
## Phim tat
1. General
    + ctrl + shift + L : select multi consor with the same word.
    + Alt + shift + arrow right: select word all consor. 
    + Alt + click: select multi consor.
    +Alt + arrow right: duy chuyen multi consor.
+ Phim shift them lua chon.

2. Phím tắt tạo thẻ nhanh trong file html.
    + header:
        + ul#nav>li*5>a + tab.


## Màu sắc
    + #000: đen
    + #fff: trắng 
    + #ccc: xám trằng.
    + #333: xám đen. 

## Format display:
    + List items:
        + list-item <=> block: nằm dọc.
        + inline-block: nằm ngang.
    + inline, block, inline-block.
        + inline: mặc định không lấý kích thước element(auto)
        + inline-block: lấý kích thước element theo bên ngoài(theo chiều dọc, chiều ngang theo nội dung )
        + Dạng inline-block vẫn có thuộc tính của inline, lấy kích thước chiều ngang bằng với nội dung bên trong.
        + Dạng block kế  thừa kích thước của thẻ chứa nó.(cả ngang và dọc.), giống như cho width, height: 100%.

        + Các thẻ dạng khối như div: mặc định sẽ có display block(block: kế thừa kích thước của thèn chứa nó(VD: icon search trong header))

    + float: right; đẩy các khối div sang bên phải, float sẽ làm mất tính block của element.


## Format chữ:
    + Chữ luôn nằm giữa line-height(phần chuột kéo.)
    + text-decoration: underline; gạch chân chữ.
    + text-transform: uppercase; đổi chữ thường -> hoa.

## Cách thực hiện các element ẩn hiện.
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

## Icon
+ Download các icon có sẵn css vào thư mục fonts.
+ Các them icon mẫu.
    + themify icon(230 icon)
    + fontawesome(nặng)

+ Search tên icon cần tìm, dùng tên class của icon đưa vô file html.
+ Dùng padding để đưa icon vào giữa khối.
+ Dùng cursor để  thay đổi icon chuột khi rê tới icon.

## Position
+ Thuộc tính position sẽ làm mất tính block của khối.(chiều ngang chỉ bằng với nội dung bên trong).
+ Thuộc tính position fixed sẽ đẩy vị trí element của nó lên trên mặt nhường lại vị trí của nó cho thèn xung quanh.Do đó để  tách nó ra riêng biệt cần margin cho những element xung quanh.



