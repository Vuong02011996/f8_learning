# Switch - case
+ Xử lí một nhiệm vụ giống nhau cho nhiều điều kiện khác nhau.

```
var date = 2;
switch(date)
{
    case 2:
    case 3:
    case 4:
        console.log("Hôm nay là thứ 2, 3, 4");
        break;
    case 5:
        console.log("Hôm nay là thứ 5");
        break;
    default:
        console.log("không nằm trong tất cả trường hợp trên");
}
```
+ Từ khi gặp case đúng nếu không gặp từ khoá break ,switch-case sẽ chạy vào tất cả trường hợp phía sau(khác if else.) kể cả default.

# Cách dùng
+ Khi biết trước giá trị của điều kiện và có nhiều trường hợp cho điều kiện thì dùng switch-case.

# Toán tử 3 ngôi.
```
function getCanVoteMessage(age)
{
    return age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
}
```
