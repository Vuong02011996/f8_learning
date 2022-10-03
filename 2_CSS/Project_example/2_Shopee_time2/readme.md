# Các kĩ thuật chính trong shoppe.
+ CSS tuyệt đối theo tiêu chuẩn BEM, muốn thay đổi thêm gì phải thêm class modifier của element đó để chỉnh sửa, không sửa lại class cũ làm ảnh hưởng đến element chỗ khác. Copy class block/element  thêm modifier.

## Nhìn design xác định các element của web.
    + Phần header, đâu là navbar.
    + Trong navbar , làm sao biết tách ra các ul riêng?
    + Chỗ nào cần dùng thẻ div để  dùng flex (thẻ đăng nhập, đăng ký)
## Navbar headder
    + Tạo background trải đều bằng: linear-gradient(0, #fe6433, #f53e2d)
    + Căn chỉnh center sử dụng display flex bị xuống hàng thì dùng display : inline-flex.
    + Khi căn chỉnh chiều cao icon ngang với chữ mà chiều cao số lẻ , icon số chẵn thì không thể  cân bằng được, ta đặt min-height cho số lẻ.(19px->20px)
    + Dùng thẻ span để chứa một thông tin hoặc thẻ khác để CSS riêng.

## Header QR
+ Biết cách nhìn những thành phần nào thì nằm chung một khối div riêng: app_store, google_store.
+ Những chỗ nào hover vào hiện link liên kết thì dùng thẻ a.
+ Sử dụng display flex với flex item là ảnh sẽ làm méo ảnh do đó nên thêm thẻ a ,.. ra bên ngoài ảnh làm flex-items.
+ Muốn ảnh nằm gọn trong kích thước khối div bên ngoài đặt w, h 100%.
+ Khi sử dụng position absolute(QR code) với widht >100%(cần khoảng cách như mép trên của thẻ cha) sẽ có một khoảng cách với thẻ cha, do đó ta cần xây dựng một cầu nối từ nó tới thẻ cha bằng lớp giả before của chính nó(header_qr::before).
+ Sử dụng keyframe để  tạo các chuyển động animation(QR code hiển thị từ từ).
+ Biết những chỗ nào phải xét chiều cao cố định(1 element đơn lẻ, không có gì bên trong), những chỗ nào chiều cao tự to ra khi có nhiều element vào.

## Header notity
    + Nhiều chỗ  hover vô sẽ không hiện lên, phải tìm cách re chuột đến chỗ  element đó , để hiện mới CSS được có thể visibility: hidden, opacity: 0;
    + Phải xác định phần hover hiện lên là con của thẻ nào.( thẻ li hoặc a đều được)
    + Muốn biết chỗ  đó dùng thẻ a hay không re hết xung quang xem có hiện cái link lên không. Nếu có bao bọc tất cả khối đó bằng thẻ a.

    + Khi dùng position để ẩn hiện đè lên cái khác, nên CSS position trước (top 100%) để dễ nhìn các items còn lại, không bị che rồi css kích thước nó sau
    + font-size, font-weight css vào đúng thẻ chứa chữ mới ăn(header không ăn).

    + Khi một img làm flex item thì chiều cao sẽ kế thừa chiều cross axis của thẻ container nên sẽ dẫn đến méo ảnh. Để giải quyết trường hợp này có thể bọc lại thẻ img bằng thẻ span hoặc dùng object-fit: contain;

    + Nhận diện đâu là nút bấm(Xem tất cả để dùng thẻ a , button hoặc div -btn)
    + Khi muốn thẻ a bấm được rộng phải padding trực tiếp vào thẻ a, nhưng nếu thẻ bên ngoài không tự động tăng kích thước(footer) thì dùng display flex cho thẻ bên ngoài hoặc display:block cho chính thẻ a.

    + Khi hover vào li cursor có hình bàn tay thì tất cả con của nó đều có hình bàn tay. Do đó xét lại cursor bằng default cho thành phần con bên trong.

    + user-select: none; css cho chữ -> không cho copy chữ.
    + Cách viết animation hiện ra từ nhỏ đến to(scale) ,từ góc phía trên chớ không phải tâm(top right).
    + Khai báo thêm thuộc tính will-change (will-change: opacity, transform;)để báo cho trình duyệt web biết và tối ưu chuyển động animation.

## Cách làm mũi tên chỗ hiện thông báo:
    + Dùng element giả before của header__notify.
    + Tạo border cho element giả hcn vs color: border-color: transparent transparent green transparent;
    + Dùng position absolute cho element giả, dịch chuyển top, right để đúng vị trí.
## Cách làm cầu nối ngăn cách của thẻ li vs khối thông báo bên dưới để hover không bị hụt.

## Biết trình duyệt web nào có sử dụng thuộc tính CSS mình dùng search(Tại sao phải sử dụng prefix?):
    + webkit prefix css.
    + caniuse.com 

## Form đăng kí đăng nhập
## Base modal.
    + Modal - overlay - body.
    + Cái nào có position thì nổi lên trên. Cả hai cái có position thì cái viết sau sẽ nổi lên. Dùng z-index cái nào lớn nhất thì nổi trên cùng.
    + Căn chỉnh body bằng flex, margin auto.
## Register/Login form
    + Mỗi thẻ input cần đặt trong một thẻ chứa để  group lại nếu thêm label ,...
    + Các element dùng chung như btn không nên đặt tên theo BEM trong form, không dùng lại được.
    + Btn css chung cho class btn còn các modifier(màu, to nhỏ, ...) thì thêm class css riêng.
    + Nhìn vùng padding để  biết những element nào cần chung một thẻ div.

    + Biết cách dùng display flex cho từng khối nhỏ, căn chỉnh items bên trong.
    + Dùng thẻ span để  làm dấu gạch ngăn cách magrin hai bên cho đơn giản.
    + Tạo animation hiện lên cho modal vs body.

## Header tìm kiếm 
+ Biết cách chia nhỏ từng phần để  làm.(3 phần: logo, body, cart)
+ Dùng biến đề  khi thay đổi chiều dài header các phần con tự thay đổi theo.
+ KTM: Sử dụng ảnh svg(ảnh màu) từ web:
    + Thẻ svg vẫn là một dạng thẻ img. Nhưng dạng vector zoom to nhỏ không ảnh bị vỡ.
    + Inspect -> Chuột phải thẻ svg -> copy -> copy outerHTML.
    + Lên web html beautiful pass qua để format -> copy về dán lại chỗ cần dùng.
    + Bỏ tên class viết sẵn, viết lại tên class theo mình.
    + Chỉnh sửa màu ảnh svg bằng inline css, thuộc tính fill="#fff" trong thẻ path.

+ Hầu hết chiều cao chiều rộng của element đều phải đo hoặc lấy từ design. Nên đầu tiên phải sét thuộc tính chiều cao chiều dọc cho element trước, chỉ một số trường hợp không cần set là:
    + Thẻ div bao bên ngoài, tự to lên khi kích thước element bên trong tăng lên.
    + Dùng flex 1.
    + Width của thẻ có tính block kế thừa chiều rộng của thẻ cha.

+ Có những thẻ cha border-radius bị thẻ con che, dùng overflow: hidden nhưng một số trường hợp thẻ cha có con là position absotute dùng overflow sẽ không hiện lên được. Do đó cần border-radius luôn cho thẻ con.

+ text-align có tác dụng với cả icon(cart), không nên margin hai bên.
+ Khi sử dụng display flex, không nên dùng width 100% mà dùng flex 1, để  chiều rộng các item khác chiếm hết rồi lấý phần còn lại.

+ Kĩ thuật mới: trong trường hợp icon muốn dịch chuyển xuống dưới mà không dùng margin top được(cả thẻ cha dịch chuyển), thì dùng position relative, top : 2px cho chính icon.

+ Header search history:
    + khi thẻ a nằm trong thẻ i mà thẻ a không có display block thì hover vô ngoài vùng thẻ a sẽ không bấm vô link đk. Do đó để thẻ a display: block.
    + KTM: CSS selector mới(p ~ ul: select tất cả thẻ ul đúng sau thẻ p) dùng để  chọn thẻ khi focus vào.
        ```.header__search-input:focus ~ .header__search_history```

+ Header no cart:
    + Không nên hover vô icon mà nên wraper vô một thẻ div.
    + Hover hiện lên có thẻ dùng ~ hoặc class cha/con.
    + Có thẻ giảm chiều rộng thẻ div(hover vùng nhỏ hơn) bằng display : inline-block, thêm padding.
    + Cách hiện các thẻ bên trong khi thêm class no-cart.
+ Header cart:
    + Cách làm số  thông báo bên trên icon. Dùng thẻ span, position absolute.
    + KTV: Những vùng cùng một màu thường chung một thẻ div.
    + KTV: Những item nằm trên hàng ngang có khoảng cách nên để trong div để dùng flex.


+ Note: Nên viết class chung cho các element hay dùng như mũi tên, cầu hover.(tránh lặp lại css code dài)

## Header UI/UX fix bug:
    + Xem qua giao diện hết một lần, list tất cả những bug cần sửa.
    + Sửa nhanh bằng inspect -> trỏ tới element cần sửa -> copy class -> vào VS ctl+F , sửa.
    + Những chỗ sửa thêm ảnh có ảnh hưởng đến nhiều element thì phải thêm class vào chỉ sửa duy nhất đến element đó.(Thêm border-top trước đăng xuất)
    + Trải nghiệm người dùng bấm vô logo trở về trang chủ(bọc thêm thẻ a vào logo , href="/")


# Container - Khung sản phẩm
## Danh mục category
+ KTM: không dùng margin top để dịch chuyển icon được  thì dùng position relative, top.
    position: relative;
    top: 2px;

+ KTM: cho chuyển động khi có sự thay đổi transition: right linear 0.1s(vị trí right thay đổi từ 0 -> -4px)

## Home filter 
+ KTM: Cách làm page num và button cho pagination.(thẻ a + icon)
+ Note: Khi marin cho khối thì màu background sẽ không ăn theo nên dùng padding thay thế.
+ KTM: làm select input trong base model.
+ Những thuộc tính đã css trong base như min-width của btn có thể  css lại bằng class mới.
+ KTH: Đẩy một flex item sang hẳn bên trái : margin-left: auto.
+ KTM: làm btn control pagination
    + Căn chỉnh icon chính giữa bằng display: flex và margin auto cho icon.
    + KTH: Khi biết chiều rộng và chiều cao khối cha thì chia đôi khối con bằng display flex cho khối cha và flex : 1 cho mỗi flex items.

## Home products:
+ Cách dùng row, col với responsive.
+ Cách làm img với div để thu nhỏ ảnh không bị méo.
    + Một số  trường hợp img nên dùng thẻ div và css inline cho BE...
+ KTV: những element ngang hàng thì 99% đưa vào một thẻ chứa div.
+ KTV: Các element nổi lên trên dùng position thì trong html phải cho bó nằm trong thẻ cha, để set vị trí hoặc hover vào.

+ Note: ảnh không hiển thị là do thẻ div chứa chưa có chiều cao hoặc chiều rộng.(dùng padding-top:100%)

+ KTM: cách làm dấu 3 chấm cho chữ khi chữ dài:
    + Có thể dùng JS, CSS, ..
    + CSS có hai cách: 1 cách cho nhiều hàng, 1 cách cho 1 hàng
    + Nhiều hàng dùng: line_height, giới hạn số dòng hiển thị, webkit-line-clamp: đặt số dòng muốn để dấu ...

+ KTM: gạch bỏ chữ, text-decoration: line-through;
+ KTM: align-items: baseline - cho chân hai dòng chữ nằm ngang bằng nhau.
+ Khi dùng flex các item nằm ngang, khi chữ , số dài ra sẽ chọc ra ngoài nên dùng flex-wrap để xuống dòng tránh trường hợp đó.

+ KTM: Kĩ thuật like và unlike bằng cách thêm và bỏ class trong BE.
+ Note: khi dùng thuộc tính bè đè bởi thư viện(display:none icon) thì thêm class cha chấm vô để ưu tiên hơn.
+ KTM: khi font-size icon tới giới hạn không thu nhỏ được nữa thì dùng thuộc tính zoom(1, 0.5), nếu không được nữa dùng transform: scale(0.7), transform-origin: right;

+ Làm nhãn yêu thích:
    + KTM: làm border hình tam giác quay lên 45 độ của thẻ yêu thích.(góc cuộn cuộn)
    + KTM: cách làm màu thẻ con thay đổi theo thẻ cha với currentColor.(màu góc cuộn cùng màu thẻ cha và tối hơn(filter: brightness(60%)))

+ Làm nhãn giảm giá: 
    + KTV: Những màu nhìn xuyên qua được(trong suốt thì dùng RGBA không dùng mã HEX)
    + Phần đuôi là hai tam giác hai bên chớ không phải border arrow mũi tên lên, vì màu của ảnh xuyên qua.

+ Hoàn thiện sản phẩm: 
    + KTV: Re chuột vô sản phẩm dịch chuyển lên một xíu, animation, bóng đổ thay đổi.

## Pagination

## Footer
+ KTM: Css chữ in text-transform: uppercase;

## Grid system layout 12 cột - BASE Responsive

+ Tổng kích thước 12 col là 100% => kích thước 2, 10 col, ... lấy kích thước % % 1col = 100/12

+ NT: Các col phải nằm trong row, row phải nằm trong grid. Một grid có thể có nhiều row, một row có thể có nhiều col.
+ NT: Khoảng trắng col 24px(nếu nhiều col có thể thay đổi con số này để cân đối hơn(10px)) trên PC.
    + row: margin-left, margin-right: -12px(bỏ phần padding cạnh đầu và cuối của cột đầu và cuối)
    + col: padding-left, padding-right: 12px;

## Resposive 
+ Copy thư việc grid.css vào link vào file html.
+ Tạo thêm file responsive.css vào để  CSS cho mobile tablet.
    + Sau ni dùng SASS, SCSS sẽ phân chia theo component sẽ rõ ràng hơn. Không phân chia theo cách ni.
+ Mở dev tool chọn toggle divice toolbar, chọn Ipad, Iphone(50,75%). Lướt qua giao diện trên tablet , mobile 1 lần. Bắt đầu HTML, CSS cho responsive.

### Header
+ Tạo các class hide-on-.. để ẩn các thành phần cần ẩn.(home-filter, header-navbar, ...)
+ Tính toán lại kích thước các thành phần sau khi ẩn(navbar vs header_search)

+ Xử lí bấm vô hiện ra bằng CSS xử  dụng input checkbox(icon search làm label trên mobile)

+ KTM: Khi item vượt quá chiều ngang muốn tạo thành thanh kéo ngang(mobile category) thì thêm max-width: 100%, overflow-x: auto;
    + Ẩn thanh scrollbar bằng psedo class -webkit-scrollbar.

+ KTM: chọn item li trong thẻ ul theo vòng lặp dùng nth-of-type `mobile_category__item:nth-of-type(3n+1)`

+ KTM: trên mobile khi bấm vào element sẽ có hightlight ẩn nó đi bằng thuộc tính `-webkit-tap-highlight-color: transparent;`


+ KTV: Kết thúc khi xem lại ta thấy chiều rộng website bằng với độ phân giải màn hình mà các item vẫn cách viền phải một khoảng hở ta phải dùng thêm overflow :hidden cho thẻ chứa toàn bộ website:
```
.app {
    overflow: hidden;
}
```
