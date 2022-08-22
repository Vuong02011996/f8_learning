Display
# Inline
    + inline: mặc định không lấý kích thước element(auto), các element nằm trên 1 hàng.
    + Inline sẽ taọ khoảng cách nhỏ giữa các dòng.
    + Sẽ không set được các thuộc tính kích thước.
# Inline-block
    + inline-block: lấý kích thước element theo bên ngoài(theo chiều dọc, chiều ngang theo nội dung )
    + Dạng inline-block vẫn có thuộc tính của inline, lấy kích thước chiều ngang bằng với nội dung bên trong.
        + inline: nghĩa là trên 1 hàng.
        + block: giữ lại tính chất khối => có thể đặt được kích thước.
# Block
    + Dạng block kế  thừa kích thước của thẻ chứa nó.(cả ngang và dọc.), giống như cho width, height: 100%.
    + Block: các element sẽ nằm ở các hàng liên tiếp nhau, không nằm trên 1 hàng.(giống list-items của thẻ li)
    + Các thẻ dạng khối như div: mặc định sẽ có display block(block: kế thừa kích thước của thèn chứa nó(VD: icon search trong header))