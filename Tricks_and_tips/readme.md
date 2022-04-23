# Note
## Các cách căn giữa một items trong box,
+ Căn giữa theo chiều ngang.
    + text-align: center; css thuộc tính này vào chính element hoặc box, vào box vì css có tính kế thừa thuộc tính của thèn con với thèn cha.
    + Thuộc tính nào kế thừa muốn biết search trên w3school.

+ Căn giữa theo chiều dọc.
    + Sử dụng thuộc tính line-height: 100px; kích thước bằng kích thước của box.
    + line-height là phần bôi đen chuột của text trên màn hình.

+ Sử  dụng display: flex; trong box cùng với margin: auto; trong element.Có thể căn chỉnh nhiều element trong box cùng một lúc.

+ Sử dụng display: flex; cùng với algin-items: center; justify-content: center; trong box. Có thể căn chỉnh nhiều element linh hoạt dựa vào justify-content: space-around/space-between/...;

+ Sử dụng position vùng với top, transform.
+ Căn giữa thang dọc ngăn cách dính với element.

## Hiển thị ảnh dự phòng khi gặp lỗi. 
+ Dùng thẻ img trong body hoặc dùng div + background-image để  hiển thị ảnh.
+ Search ảnh placeholder.
+ Dùng onerror với thẻ img hoặc các thẻ load file.
+ Trong div dùng nhiều url trong background-images.