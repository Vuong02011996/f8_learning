# Kiểu dữ liệu
+ Number
+ String.
+ Boolean.
+ Null
+ undefined : var age.
+ Symbol: var id = Symbol('id'); unique

+ Phức tạp:
    + function: var myFunction = function() {
        ...
        myFunction();
    }
    + Object types:
        + var myObject = {
            name: "myName",
            age: 1,
            myFunction: function () {

            },
            ...
        }
        + var myArray = ["a", "b"]

+ Kiểm tra kiểu dữ liệu:
    + console.log("KDL:", typeof myArray)

## Toán tử so sánh phần 2(so sánh cả kiểu dữ liệu và giá trị.) .
+ So sánh bằng ===:
    +  var a = 1 == var b = '1'=> True .
    + var a = 1 === var b = '1'=> False .
+ So sánh khác !==.

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

# Toán tử  logical(&&, ||) và câu điều kiện if.
+ var result = "A" && "B": trả về "B"
+ var result = null && "B": trả về null.
+ Toán tử  && trong js xem từng biểu thức có nằm trong 6 giá trị False không, nếu có trả về false, nếu không qua vế  tiếp theo và trả về chính giá trị của biểu thức đó. Nếu tất cả biểu thức không nằm trong 6 giá trị sẽ trả về giá trị biểu thức cuối cùng.
+ ||: ngược lại chỉ cần có 1 giá trị khác 6 giá trị false thì sẽ trả về  ngay.

