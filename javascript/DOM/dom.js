
// So sánh Sử dụng DOM event vs Event Listener
// 1. Xử lí nhiều việc khi 1 event xảy ra
// 2. Lắng nghe/ Hủy bỏ lắng nghe
var btn = document.getElementById("btn")
console.log(btn)

//// Using DOM Event
//btn.onclick = function() {
//    // 1. Xử lí nhiều việc cùng lúc
//    // Việc 1
//    console.log("Việc 1")
//    // Việc 2
//    console.log("Việc 2")
//    // Việc 3
//    console.log("Việc 3")
//
//    // 2. Lắng nghe/ Hủy bỏ lắng nghe.
//    // Hủy bỏ lắng nghe sau 3s bằng các gán lại cho object một value rỗng
//    // btn.onclick key object, value object function () {} .
//    setTimeout(function() {
//    btn.onclick = function () {}
//    }, 3000);
//}

// 2. Using Event Listener
function viec1() {
    console.log("Việc 1");
}
function viec2() {
    console.log("Việc 2");
}

btn.addEventListener("click", viec1); // Nhận 2 đối số (tên event, callback)
btn.addEventListener("click", viec2); // Nhận 2 đối số (tên event, callback)

// 2. Lắng nghe/ Hủy bỏ lắng nghe.
setTimeout(function () {
    btn.removeEventListener("click", viec1)
}, 3000);
