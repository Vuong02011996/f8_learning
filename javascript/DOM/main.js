
console.log(document)
 // ---------------------------------------------------------------------------------------------
// Thêm element vào DOM
var boxElement = document.querySelector(".box");
boxElement.innerHTML = '<h1 title="heading">New Heading</h1>'
console.log(boxElement.innerHTML)

 // ---------------------------------------DOM CSS------------------------------------------------------
// DOM style
var boxElement = document.querySelector(".box");
// Cách 1
boxElement.style.width = "200px"
boxElement.style.height = "200px"
boxElement.style.backgroundColor = "red";
// Cách 2, style nhiều thuộc tính một lần, CSS dạng ni sẽ thuộc loại inline.
Object.assign(boxElement.style, {
                                width: "200px",
                                height: "200px",
                                backgroundColor: "green",
                                });

 // ------------------------------------------Class List Property---------------------------------------------------
// Class List Property
// Add: thêm class cho element
// contains: kiểm tra class có nằm thuộc element
// remove: xóa bỏ một class khỏi element
// toggle: có thì xóa, không có thì thêm class cho element
var boxElement = document.querySelector(".box");
console.log(boxElement.classList) // Trả về DOMTokenList, tất cả class của element
console.log(boxElement.classList.length) // trả về số lương class của element
console.log(boxElement.classList[0])
console.log(boxElement.classList.value)
//boxElement.classList.add('red', "blue", ...)
//boxElement.classList.contains('red')
//boxElement.classList.remove('red')
//boxElement.classList.toggle('red')
// tự động chuyển màu đỏ sau 3s
setInterval(() => {
boxElement.classList.toggle('red')}, 1000);

 // -----------------------------------------DOM EVENT----------------------------------------------------
 // DOM events
 // Attributes events: dùng thuộc tính của element lắng nghe sự kiện.
 // Assign event using the element node: gán event và sử dụng element node.

 // Cách 2:
 var h1Element = document.querySelector("h1");
// Gán cho sự kiện một function
 h1Element.onclick = function(e) {
 console.log(e.target);
 }

// Example with input text, checkbox, select
var inputElement = document.querySelector('input[type="text"]')
inputElement.onchange = function(e) {
// e.target là this - element node đang gọi (inputElement)
// onchange là sự kiện chỉ chạy khi có giá trị input thay đổi và blur focus chuột ở vị trí khác.
console.log(e.target.value);
}

var inputElement = document.querySelector('input[type="checkbox"]')
inputElement.onchange = function(e) {
// e.target là this - element node đang gọi (inputElement)
// onchange là sự kiện chỉ chạy khi có giá trị input thay đổi và blur focus chuột ở vị trí khác.
console.log(e.target.checked); // trả về True hoặc False
}

var inputElement = document.querySelector('select')
inputElement.onchange = function(e) {
// e.target là this - element node đang gọi (inputElement)
// onchange là sự kiện chỉ chạy khi có giá trị input thay đổi và blur focus chuột ở vị trí khác.
console.log(e.target.value); // trả về value được chọn
}
// Key up/ down
var inputElement = document.querySelector('input[type="text"]')
inputElement.onkeypress = function(e) {
    // onkeyup sự kiện khi nhất phím lên.
    // onkeydown sự kiện khi nhấn phím xuống.
    // onkeypress sự kiện khi bấm phím.
    console.log(e.which);
    switch(e.which) {
        case 27: // ESC
            console.log("Exit");
            break
    }
}

// Method preventDefault and stopPropagation
// Lấy tất cả thẻ a trong html
var aElements = document.links; // document.anchors phải đặt name cho thẻ a
console.log(aElements)

for (var i = 0; i < aElements.length; i++)
{
    aElements[i].onclick = function(e)
    {
        if (e.target.href.startsWith("https://ai.erp.clover.edu.vn/camera?limit=10&page=1&status=CONNECT"))
        {
            console.log(e.target)
            e.preventDefault(); // ngăn chặn hành vi mặc định của thẻ a là click chuyển trang.
        }
    }

}
// stopPropagation
document.querySelector("div").onkeypress = function(e) {
    console.log("DIV")
}

document.querySelector("button").onclick = function(e) {
//    e.stopPropagation();
    console.log("Click me");
}