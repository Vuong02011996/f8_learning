# Note
## Có 3 cách sử  dụng css trong tài liệu html.
1. Internal: sử dụng cặp thẻ style.
2. External: liên kết với file css bên ngoài.
3. Inline: Sử dụng thuộc tính style của thẻ.
## Css selectors
+ CSS selectors là các cách chúng ta sử dụng để chọn ra các phần tử (elements) mà chúng ta muốn “style” cho chúng
    1. Sử dụng thuộc tính id(duy nhất) dùng dấu thăng(#) trong file css.
    2. Sử dụng thuộc tính class(một nhóm cần style giống nhau) dùng dấu chấm trong file css.
+ Một thẻ có thể có nhiều class, mỗi class cách nhau bởi khoảng trắng.
+ Có thể  css cho các thẻ con bên trong một class.
### Chú ý cú pháp gọi
    + Các class trên 1 thẻ dùng dấu chấm (.post-item.title)
    + Các class cha con dùng dấu cách rồi chấm(.post-item .title) 

## Độ ưu tiên trong css.
1. !important
2. Inline 1000
3. id 100
4. class  10
5. tag(element) 1
+ Internal = External (viết sau ưu tiên hơn)
+ Cộng điểm, càng nhiều điểm(chi tiết) càng ưu tiên.
## Sử dụng biến trong css để code linh hoạt khi thay đổi.(global or local)
+ dùng hàm var() để gọi biến.

## Các đơn vị trong css.
1. Absolute units
    + px:bị cố định khi thay đổi màn hình.
2. Relative units(phải dựa vào 1 thèn để thay đổi)
    + %: phụ thuộc vào thẻ cha trực tiếp.
    + rem: phụ thuộc vào font-size html.
        + Mặc định trình duyệt có font-size cho html là 16px.
        + nếu đặc 1 thẻ = 1rem = font-size của thẻ html <=> 16px(mặc định)
    + em: phụ thuộc thẻ có font-size gần nhất.
    + vw, vh(viewport width, height).
3. Chú ý các mặc định:
    + Các thẻ body, div có width mặc định là 100%, height auto.(phụ thuộc vào nội dung văn bản)
    + Nếu các thẻ cha có height auto thì thẻ con set % sẽ không có tác dụng.

## Loại bỏ margin mặc định.
```
* {
    margin: 0; /* Loại bỏ margin mặc định */
    padding: 0; /* Loại bỏ padding mặc định */
}
```
## Function trong css.
1. var() : đặt biến css.
2. linear-gradient()
3. rgba(): red, green, blue, alpha(trong suot)
4. rgb(): chọn màu.
5. calc(): tính toán pixel.
6. attr(): sử dụng chung với lớp giả(Pseudo classes), lấy giá trị thuộc tính.

## Pseudo class
+ syntax: css_selector:tên lớp giả(h1:hover)
+ Một số lớp giả hay dùng:
    + :root tham chiếu đến phần tử gốc file html.
    + :hover được kích hoạt thuộc tính khi rê chuột vào.
    + :active thuộc tính được kích hoạt khi bấm vào.
    + :first-child chọn lấy phần tử đầu tiên.(li)
    + :last-child chọn lấy phần tử cuối cùng.(li)

## Pseudo element
+ Sử dụng những phần tử hiển thị trên web mà không cần viết html mà chỉ cần viết css.
+ content là thành phần bắt buôc trong element giả.(có thể để string rỗng "") giúp element có thể tồn tại.
+ Mỗi element css(html, body, div, h1, ...) chỉ tồn tại 1 element giả(before, after, ...)
+ Syntax: element::element_gia{
    thuộc tính.
}
+ Các element giả hay dùng:
    + ::before
    + ::after
    + ::first-letter(chữ đầu tiên của element)
    + ::first-line(dòng đầu tiên)
    + ::selector (bôi chuộc vô element có element giả sẽ thay đổi thuộc tính element.) 


## Orther
+ Thẻ div mặc định đã để thuộc tính display:block;

