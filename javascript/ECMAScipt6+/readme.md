# ES6
+ ECMAScript 6: là một quy chuẩn JS phiên bản thứ 6 ra đời 2015 bởi tổ chức ECMA International, là một tiêu chuẩn viết code.
+ Giống như văn bản được thông qua một điều luật mới.
+ 
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


