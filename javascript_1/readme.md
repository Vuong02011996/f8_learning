# Biến
```
var fullName = "abc";
var age = 1;
// DOM Event
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






