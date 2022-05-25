# Document Object
+ Document là đối tượng đại diện cho toàn bộ website.
+ Mọi thành phần của HTML DOM(element, atribute, Text) đều được truy xuất thông qua đối tượng document.

# Get Element Methods
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

# DOM  Atrribute
+ Thêm thuộc tính cho element
```
var headingElement = document.querySelector("h1");
// Cách 1 seter
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
