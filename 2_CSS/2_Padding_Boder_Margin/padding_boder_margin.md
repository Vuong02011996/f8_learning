# Đệm, viền và khoảng lề - các thuộc tính trong CSS.
## Padding
+ Đệm thêm kích thước cho các thẻ làm tăng tổng kích thước của thẻ.
+ Ý nghĩa: 
    + Nội dung thẻ được tách ra xa với viền thẻ.
    + Sử dụng để tách nội dung element với kích thước element cho dễ đọc , đẹp mắt.
+ Cách dùng:
    + padding thứ tự chiều kim đồng hồ: top right bottom left.
    + Sử  dụng giá trị %- tức là lấy giá trị bằng (%*kích thước) của chính nó.VD: padding-top :50%;
    padding lên trên một đoạn bằng 50% kích thước chiều ngang của chính nó.
    + Cú pháp:
        + padding: 10px; khi có một giá trị truyền vào thì sẽ tương đương với 4 hướng 
        + padding: 10px 20px; bên trên vs bên dưới(10px) - bên trái vs bên phải (20px)
        + padding: 10px 12px 8px; bên trên(10px) - bên trái vs phải(12px) - bên dưới(8px)
        + padding: 10px 12px 14px 16px; theo chiều kim đồng hồ , trên - phải - dưới - trái
+ Phần padding luôn nằm ngoài phần content.

## Border 
+ Kí hiệu nét liền: luôn ôm đối tượng.
+ Ý nghĩa:
    + Làm tăng kích thước element.
    + Sử dụng trong bài toán element trùng với màu nền cần border để thể hiện.
+ Cách dùng:
    + border: 2px solid #333; border-width, border-style, border-color.
    + Mặc định border-style có độ rộng 2px.

## Margin
+ Kí hiệu nét đứt: có thể ra xa không ôm đối tượng. 
+ Ý nghĩa:
    + Không làm kích thước element tăng lên.
    + Sử dụng như tư duy hình khối, cầm tay di chuyển đối tượng sang một vị trí mới.
    + Sử  dụng khi muốn khoảng cách giữa các element xa hơn, nhìn rõ ràng hơn. 
+ Cách dùng:
    + margin: 32px 200px 20px 100px; top-right-bottom-left.
    + Viết tắt như padding.
+ Là một khoảng cách đẩy ra từ elememt.
+ Khi đối tượng margin quá kích thước width màn hình đối tượng sẽ rụng xuống dòng thứ 2.
## Box-sizing
+ Sử dụng khi muốn kích thước element không thay đổi khi thêm padding hoặc border.
+ Cơ chế là tự động giảm kích thước nội dung bên trong sao cho tổng kích thước sau khi thêm padding, border với nội dung vẫn bằng kích thước element khai báo ban đầu.
+ box-sizing: border-box;( thuộc tình: unset, content-box, ...)

## Orther
+ Padding và border làm tăng kích thước element(dev tools - computed)
+ Margin không làm tăng kích thước element nhưng làm tăng tổng kích thước.
+ Khi tổng kích thước element lớn hơn kích thước tổng, element sẽ bị nhảy xuống.
