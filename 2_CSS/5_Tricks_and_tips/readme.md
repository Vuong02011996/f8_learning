# Note
## Các cách căn giữa một items trong box,
+  Cách1 :Dùng text-align và line-height:
    + Căn giữa theo chiều ngang.
        + text-align: center; css thuộc tính này vào chính element hoặc box(vì thuộc tính text-align có tính thừa kế cho các đối tượng con bên trong box)
        + Thuộc tính nào kế thừa muốn biết search trên w3school.
    + Căn giữa theo chiều dọc.
        + Sử dụng thuộc tính line-height: 100px; kích thước bằng kích thước của box.
        + line-height là phần bôi đen chuột của text trên màn hình.

+ Dùng display(căn chỉnh được nhiều item trong box cùng lúc)
    + Cách 2:
        + display: flex; cho box 
        + margin: auto; cho element

    + Cách 3:
        + display: flex; cho box
        + algin-items: center; cho box
        + justify-content: center;  cho box
        + Có thể căn chỉnh nhiều element linh hoạt dựa vào justify-content: space-around/space-between/...;

+ Cách 4: Dùng position:
    + box cho position: relative;
    + Items:
        + position: absolute;
        + top: 50%; /* cách trên 50% của chiều cao của box */      
        + transform: translateY(-50%); /* transform dịch chuyển dựa trên kích thước của chính nó */      
        + left: 50%; /* Cách trái 50% chiều rộng của box */

    + Ngoài ra nếu items là một thẻ div có thể  thay thế  transform: translateY(-50%); + left: 50%; bằng:
        + width: 100% hoặc
        + right: 0; left: 0;
        + Tùy cơ ứng biến cách nào dùng đơn giản thì dùng.

        
+ Căn giữa thang dọc ngăn cách dính với element.(dùng cách căn giữa bằng position)

+ Cách 3 dùng đơn giản và hay dùng nhất.

## Hiển thị ảnh dự phòng khi gặp lỗi. 
+ Hai cách để hiển thị ảnh:
    + Dùng thẻ img trong body
    + Dùng div + CSS background-image
+ Search ảnh placeholder để kiếm ảnh thay thế khi gặp lỗi.
+ Thay thế ảnh lỗi:
    + Dùng onerror với thẻ img hoặc các thẻ load file.
    + Trong div dùng nhiều url trong background-images.