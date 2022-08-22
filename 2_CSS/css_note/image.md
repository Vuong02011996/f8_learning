## Hiển thị ảnh 
+ Hiển thị ảnh không nhất thiết đúng kích thước của ảnh, chỉ cần đúng tỉ lệ w/h là không bị méo ảnh.
### Hiển thị ảnh nền.
+ Có 2 cách:
    + Dùng thẻ img.(kích thước các ảnh phải bằng nhau nếu hiển thị nhiều ảnh)
    + Dùng div + background-image: không phụ thuộc vào kích thước ảnh.
+ Nguyên tắc phải hiển thị ảnh làm sa cho chiều rộng và chiều ngang vùng hiển thị luôn luôn tỉ lệ với kích thước ảnh để ảnh không bị vỡ.
+ Nên dùng background-position bằng cover hơn là % hoặc pixel.
+ Dùng thẻ img kích thước hình ảnh không tự resize theo kích thước thẻ cha chứa nó(width 33.333% place_item). Để xử lí vấn đề này, cho thẻ width bằng 100% cho thẻ img. 

### Hiển thị chữ trên ảnh nền.
+ Sử dụng position.
    + Cái nào cha position: relavite;
    + Con dùng position : absolute rồi canh vị trí cho nó.
+ Các cách dưa khối chứa chữ vào giữa:
    ```
        Cách 1:
        left: 50%;
        transform: translateX(-50%);
        Cách 2:
        left: 0;
        right: 0;
        Cách 3:
        width 100%;
    ```
+ Các thuộc tính xử lí ảnh.
    + border-radius: 4px; bo góc cho ảnh 
