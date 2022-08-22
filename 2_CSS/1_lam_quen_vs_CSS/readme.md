# Sử dụng CSS trong HTML
## Có 3 cách sử  dụng css trong tài liệu html.
1. Internal: sử dụng cặp thẻ style trong chính file html.
2. External: liên kết với file css bên ngoài, sử dụng thẻ link trong file html.
3. Inline: Viết luôn trong dòng code html sử dụng thuộc tính style của thẻ mở.
## Các thuộc tính CSS cần làm nhiều để nhớ.

# Css selectors - ID và class - Chọn phần tử html trong css
+ CSS selectors là các cách chúng ta sử dụng để chọn ra các phần tử (elements) mà chúng ta muốn “style” cho chúng: 
    1. Sử dụng id(duy nhất) dùng dấu thăng(#) trong file css.
    2. Sử dụng class(một nhóm thẻ cần style giống nhau) dùng dấu chấm trong file css.
+ Một thẻ có thể có nhiều class, mỗi class cách nhau bởi khoảng trắng.
+ Có thể  css cho các thẻ con bên trong một class.
## Chú ý cú pháp gọi
+ Khi thẻ có nhiều class ta dùng dấu chấm và nối tên class cho thẻ đó (.post-item.title) khi đó 
css nằm trong selector được nối bởi nhiều class sẽ được ưu tiên hơn.
+ Lựa chọn thẻ con nằm trong một thẻ khác, .selector-cha .selector-con giữa 2 selectors có một khoảng trằng - dấu cách (.post-item .title) 
+ Dùng dấu > để  selector thẻ con trực tiếp, không ăn các thẻ con bên trong.(#nav > li > a{})
+ Nên đi từ một id cha đến 1 class con để trang web khi lớn dần khỏi bị nhầm class.

# Css Priority - Độ ưu tiên trong css.
1. !important
2. Inline 1000
3. id 100
4. class  10
5. tag(element) 1(gọi bằng tên của thẻ)
6. Equal specificity - gọi một element 2 lần, css sau ưu tiên hơn
+ Internal = External (độ ưu tiên bằng nhau, viết sau ưu tiên hơn)
+ Cộng điểm, càng nhiều điểm(chi tiết) càng ưu tiên.

# Css varibale - Sử dụng biến trong css 
+ Để code linh hoạt khi thay đổi.(global or local)
+ Cú pháp: dùng hai dấu gạch ngang + tên biến (--tenbien: giá trị)
+ dùng hàm var() để gọi biến. var(--primary)

## Css unit - Các đơn vị trong css.
1. Absolute units(Đơn vị tuyệt đối)
    + Có các loại: px, pt, cm, mm, inch, pc.
    + Kích thước các element có đơn vị tuyệt đối sẽ không bị thay đổi, kể cả các yếu tố xung quanh tác động lên , kể cả màn hình hay nội dung bên trong element.

2. Relative units(Đơn vị tương đối - phải dựa vào 1 thèn để thay đổi)
    + Có các loại: %, rem, em, vw, vh, vmin, vmax, ex, ch.
    + Kích thước bị thay đổi khi kích thước của đối tượng phụ thuộc thay đổi.
    + %: phụ thuộc vào thẻ cha trực tiếp(thẻ chứa nó).
    + rem: phụ thuộc vào font-size được định nghĩa ở thẻ html(mặc định 16px).
        + Mặc định trình duyệt có font-size cho html là 16px.
        + Nếu đặc 1rem tương đương với font-size của thẻ html, 2rem tương đương với font-size thẻ html nhân đôi.
    + em: tương tự như rem nhưng phụ thuộc thẻ có font-size gần nhất chứa nó chứ không phải thẻ html.
    + vw, vh(viewport width, height). so sánh với kích thước màn hình.
        + 50vw: bằng 50% chiều rộng kích thước trình duyệt. 
        + 1vh: bằng 1% chiều cao kích thước trình duyệt. 
    + Trong thực tế sử dụng rem nhiều nhất vì chỉ phụ thuộc thẻ html dễ kiểm soát.(chỉ cần quan tâm đến font-size thẻ html).
3. Chú ý các mặc định:
    + Các thẻ body, div có width mặc định là 100%, height auto.(phụ thuộc vào nội dung văn bản)
    + Nếu các thẻ cha có height auto thì thẻ con set % sẽ không có tác dụng.Khi ấy thẻ con vẫn có height auto. Vì vậy để một thẻ có thể đặt height theo % thì thẻ nó phụ thuộc phải có một chiều cao mang tính cố định.

# Loại bỏ margin mặc định(div, body, h1-h6, ...).
```
* {
    margin: 0; /* Loại bỏ margin mặc định */
    padding: 0; /* Loại bỏ padding mặc định */
}
```
# Function trong css.
1. var() : đặt biến css.
2. linear-gradient()
3. rgba(): red, green, blue, alpha(trong suot), dùng để trộn màu
4. rgb(): trộn màu - màu đặc kết hợp RGB(0 -> 255)
5. calc(): tính toán pixel.
6. attr(): sử dụng chung với lớp giả(Pseudo classes), lấy giá trị của thuộc tính của một thẻ(vd: href của thẻ a)

# Pseudo class (:)
+ syntax: css_selector:tên lớp giả(h1:hover)
+ Một số lớp giả hay dùng:
    + :root tham chiếu đến phần tử gốc file html.
    + :hover được kích hoạt thuộc tính khi rê chuột vào.
    + :active thuộc tính được kích hoạt khi bấm vào.
    + :first-child chọn lấy phần tử đầu tiên.(li)
    + :last-child chọn lấy phần tử cuối cùng.(li)
    + :nth-child(1): trỏ thẳng vị trí item .(bắt đầu từ 1)

# Pseudo element (::)
+ Sử dụng những phần tử hiển thị trên web mà không cần viết html mà chỉ cần viết css.
+ content là thành phần bắt buôc trong element giả.(có thể để string rỗng "") giúp element có thể tồn tại.
+ Mỗi element css(html, body, div, h1, ...) chỉ tồn tại 1 element giả(before, after, ...)
+ Coi element giả như một element bình thường và css bình thường.
+ Syntax: element::element_gia{
    thuộc tính css: giá trị;
}
+ Các element giả hay dùng:
    + ::before
    + ::after
    + ::first-letter(chữ cái đầu tiên của element, thẻ h1)
    + ::first-line(dòng đầu tiên)
    + ::selector (sự lựa chọn, khi bôi chuột vào thì hiển thị css) 


## Orther

### Animation with keyframe
```
.chart-layout__item {
    width: 60px;
    color: #fff;
    text-align: center;
    height: var(--percent);
    background-color: #EF5122;
    align-self: flex-end;
    animation: grow_chart ease-in 0.5s;
}

@keyframes grow_chart {
    from {
        opacity: 0;
        height: calc(var(--percent) - 50%);
    }
    to {
        opacity: 1;
        height: var(--percent);
    }
}
```
+ Thẻ div mặc định đã để thuộc tính display:block;
+ href: # ở trang hiện tại , không để # reload lại trang hiện tại.


