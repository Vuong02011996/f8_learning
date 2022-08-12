# ES6
+ ECMAScript 6: là một quy chuẩn JS phiên bản thứ 6 ra đời 2015 bởi tổ chức ECMA International, là một tiêu chuẩn viết code.
+ Giống như văn bản được thông qua một điều luật mới.
# Lesson ES6
1. Let, const
2. Template literals(template string ${})
3. Multi-line string
4. Arrow function
5. Classes
6. Enhanced object literals
7. Default parameter values
8. Destructing
9. Rest parameters
10. Spead
11. Tagged template literals
12. Modules
13. Optional chaining 
# Let $ const
+ Dùng để khai báo biến như var.
+ So sánh Var vs Let/Const. khác nhau về Scope, Hosting.
+ So sánh Const vs Var/Let. khác nhau về assignment.
+ Sử dụng:
  + Code thuần : dùng var.
  + Dùng babel: const, let.
  + Khi định nghĩa biến và không gán lại biến đó dùng const, ngược lại dùng let và var.

# Template literals.(Template string)
+ Có thể cộng string bằng template string nội suy với ${}.
```commandline
var name = "name"
var string = `template string: ${name}`
var string = "template string: " + name.

// String nhiều line 
var line = "Line 1 \n
            Line 2 \n
            Line 3 \n"
// Template string chỉ cần enter.
const line = `line 1
              line 2
              line 3`
```

# Arrow Function 
+ Bỏ từ function và thêm dấu => sau (tham số).
+ Các loại định nghĩa function.
```commandline

// Cách 1: express function 
const express_function = fuction(log) {
    console.log(log)
}

// Cách 2: declare function 
function declare_fucntion(log) {
    console.log(log)
}

// Cách 3: arrow function 
const logger = (log) => {
    console.log(log)
}
logger("Message ...")
// -----------------------------------------------------------------
const sum = (a, b) => {
    return a + b;
}
const sum = (a, b) => a + b; // không dùng {} không cần dùng return
// -----------------------------------------------------------------
const logger = (log) => console.log(log) 
const logger = log => console.log(log)

// -----------------------------------------------------------------

console.log(sum(2,3));
```
+ Trong arrow function không dùng được this.
+ Arrow function không dùng được cho constructor.

# Classes 
```
// Dùng function 
function Course(name, price) {
  this.name = name;
  this.price = price;
  this.getName = function() {
    return this.name;
  }
}

// Dùng classes 
class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
}
```

# Default parameter values 
+ Định nghĩa các giá trị mặc định cho tham số.
+ Sử dụng cho các tham số không bắt buộc phải truyền vào cho hàm, thường boolean.

# Enhance Object literals 
1. Định nghĩa key value cho object ngắn gọn 
2. Định nghĩa method cho object
3. Định nghĩa key cho object dưới dạng biến . dùng [biến]

# Destructuring, Rest 
+ Phân rã, sử dụng với object và array `var [a, b, c] = array;`
+ Rest: array còn lại sử dụng với `[a, ...rest]`
+ Rest sử dụng trong tham số của hàm `...params`

# Spread 
+ Toán tử `...`: dùng để giải dấu [] của array hoặc {} của object.
+ Dùng để hợp nhất mảng hoặc object.
+ `var array3 = [...array1, ...array2]`
+ `(...)`: Rest dùng với destructuring, sử dụng trong đối số hàm.
+ `(...)`: Spread là giải array dùng với tham số hàm 
```commandline
var array = [1, 2, 3]
function logger(...rest)  { // ...rest lấy được tất cả đối số truyền vào 
          for(var i = 0; i < rest.length; i ++)
          {
                    console.log(rest[i])
          }
}
logger(...array)// spread
```

# Tagged template literals 
+ Gọi function qua cú pháp template literals(template string)
```commandline
function highlight([first, ...strings], ...value) {
          console.log(first) // Hoc lap trinh
          console.log(strings) // [tai, !]
          console.log(value) // [python, F8]
}
var brand = 'F8'
var course = "python"
const html = highlight`Hoc lap trinh ${course} tai ${brand}!`
```

# Modules
+ Dùng import, export
+ Module muốn import thì phải set type trong html là module. `<script type="module", src="./log.js"> </script>`
+ Một module chỉ export default 1 giá trị còn lại là để export thường.
+ Một module có thể `không có export default`, khi import không chỉ dùng với `destructuring {}`.

# Optional chaining.(`?.`)
+ Khi nghi ngờ một key nào trong object không tồn tại.
+ `obj?.obj2?.obj3?.`
