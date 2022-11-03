# DOM là gì 
+ DOM: Document Object Model 
+ Khi một trang web được tải nó nhận được một chuỗi html, chuỗi này sẽ dựa vào một quy chuẩn (DOM) để tạo ra mô hình dạng cây.
+ Quy chuẩn này do W3C tạo ra và mọi lập trình web phải tuân theo.

+ DOM HTML có 3 thành phần chính:
  + Element node.
  + Attributes node
  + Text node.

+ DOM không thuộc Javascript mà JS cung cấp một bộ công cụ để truy xuất đến mô hình DOM.

+ Document là đối tượng đại diện cho toàn bộ website. Là một biến lưu trữ toàn bộ chuỗi html của website. Do đó từ document ta có thể truy xuất đến toàn bộ các thành phần của website.
+ Mọi thành phần của HTML DOM(element, attribute, Text) đều được truy xuất thông qua đối tượng document.


# 1. Element - các cách truy xuất đến element trong DOM bằng JS

+ Chú ý cách trả về , trả về chính element hay các dạng khác. Các dạng khác phải thêm vòng for để lặp qua và get element.

## By ID
+ getElementById
+ Chỉ trả về 1 element.

## By Class
+ Trả về nhiều element: HTMLCollection - giống mảng chỉ không có các phương thức như map, filter, some, every, .. như mảng.
+ getElementsByClassName()
https://labs.flinters.vn/none/ant-design-ngon-co-ma-khong-ngon/
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

## By HTML collection
+ Chỉ một số thẻ dùng được.(a, form)
+ thẻ a phải có name

## Từ một node element cha có thể  truy xuất đến các element con, không nhất thiết từ document vào.
```    var box = document.querySelector(".box")
    console.log(box)
    var element_child = box.getElementsByTagName('li')
    console.log(element_child)
```


# 2. Attribute Node
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

# 3. Text Node
+ Text node là tất cả những gì nằm trong thẻ tab.
+ Lấy Text node từ element node
```
var headingElement = document.querySelector("h1");
// seter
headingElement.InnerText = "New Heading"

// geter 
// Dùng InnerText: trả về giống như những gì nhìn thấy trên web
console.log(headingElement.InnerText) 

// Dùng textContent:  trả về tất cả những text node bên trong, kể cả khoảng trắng, xuống dòng, nội dung bên trong: thẻ script, thẻ style, thẻ meta, ...
console.log(headingElement.textContent)
```
# Thêm element vào  trong một element trong HTML DOM - innerHTML, outerHTML
```
// innerHTML: truy xuất đến tất cả thẻ nằm bên trong thẻ gọi innerHTML.
var boxElement = document.querySelector(".box");
boxElement.innerHTML = "<h1 title="heading">New Heading</h1>"
console.log(boxElement.innerHTML)

// outerHTML: truy xuất chính từ element gọi outerHTML
// ghi đè luôn chính nó thành thẻ được seter.
boxElement.outerHTML = "<span>Test</span>"
```

# Hướng dẫn học node property
+ Mẹo: Đưa element node vào mảng để  xem được thuộc tính qua object


# DOM CSS(DOM style)
 + DOM style là một thuộc tính của element node chứa các thuộc tính của CSS(viết theo camelCase)

# ClassList Property
+ Đây là thuộc tính của element node.
+ add: thêm class cho element
+ contains: kiểm tra class có nằm thuộc element
+ remove: xóa bỏ một class khỏi element
+ toggle: có thì xóa, không có thì thêm class cho element

# DOM events(mouse, keyboard, ...)
+ [Các sự kiện DOM tham khảo ở đây](https://www.w3schools.com/jsref/dom_obj_event.asp)
+ Chú ý thêm chữ on trước mỗi sự kiện.
+ Attributes events: dùng thuộc tính của element lắng nghe sự kiện.(giống css inline, ít dùng)
+ Assign event using the element node: sử dụng element node get event và gán cho event một function để làm việc gì đó.
+ Tất cả sự kiện DOM event sẽ trả về từ khóa this, đây chính là node element đang gọi dom event.
+ Từ khóa this chính là element node
nên có thể sử dụng các thuộc tính và phương thức của một element node


# Method preventDefault and stopPropagation
+ preventDefault: ngăn chặn hành vi mặc định của thẻ html(link thẻ a)
// Lấy tất cả thẻ a trong html
var aElements = document.links; // document.anchors phải đặt name cho thẻ a
+ stopPropagation: ngăn chặn sự kiện nổi bọt của events. 
+ Propagation là việc các sự kiện khi xảy ra xong với chính nó sẽ tiếp tục thực hành vi đó lần lượt với tất cả thẻ cha bên ngoài (bột dưới nước nổi từ từ cho đến khi lên bề mặt)

# Event LISTENER: addEventListener, removeEventListener
+ Là một phương pháp khác có thể lắng nghe được các event trong DOM xảy ra.
+ Có tác dụng như DOM event nhưng tùy trường hợp sử dụng cái nào sẽ tiện hơn.
+ Sử dụng phương thức: addEventListener của element node.

## So sánh DOM event vs Event listener
+ Dùng DOM event khi:
    + Sử dụng với các công việc đơn giản.
    + Muốn lắng nghe một sự kiện nào đó và không có nhu cầu gỡ bỏ.
+ Event Listener:
    + Khi một sự kiện có nhiều công việc.
    + Khi muốn hủy bỏ lắng nghe một sự kiện nào đó.
    + Các callback nên viết ra hàm riêng để add, và remove dùng tên hàm cho dễ.





