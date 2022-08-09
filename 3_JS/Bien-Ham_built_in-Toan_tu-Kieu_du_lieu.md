# Biến
```
var fullName = "abc";
var age = 1;// DOM Event
btn.onclick = function() {
    // 1. Xử lí nhiều việc cùng lúc
    // Việc 1
    console.log("Việc 1")
    // Việc 2
    console.log("Việc 2")
    // Việc 3
    console.log("Việc 3")

    // 2. Lắng nghe/ Hủy bỏ lắng nghe.
    // Hủy bỏ lắng nghe sau 3s bằng các gán lại cho object một value rỗng
    // btn.onclick key object, value object function () {} .
    setTimeout(function() {
    btn.onclick = function () {}
    }, 3000);
}

```

# Hàm built-in
+ alert: hiển thị hộp thoại.
+ console:
    + console.log('a: ', a): in log ra console. = print.
    + console.warn()
    + console.error()

+ conform(): hộp thoại xác nhận.
+ prompt(): hộp thoại xác nhận in input.
+ setTimeout(function, time): cho function chạy sau một khoảng thời gian. Như sleep trong python.
+ setInterval(function, time): cách một khoảng thời gian function lại chạy một lần.

# Toán tử
## Toán tử sô học
+ Cộng: +, -, *, **(lũy thừa), /, %, ++, --(prefix, postfix);
## Toán tử gán
+ =, +=, -=, *=, /=, **=;
## Toán tử nối chuỗi
+ "Van" + " " + "Vuong" => Van Vuong.
## Toán tử so sánh.
+ ==, !=, >, >=, <, <=.
## Boolean.(true, false)
+ canBuyAlcolhol = age >= 18.
## If else.
+ false: 0, "", '', Nan, null, undefined.
## Toán tử logic
+ &&, ||, !
## Kiểu dữ liệu
+ Primitive-nguyên thủy: number, string, boolean, undefined, null, symbol.
+ Complex: function, object.