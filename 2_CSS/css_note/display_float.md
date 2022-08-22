# Using float
+ Sử dụng thuộc tính float và width cho chính element muốn thay đổi vị trí(sang ngang), chớ không dùng lên thẻ cha chứa nó.
+ float: right; đẩy các khối div sang bên phải, float sẽ làm mất tính block của element. Sử dụng khi muốn các khối div con nằm ngang trên một dòng.
+ Khi sử dụng float các khối div con sẽ nằm sang ngang nhưng bị tách ra khỏi div bao bọc nó, ta dùng thêm khối clear ở cuối khối bao bọc để giải quyết vấn đề này. (<div class="clear"></div>), css  clear: both; hoặc dùng element giả after.
+ Element đang là inline(list items) dùng float sẽ chuyển sang block dùng được các thuộc tính của block. Display là block mới dùng được các thuộc tính: margin-top: -3px, ...(số 3 của phần vé the band)

+ Một vấn đề khi sử dụng float là các item con sẽ tách ra không được ôm trọn trong khối cha, di chuyển xuống một mặt phẳng khác nền dùng overlow để xử cho khối cha ôm lại.
    + Overflow: hidden : Ẩn các element con nằm ngoài phạm vi của cha.
