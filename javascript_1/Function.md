# Khái niệm hàm.
```
function tenHam()
{
    // code
    alert("Hello");
}
```

// Gọi hàm, dùng toán tử  call () sau tên.
tenHam();

# Tham số  trong hàm.
+ Đối tượng arguments.(chỉ được định nghĩa bên trong hàm.)
+ arguments: là một array.
```
function writeLog()
{
    console.log(arguments);

    for (var param of arguments)
    {
        console.log(param);
    }
}

writeLog("log1", "log2");

```

+ Tempalate string: dùng để nối chuỗi với biến `${param} - `

# Return trong hàm.
+ Hàm không có return mặc định trả về  undefine.

# Hiểu hơn về  hàm.
+ Hàm cùng tên : hàm định nghĩa sau đè lên hàm định nghĩa trước.
+ Định nghĩa hàm trong hàm: phạm vi sử dụng của hàm chỉ nằm trong hàm.

# Các loại function:
+ Declaration function: bắt buộc có tên, có thể gọi trước khi định nghĩa(hosting)
+ Expression function: có thể đặt tên hoặc không, không gọi đk trước khi định nghĩa.
        ```
        var show = function(){

        }
        setTimeout(function(){

        })
        ```
+ Arrow function.
