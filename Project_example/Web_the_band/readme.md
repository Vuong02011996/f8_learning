# Reference:
+ [w3_demo](https://www.w3schools.com/w3css/tryw3css_templates_band.htm)

# Web the band
## 1. Phân tích dự án.
Các thành phần html chính trong dự án.
+ Header - Navigation, Icon.
+ Slider
+ Content
+ Footer.


## 2. Dựng base.
+ Tạo thư mục assets chứa css, img, js, ...
+ Dựng các thành phần chính đã phân tích ở trên vào file html.
+ Tạo file css, reset css, chuyển các thành phần chính vào.(phím tắt :D ), 


## 3. Xây dựng các element bên trong.
+ Phân tích từng element trước khi bắt thêm vào html và css cho nó.
    + Những yêu cầu cần thực hiện của element.
    + Điểm chung các element(nếu có.)
   
+ Các câu hỏi để thực hiện css cho một element:
    + Vị trí.
    + Kích thước.(width, height)
    + Màu sắc.
    + Hình dáng(kiểu chữ, hình tròn, vuông, ..)
    + Các thành phần html con trong nó.


### Khối bao bọc main.
### Header
+ Thực hiện css các yêu cầu chính cho header: vị trí, kích thước, màu sắc, hình dáng cho header
+ Các element trong header:
    + Có 5 thẻ li(home, band, tour, contact, more), mỗi li là một thẻ a, dạng navigation.
    + Thẻ a more có 3 thẻ li con.
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
## 4. Hoàn thiện
# Note:
## Vị trí, Display
### List items:
+ list-item <=> block: nằm dọc.
+ inline-block: nằm ngang, các element nằm trên 1 dòng.
### Inline, block, inline-block.
#### Inline
    + inline: mặc định không lấý kích thước element(auto), các element nằm trên 1 dòng.
    + Inline sẽ taọ khoảng cách nhỏ giữa các dòng.
#### Inline-block
    + inline-block: lấý kích thước element theo bên ngoài(theo chiều dọc, chiều ngang theo nội dung )
    + Dạng inline-block vẫn có thuộc tính của inline, lấy kích thước chiều ngang bằng với nội dung bên trong.
#### Block
    + Dạng block kế  thừa kích thước của thẻ chứa nó.(cả ngang và dọc.), giống như cho width, height: 100%.
    + Block: các element sẽ nằm ở các dòng liên tiếp nhau, không nằm trên 1 hàng.
    + Các thẻ dạng khối như div: mặc định sẽ có display block(block: kế thừa kích thước của thèn chứa nó(VD: icon search trong header))

### Postiion (fixed, absolute, relative)
+ Thuộc tính position sẽ làm mất tính block của khối.(chiều ngang chỉ bằng với nội dung bên trong)
+ Thuộc tính position sẽ đẩy vị trí element lên trên mặt nhường lại vị trí của nó cho thèn xung quanh.Do đó để  tách nó ra riêng biệt cần margin cho những element xung quanh.
+ Thuộc tính position relative và absolute dùng để  thực hiện các element có vị trí phụ thuộc với nhau.
### Using float
+ Sử dụng thuộc tính float và width cho chính element muốn thay đổi vị trí(sang ngang), chớ không dùng lên thẻ cha chứa nó.
+ float: right; đẩy các khối div sang bên phải, float sẽ làm mất tính block của element. Sử dụng khi muốn các khối div con nằm ngang trên một dòng.
+ Khi sử dụng float các khối div con sẽ nằm sang ngang nhưng bị tách ra khỏi div bao bọc nó, ta dùng thêm khối clear trong khối bao bọc để giải quyết vấn đề này. (<div class="clear"></div>), css  clear: both; hoặc dùng element giả after.
+ Element đang là inline(list items) dùng float sẽ chuyển sang block dùng được các thuộc tính của block. Display là block mới dùng được các thuộc tính: margin-top: -3px, ...

### Using flex căn chỉnh một item vô giữa
```
    display: flex;
    align-items: center;
    justify-content: center;
```

### Overflow
+ Overflow: hidden : Ẩn các element con nằm ngoài phạm vi của cha.
## Kích thước.
+ width: 33.333%;
+ Kĩ thuật padding + margin âm(boottraps) để căn chỉnh lề .(làm cho phần padding)
+ Các kiểu kích thước sẽ đi với position như:
    + width: px, %;
    ```
    position: absolute;
    /* left: 50%;
    transform: translateX(-50%); */
    width: 100%;
    bottom: 0;
    padding: 32px 32px ;
    ```
    + top, left, right, bottom.
    ```    
    /* vị trí */
    position: fixed;
    /* kích thước */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    ```
## Màu sắc
    + #000: đen
    + #fff: trắng 
    + #ccc: xám trằng.
    + #333: xám đen.

## Icon
+ Download các icon có sẵn css vào thư mục fonts.
+ Các them icon mẫu.
    + themify icon(230 icon)
    + fontawesome(nặng)
+ Search tên icon cần tìm, dùng tên class của icon đưa vô file html.
+ Sử dụng một tên class thứ 2 để css, phòng trường hợp dùng lại icon đã dùng.
+ Dùng padding để đưa icon vào giữa khối.
+ Dùng cursor để  thay đổi icon chuột khi rê tới icon.

## Bóng đổ 
    /* bóng đổ  cho họp ul, box-shadow
    0 0: offet bằng 0, trải đều,
    blur: 10px độ mờ tới 10px*/
    + Sử dụng box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
## Format chữ:
    + Chữ luôn nằm giữa line-height(phần chuột kéo.)
    + text-decoration: underline; gạch chân chữ.
    + text-transform: uppercase; đổi chữ thường -> hoa.
    + font-weight: 400; độ dày chữ.
    + font-size: 24px; size chữ.
    + font-style: italic; chữ nghiêng
    + letter-spacing: 4px; khoảng cách các chữ.
    + opacity: 0.6; độ mờ chữ.
    + line-height: 14px; khoảng cách các dòng chữ.
    + text-align: justify; căn chỉnh đoạn văn thẳng hàng ở đầu và cuối.
    + text-shadow: 0 0 1px #000; /* Thêm cái bóng cho chữ ở image */

## Button
```
    background-color: #009688;
    width: 100%;
    color: #fff;
    font-size: 15px;
    padding: 17px;
    margin-bottom: 16px;
    /* bỏ phần border dưới button */
    border: none;
    text-transform: uppercase;
```
+ Đặt tên class cho button có css riêng dùng để  viết javascript, css class riêng.
```
<button class="place_buy_btn js_btn_buy_tickets">Buy Tickets</button>
```
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


## Hiển thị ảnh 
### Hiển thị ảnh nền.
+ Có 2 cách:
    + Dùng thẻ img.(kích thước các ảnh phải bằng nhau nếu hiển thị nhiều ảnh)
    + Dùng div + background-image: không phụ thuộc vào kích thước ảnh.
+ Nguyên tắc phải hiển thị ảnh làm sa cho chiều rộng và chiều ngang vùng hiển thị luôn luôn tỉ lệ với kích thước ảnh để ảnh không bị vỡ.
+ Nên dùng background-position bằng cover hơn là % hoặc pixel.
+ Dùng thẻ img kích thước hình ảnh không tự resize theo kích thước thẻ cha chứa nó(width 33.333% place_item). Để xử lí vấn đề này, cho thẻ width bằng 100% cho thẻ img. 

### Hiển thị chữ trên ảnh nền.
+ Sử dụng position.
    + Cái nào cha position: relavite;
    + Con dùng position : absolute rồi canh vị trí cho nó.
+ Các cách dưa khối chứa chữ vào giữa:
    ```
        Cách 1:
        left: 50%;
        transform: translateX(-50%);
        Cách 2:
        left: 0;
        right: 0;
        Cách 3:
        width 100%;
    ```
+ Các thuộc tính xử lí ảnh.
    + border-radius: 4px; bo góc cho ảnh 

## Background
+ Đổ màu nền : background-color chỉ đổ được tới phần padding. Không đổ  được vào phần margin. 

## Modal:
+ Dùng position :fixed và kích thước toàn bộ màn hình để  phần modal đè lên tất cả.
+ Phần hiển thị lên trên gọi là contaner.
+ Để phần container căn chỉnh ở giữa model ta dùng kĩ thuật flexbox
```
    display: flex;
    /* căn chỉnh chiều dọc */
    align-items: center;
    /* căn chỉnh chiều ngang */
    justify-content: center;
```
+ Lớp mờ xung quang container gọi là overlay
### Tạo hiệu ứng cho container modal hiện từ từ ra.
    + animation: modalFadeIn ease 0.3s; tạo hiệu ứng cho container : keyFrame->  ease: nhanh dan ve giua cham dan o cuoi-> thoi gian
    + Dùng @keyframe:
        ```
        @keyframes modalFadeIn{
            from{
                opacity: 0;
                transform: translateY(-200px)
            }
            to{
                opacity: 1;
                transform: translateY(0)
            }
        }
        ```

### Sự kiện nổi bọt
    + Khi click vô toàn modal thì container bị đóng nên dùng stopPropagation để tránh click vô container cũng bị đóng container
    
        ```
        // close container khi click vùng overlay
        modal_tickets.addEventListener("click", hideBuyTickets)
        // Sự kiện nổi bọt, tránh việc bấm vô container cũng bị close contaier
        modal_container.addEventListener("click", function (event) {
            event.stopPropagation()
        })
        ```


## FORM
```
<form action="">
    <div class="row">
        <div class="col col_5">
            <input type="text" placeholder="Name" required class="form_control">
        </div>
        <div class="col col_5">
            <input type="mail" placeholder="Email" required class="form_control">
        </div>
    </div>
    <div class="row mt_8">
        <div class="col col_100">
            <input type="text" placeholder="Message" required class="form_control">
        </div>
    </div>

    <input type="submit" class="contact_submit mt_16" value="SEND">
</form>
```

## Xác định có dùng thẻ div bao quanh hay không
+ Nhìn vào phần padding các thành phần con bên trong, nếu chúng đều padding ra xung quanh 1 khoảng cách thì dùng thẻ div để dễ  padding, không phải padding từng element.

## Optimize
+ Xây dựng class chung dựa trên row and col theo hệ thống thiết kế grid system.

## Phim tat
1. General
    + ctrl + shift + L : select multi consor with the same word.
    + Alt + shift + arrow right: select word all consor. 
    + Alt + click: select multi consor.
    + Alt + arrow right: duy chuyen multi consor.
+ Phim shift them lua chon.

2. Phím tắt tạo thẻ nhanh trong file html.
    + header:
        + ul#nav>li*5>a + tab.

## Dev tools
+ màu cam: marign (tạo khoảng cách các khối)
+ Màu xanh lá chuối nhạt: padding(làm cho khối rộng ra)
+ Màu xanh dương nhạt: content của element(nội dung bên trong element)
+ Biến trong javascript có thể được truy xuất ở dev tool qua tab console.(buyBtns)
+ Có thể debug code js trên dev tools.(modal_tickets.classList.add("open"))