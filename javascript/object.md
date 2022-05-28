# Object in JS
```
var myObject = {
    name: "myName",
    age: 20,
    getName: function ()
    {
        this.name; // this chính là myObject.
    }
}
```
+ Thêm phần tử vào object: myObject.new_element = "new_element"
+ Lấy một phần tử từ object: myOject.name hoặc myOject["name"], không có key trả về undefine.
+ Xoá một phần tử: delete myObject.name
+ Phần tử object có thể là function, key getName là hàm nên lúc gọi phải thêm () myObject.getName().

# Object(function) constructor(hàm tạo, hàm dựng, bản thiết kế cho đối tượng)
```
function User(firstName, lastName, avatar) {
    // thuộc tính.
    this.firstName = firstName,
    this.lastName = lastName,
    this.avatar = avatar,
    
    // phuong thuc
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User("Van", "Vuong", "avatar")
var user = new User("Van1", "Vuong1", "avatar")

// có thể thêm thuôc tính riêng cho từng đối tượng
author.title = "new title"
```

# Object protopyte(nguyên mẫu object, nguyên mẫu hàm)
+ Thêm thuộc tính hoặc phương thức vào hàm dựng từ bên ngoài bằng prototype

```
User.className = "F8" // không hoạt động
User.prototype.className = "F8"
User.prototype.className = function () {
    return this.className; // this ở đây là đối tượng nào gọi tới phương thức này.
}
```

# Object Date
```
var date = Date(); // get date kiểu string không sử dụng được các phương thức của Date
var date = new Date();
date.getfullYear();
date.getHours();
...
```
# Math object
+ Math.PI
+ Math.round(1.3) : làm tròn 1, 1.5 = 2
+ Math.abs(-4): 4
+ Math.ceil(): chỉ làm tròn trên 4,1 = 5.
+ Math.floor(): chỉ làm tròn dưới 4,99 = 4.
+ Math.random(): random một số float  -> 1.
+ Math.min(1, 2, 1, 3): 1
+ Math.max(1, 2, 1, 3): 3


