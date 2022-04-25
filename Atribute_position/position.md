# Thuộc tính vị trí.
+ Thiết lập các vị trí cho element.
+ Có position thì top, left, right, bottom mới hoạt động. 
+ Element có thuộc tính position sẽ không chiếm content của khối cha bên ngoài nó mà nổi lên trên bề mặt.


## Relative - tương đối.
+ Phụ thuộc vào chính element của nó. lấy chính mình làm gốc tọa độ không phụ thuộc vào bên ngoài.
+ ````
    h1
    {
        position: relative;
        top: 100px;
        left: 100px;
    }
    ```

## Absolute
+ Phụ thuộc vào thẻ cha gần nhất có position.
+ Sử dụng khi một đối tượng(element) phụ thuộc vào một đối tượng khác.
```
{
    position: absolute;
    top: 0;
    right: 0; # góc trên bên phải của thẻ cha.
}
```

## Fixed
+ Sử dụng khi một đối tượng phụ thuộc vào cửa sổ trình duyệt.
+ Khi kéo lên xuống cửa sổ trình duyệt, đối tượng có position fixed vẫn dính vào cửa sổ, không bị mất đi.(header)
+ Đối tượng nào khai báo sau thì nổi lên trên.

## Sticky - bám dính.
+ Thử nghiệm, chưa hổ  trợ trên nhiều trình duyệt.