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
    + Nếu có trả về false dùng lại không kiểm tra tiếp,
    + Nếu không có qua vế  tiếp theo và trả về chính giá trị của biểu thức đó. Nếu tất cả biểu thức không nằm trong 6 giá trị sẽ trả về giá trị biểu thức cuối cùng.

+ ||: ngược lại chỉ cần có 1 giá trị khác 6 giá trị false thì sẽ trả về  ngay.


## Truthy và Falsy.
### Truthy
+ Trong js bất cứ kiểu dữ liệu nào khi chuyển sang boolean mà có giá trị true thì ta gọi đó là Truthy.
+ !! : là 2 lần phủ định trở thành khẳng định. Trong js đây là một tip để convert mọi kiểu dữ liệu sang Boolean. Thêm !! phía trước các giá trị truthy sẽ luôn trả về true.
### Falsy
+ Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.
+ 6 giá trị Falsy trong Javascript: false, 0, '', "", null, undefined, NaN.
### Ngoại lệ:
+ khi bạn thử !!document.all sẽ trả về false.
+ document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined.
+ Khi typeof document.all sẽ trả về "undefined".

## Biểu thức chính quy trong chuỗi
+ ` /JS/g ` : tìm tất cả cụm JS trong chuỗi