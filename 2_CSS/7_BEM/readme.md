BEM là tiêu chuẩn đặt tên class trong CSS
Viết theo BEM dài nhưng được cái khỏi phải nối tầng từ cha đến con để tránh trùng class.

# Quy ước đặt tên class theo BEM
BEM: block, element, modified.\
+ Block: css cho khối.(thẻ div bên ngoài)
+ Element: css cho thành phần trong khối.(các thẻ con bên trong)
+ Modified: css bổ  sung cho khối hoặc element.(bổ sung màu sắc thể hiện ý nghĩa thành công hay thất bại , ...)

# Cú pháp đặt tên , dấu hiệu đặt tên theo chuẩn BEM:
+ Block: .block
+ Block + element: .block__element, trước element là dấu __
+ Block + modifier: .block--modifier
+ Block + element + modifier: .block__element--modifier, trước modifier là dâu --

# Button with BEM
+ Enable: pointer, hover effect.
+ Disable: arrow,, no effect.
+ Css cho btn đứng liền kề.
```
  .btn + .btn {
      margin-left: 16px;
  }

```

# Ửu điểm khi sử dụng
+ Sử dụng trong dự án lớn, số lượng code rất nhiều.
+ Rõ ràng trong file html.
+ Tái sử dụng class.
+ Không cần suy nghĩ nhiều tên class, hoặc lỗi do đặt tên class trùng nhau.

+ Những ví dụ đơn giản thì không cần: 
TIÊU CHÍ: KHÔNG DÙNG CÁI TỐT NHẤT CAO SIÊU NHẤT MÀ DÙNG CÁI PHÙ HỢP NHÁT.

# Note:
+ Các element có class dùng chung cứ gọi class chung không cần đặt tên theo block__element
+ Các block có nhiều element bên trong thì xem tách một element làm cha rồi đặt làm block không cần đi từ bên ngoài vào.