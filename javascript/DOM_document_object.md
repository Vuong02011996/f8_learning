# DOM là gì 
+ DOM: Document Object Model 
+ DOM HTML có 3 thành phần chính:
  + Element node.
  + Attributes node
  + Text node.
# Document Object
+ Document là đối tượng đại diện cho toàn bộ website.
+ Mọi thành phần của HTML DOM(element, attribute, Text) đều được truy xuất thông qua đối tượng document.
# Element Node  - Get Element Methods
## By ID
+ getElementById
+ Chỉ trả về 1 element.
## By Class
+ Trả về nhiều element: HTMLCollection
+ getElementsByClassName()
## By Tag Name(ít dùng)
+ getElementsByTagName('h1')
## By CSS Selector(Hay dùng)
+ Dùng như CSS selector.
+ Trả về 1 phần tử: nếu nhiều lấy cái đầu tiên
    + querySelector(".heading")
    + querySelector(".heading")
    + querySelector(".box .heading:nth-child(2)");
+ Lấy tất cả:
    + querySelectorAll(".heading")
    + Trả về NodeList.

## BY HTML collection
+ Chỉ một số thẻ dùng được.(a, form)

# DOM  Attribute
+ Thêm thuộc tính cho element
+ Tất cả những thuộc tính trong thẻ mở của element là DOM attribute.
```
var headingElement = document.querySelector("h1");
//  Cách 1 seter
headingElement.title = "Heading"
headingElement.id = "heading"
headingElement.className = "heading"

// Cách 2 
headingElement.setAtrribute("tên thuộc tính", "giá trị thuộc tính")

```

+ Lấy thuộc tính của element 
```
headingElement.getAtrribute("tên thuộc tính")
```

# DOM Text
+ Text node là tất cả những gì nằm trong thẻ tab.
+ Lấy Text node từ element node
```
var headingElement = document.querySelector("h1");
// seter
headingElement.InnerText = "New Heading"

// geter 
// Dùng InnerText: trả về giống như những gì nhìn thấy trên web
console.log(headingElement.InnerText) 

// Dùng textContent:  trả về tất cả những text node bên trong, kể cả khoảng trắng, xuống dòng, thẻ script, thẻ style, thẻ meta, ...
console.log(headingElement.textContent)
```
# Thêm element vào element in DOM - innerHTML, outerHTML
```
// innerHTML: lấy tất cả thẻ bên trong
var boxElement = document.querySelector(".box");
boxElement.innerHTML = "<h1 title="heading">New Heading</h1>"
console.log(boxElement.innerHTML)

// outerHTML: lấy chính từ element gọi outer(box)
// ghi đè luôn box thành span Test.
boxElement.outerHTML = "<span>Test</span>"
```

# DOM CSS(DOM style)
 + DOM style là một thuộc tính của element node chứa các thuộc tính của CSS(viết theo camelCase)
```commandline
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
```
# ClassList Property
+ add: thêm class cho element
+ contains: kiểm tra class có nằm thuộc element
+ remove: xóa bỏ một class khỏi element
+ toggle: có thì xóa, không có thì thêm class cho element
```commandline
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
```

# DOM events
+ [Các sự kiện DOM tham khảo ở đây](https://www.w3schools.com/jsref/dom_obj_event.asp)
+ Chú ý thêm chữ on trước mỗi sự kiện.
+ Attributes events: dùng thuộc tính của element lắng nghe sự kiện.(giống css inline, ít dùng)
+ Assign event using the element node: gán event và sử dụng element node.
```commandline
// Cách 1
<h1 onclick="mã JS> DOM Events</h1>
<h1 onclick="console.log(Math.random())> DOM Events</h1>

//Cách 2 
 var h1Element = document.querySelector("h1");
// Gán cho sự kiện một function
 h1Element.onclick = function(e) {
 console.log(e.target);
 }
```

## Method preventDefault and stopPropagation
+ preventDefault: ngăn chặn hành vi mặc định của thẻ html(link thẻ a)
```commandline
// Lấy tất cả thẻ a trong html
var aElements = document.links; // document.anchors phải đặt name cho thẻ a
console.log(aElements)

for (var i = 0; i < aElements.length; i++)
{
    aElements[i].onclick = function(e)
    {
        if (e.target.href.startsWith("https://ai.erp.clover.edu.vn/camera?limit=10&page=1&status=CONNECT"))
        {
            console.log(e.target) // aElements[i] sẽ bị lỗi vì console log sau chạy hết vòng for nên i đã vượt quá length aElements 
            e.preventDefault(); // ngăn chặn hành vi mặc định của thẻ a là click chuyển trang.
        }
    }
}
```
+ stopPropagation: ngăn chặn sự kiện nổi bọt của events. 







