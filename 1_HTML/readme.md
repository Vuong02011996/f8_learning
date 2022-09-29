# Thành quả sau khóa học. HTML + CSS
  + Xậy dựng được giao diện website.
  + Phân tích giao diện website.
  + Đặt tên class theo chuẩn BEM.
  + Xây dựng layout với FLexBox
  + Làm hiệu ứng animation.
  + Xây dựng giao diện responsive.
  + Các kĩ thuật khác.
# Cấu trúc 1 file HTML 
+ Doctype
+ html
  + head(title, meta)
  + body
+ Thẻ <mở> </đóng>

# Các thẻ thông dụng trong tài liệu html
+ h: heading - viết tiêu đề.
+ p: paragraph - viết đoạn văn.
+ input(thuộc tính type: text, radio(các input cùng thuộc tính name), checkbox, ...) - không có thẻ đóng.
+ img: image (không có thẻ đóng)
  + Thuộc tính src: nguồn tới hình ảnh.
  + Thuộc tính alt: phát huy tác dụng khi hình ảnh bị lỗi.
+ a: anchor (mỏ neo), liên kết trang này với trang khác.
+ ul, li: Dùng để hiển thị danh sách.
  + ul(unorder list), ol(order list)(theo thử tự 123): một danh sách có một thẻ ul.
  + li(list item): mỗi hàng(phần tử) của danh sách dùng một thẻ li.(li*n)
+ table
    + thẻ thead: chứa thẻ th bên trong, ghi các tiêu đề của cột.
    + thẻ tbody: chứa thẻ tr(table row) chia các dòng cho table, td(table data) chứa data của ô tương ứng.
+ button(submit, register, ...).
+ Thẻ div: khối bao quanh các thẻ khác thôi.

# Other.
+ Thẻ img không có thẻ đóng.
+ Thuộc tính(Attribute) của thẻ nằm trong thẻ mở.
+ Các thẻ có display inline sẽ không ăn các thuộc tính margin, padding.

# So sánh các thẻ HTML:
+ Thẻ p vs span:
  + Dùng để viết text.
  + Thẻ p sẽ nằm xuống dòng.(khối riêng như block của div)
  + span nằm cùng hàng với thẻ cha như inline.
  + Thẻ span đưa ra để chứa một thẻ khác CSS thêm cho nó.

+ Thẻ label, input, button, a nằm trên 1 hàng(inline, inline block).
+ Thẻ h display block, nằm xuống hàng.