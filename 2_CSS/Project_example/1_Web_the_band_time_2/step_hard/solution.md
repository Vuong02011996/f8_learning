# Solved
1. Sử dụng ul, li cho các navigation.
2. Không dùng display flex mà dùng display inline-block cho li để lên hàng ngang, sau đó css cho các thẻ a(padding, line-height, color, ...). Thẻ li mặc định có display là list-item tương đương vs block nên sẽ xuống hàng.
3. Chèn thẻ i chứa icon vào thẻ a More là xong.
4. Dùng text_align center cho box hoặc element là xong.
6. Dùng display bằng inline block cho item con để  đẩy lên 1 dòng.
    + Nếu dùng thẻ p thì phânf sold out mới nhảy xuống dưới còn dùng span thì nằm trên 1 hàng.
7. + Đường gạch: border-bottom: 1px solid #ddd;
    + Bo góc padding: border-radius: 50%;
8. Bo tròn padding: trên dưới nữa trái phải hợp lí vs content để được hình vuông. Hoặc dùng width height cố định để ra hình vuông.
    +  padding:3px 8px;


9. Tại sao thẻ a cần display=block?, nếu không có  diện tích thẻ a khi hover vào chỉ bằng phần padding?
    + Vì thẻ a mặc định display là inline, mà inline thì không có set được kích thước(auto, auto) nên không ăn theo line-height được, phải chuyển sang block hoặc inline block mới có kích thước cố định cho thẻ a.
10. Làm sao để xử lí vị trí các item của một form đơn giản nhất?
    + 

11. Thẻ img là thẻ có display inline nên sẽ có một khoảng cách nhỏ đối với đối tượng ở hàng tiếp theo. Do đó chuyển thành display thành block cho img để loại bỏ khoảng cách này.


# Q/A
+ Làm sao để đoạn hai bên đoạn văn khi thu nhỏ màn hình tự động response, dùng margin hai bên cố định không được?
    - 
+ Dùng lable vs p.
    + Dùng label vs input khi click vô lable vẫn nhập được input.
+ Dùng span vs p.
+ Làm sao chỉ opacity phần chữ trong thẻ li, not all?(Dùng màu cho chữ #757575)
+ Tại lại thêm class js_element khi gọi element trong js?
+ container_modal.addEventListener("click",clearPropagation(event)) event ở đây có ý nghĩa gì? 

