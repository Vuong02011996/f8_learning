# Đệm, viền và khoảng lề
# Note.
## Padding
+ Đệm thêm kích thước cho các thẻ, nội dung thẻ được tách ra viền thẻ.
+ padding thứ tự chiều kim đồng hồ: top right bottom left.
+ Sử dụng để tách nội dung element với kích thước element cho dễ đọc , đẹp mắt.

## Border 
+ border: 2px solid #333; border-width, border-style, border-color.
+ Sử dụng trong bài toán element trùng với màu nền cần border để thể hiện.

## Margin
+ Sử dụng như tư duy hình khối, bốc khối bỏ qua một khoản.
+ Sử  dụng khi muốn khoảng cách giữa các element xa hơn, nhìn rõ ràng hơn.
+ margin: 32px 200px 20px 100px; top-right-bottom-left.

## Box-sizing
+ Sử dụng khi muốn kích thước element không thay đổi khi thêm padding hoặc border.
+ Cơ chế là tự động giảm kích thước nội dung bên trong sao cho tổng kích thước sau khi thêm padding, border với nội dung vẫn bằng kích thước element khai báo ban đầu.
+ box-sizing: border-box;( thuộc tình: unset, content-box, ...)

## Orther
+ Padding và border làm tăng kích thước element(dev tools - computed)
+ Margin không làm tăng kích thước element nhưng làm tăng tổng kích thước.
+ Khi tổng kích thước element lớn hơn kích thước tổng, element sẽ bị nhảy xuống.
