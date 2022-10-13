# Khái niệm hàm.
+ Có hai loại hàm:
    + Hàm built-in
    + Hàm tự định nghĩa.

+ Tính chất:
    + Không thực thi khi định nghĩa
    + Sẽ thực thi khi được gọi.
    + Có thể nhận tham số
    + Có thể  trả về 1 giá trị.

+ Tạo hàm: function + tên hàm + () + {}.

```
function tenHam()
{
    // code
    alert("Hello");
}
```

+  Gọi hàm, dùng toán tử  call: () sau tên.
tenHam();

# Tham số  trong hàm.
+ Là giá trị truyền vào khi gọi một function.
+ Có thể truyền bất cứ KDL nào của JS vào.
+ Một function có nhiều tham số, ta truyền đối số nào thì sử dụng tham số đó, không thì tham số đó không được sử dụng. không lỗi.

## Đối tượng arguments trong hàm
+ Là đối tượng (biến) chứa tất cả tham số được truyền vào của hàm.
+ Đối tượng arguments.(chỉ được định nghĩa bên trong hàm bên ngoài hàm gọi sẽ lỗi)
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
+ Có thể trả về bất cứ kiểu dữ liệu nào.
+ JavaScript doesn't support functions that return multiple values

# Hiểu hơn về  hàm.
+ Hàm cùng tên : hàm định nghĩa sau đè lên hàm định nghĩa trước.
+ Định nghĩa hàm trong hàm: cũng như định nghĩa biến trong hàm, phạm vi sử dụng chỉ nằm bên trong hàm được định nghĩa.

# Các loại function:
+ Declaration function: bắt buộc có tên, có thể gọi trước khi định nghĩa(hosting)
+ Expression function: có thể đặt tên hoặc không, không gọi đk trước khi định nghĩa. Đặt tên chỉ có mục đích dễ hiểu chớ không goi lại được.
    ```
    var show = function(){

    }
    setTimeout(function(){

    })
        ```
+ Arrow function.
