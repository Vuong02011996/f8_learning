# Thuộc tính vị trí.
+ Thiết lập các vị trí cho element(khác vs background-position).
+ Dùng trong các giao diện có một element nổi lển trên bền mặt của element khác.Element có thuộc tính position sẽ không chiếm content của khối cha bên ngoài nó mà nổi lên trên bề mặt.
+ Có position thì các thuộc tính top, left, right, bottom mới hoạt động. 

## Relative - vị trí tương đối.
+ Phụ thuộc vào chính element của nó. lấy chính mình làm gốc tọa độ để duy chuyển không phụ thuộc vào bên ngoài.
+ ````
    h1
    {
        position: relative;
        top: 100px;
        left: 100px;
    }
    ```

## Absolute - vị trí tuyệt đối
+ Cách dùng: Khi một layout có một đối tượng nằm trong một đối tượng khác và mình cần di chuyển đối tượng con này xung quanh đối tượng cha đó.
+ Phụ thuộc vào thẻ cha gần nhất có position lấy vị trí thẻ đó làm gốc tọa độ di chuyển.
```
{
    position: absolute;
    top: 0;
    right: 0; # góc trên bên phải của thẻ cha.
}
```
+ ![image](Absolute_position.PNG)
+ Cái chuông là thẻ cha chứa đối tượng thông báo, vị trí đối tượng thông báo nằm phía dưới cái chuông.

## Fixed - vị trí phụ thuộc vào khung trình duyệt.
+ Sử dụng khi một đối tượng phụ thuộc vào cửa sổ trình duyệt.
+ Khi kéo lên xuống cửa sổ trình duyệt, đối tượng có position fixed vẫn dính vào cửa sổ, không bị mất đi.(header)
+ Đối tượng nào khai báo sau thì nổi lên trên.

## Sticky - vị trí bám dính phụ thuộc vào khung trình duyệt.
+ Thử nghiệm, chưa hổ  trợ trên nhiều trình duyệt.
+ Cách xem thuộc tính có hổ trợ trên trình duyệt nào.
    + caniuse.com 
    + search tên thuộc tính.
+ Ứng dụng làm các menu, header bám dính.

# Note:
+ Khi một đối tượng phụ thuộc vào một đối tượng khác(lấy đối tượng đó làm gốc tọa độ) dùng absolute.
+ Khi một đối tượng phụ thuộc vào của sổ trình duyệt(lấy của sổ trình duyệt làm gốc tọa độ) dùng fixed.