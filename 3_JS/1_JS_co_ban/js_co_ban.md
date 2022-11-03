# Khái niệm mới
## Kiểu dữ liệu 
+ Trong JS có 6 giá trị được hiểu là false khi qua boolean: false, 0 , ""(''), NaN, null, undefined. Còn lại đều là true
+ Muốn viết dấu ",' trong string thì thêm dấu \ đằng trước nó. var fullName = 'Son \'Dang';
+ Kiểu dữ liệu undefine: khai báo biến không gán giá trị var age;
+ KDL: Symbol có tính chất duy nhất hay dùng với id: var id = Symbol('id'); var id2 = Symbol('id'); id vs id2 khác nhau.
+ Object types có hai loại object và array. Đều dùng để chứa danh sách, object thì cần cặp key, value còn array thì không cần key vì key tự động sinh ra theo dãy số từ 0.
+ Kiểu Object có thể chứa field là function, array...

+ Kiểm tra kiểu dữ liệu bằng typeof: console.log(typeof a). Lưu ý typeof của kiểu null là object.

## Toán tử so sánh 3 dấu bằng(so sánh cả kiểu dữ liệu và giá trị.)
+ So sánh cả kiểu dữ liệu và giá trị 
+ So sánh bằng ===:
    + var a = 1 == var b = '1'=> (a == b) True .
    + var a = 1 === var b = '1'=> (a === b) False .
+ So sánh khác !== tương tự.
```
var a = '1'
var b = 1
<!-- a và b có dùng value là 1 chỉ khác KDL -->
```

## Toán tử  logical(&&, ||) bản chất cùng với if else.
+ var result = "A" && "B": toán tử  && trả về "B" (qua if sẽ chuyển "B" sang boolean là true - khác 6 kiểu false trong JS đã quy định)
+ var result = null && "B":toán tử  && trả về null.

+ Cách hoạt động: Toán tử  && trong js xem từng biểu thức có nằm trong 6 giá trị False không,
    + Nếu có `trả về false` dùng lại không kiểm tra tiếp,
    + Nếu không có qua vế  tiếp theo. Nếu tất cả biểu thức không nằm trong 6 giá trị sẽ` trả về giá trị biểu thức cuối cùng.`

+ ||: ngược lại chỉ cần có 1 giá trị khác 6 giá trị false thì sẽ trả về  ngay giá trị biểu thức đó.("A" || "b" trả "A" về ngay)


## Truthy và Falsy.
### Truthy
+ Trong js bất cứ kiểu dữ liệu nào khi chuyển sang boolean mà có giá trị true thì ta gọi đó là Truthy.
+ !! : là 2 lần phủ định trở thành khẳng định. Trong js đây là một tip để convert mọi kiểu dữ liệu sang Boolean. Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.https://labs.flinters.vn/none/ant-design-ngon-co-ma-khong-ngon/olean mà có giá trị false thì ta gọi giá trị đó là Falsy.
+ 6 giá trị Falsy trong Javascript: false, 0, '', "", null, undefined, NaN.
### Ngoại lệ:
+ khi bạn thử !!document.all sẽ trả về false.
+ document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined.
+ Khi typeof document.all sẽ trả về "undefined".

## Biểu thức chính quy trong chuỗi
+ ` /JS/g ` : tìm tất cả cụm JS trong chuỗi

## Các khái niệm mới trong lập trình JS
+ Hàm built-in: khi đến hàm built-in các dòng code phía sau sẽ không được chạy.
+ KDL: undefined, symbol,
+ Index mảng là số không âm.
+ Có hai các tạo string, số, array(dùng như python hoặc hướng đối tượng)
+ Tempate string ES6 dùng dâu ``.
+ So sánh 3 dấu bằng - giá trị và kiểu dữ liệu.
+ Truthy Falsy
+ Biểu thức chính quy.

`-----HAM-------`
+ Đối tượng arguments trong hàm. chứa tất cả các tham số  truyền vào của hàm.
+ Hàm trong JS chỉ return 1 giá trị duy nhất.
+ Có 3 loại function: Declaration, Expression, Arrow function.
+ có thể gọi declarationFunction trước khi địng nghĩa - khái niệm hosting
+ Polyfill: là một cách viết lại các hàm có sẵn dùng trong string hoặc array mà không hỗ trợ bởi các trình duyệt cũ.

`----------CallBack----------`
+ Tham số của hàm là một hàm khác(thường dùng expression function).
+ Cách hoạt động: function có hàm callback sẽ chạy lần lượt qua từng phần tử trong mảng rồi gọi hàm callback và truyền các giá trị vào hàm callback xử lí. Nếu đk bên trong hàm callback thỏai mãn sẽ kết thúc hàm callback và kết thức luôn hàm bên ngoài.
+ Nếu không truyền function cho hàm có tham số là callback sẽ báo lỗi : undefined không phải là function.

`-------------------------ES6---------------------`
+ Giải khối code dùng dấu 3 chấm `...`
+ Dấu ${} chỉ dùng được trong  dấu `...` không dùng được trong dấu chuỗi "", ''.