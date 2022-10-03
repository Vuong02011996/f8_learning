+ Flexbox cung cấp các thuộc tính giúp điều khiển vị trí , phương hướng các item một cách linh động.
+ Trước khi sử dụng flex box phải xác định thẻ nào làm container và các thẻ nào là flex-items.
# Các khái niệm trong flexbox
+ Có hai thành phần chính trong layout flexbox:
    + flex container: vùng màu vàng, bao quát hết bên ngoài.
    + flex item: các vùng màu xanh
    + Container như thẻ cha chứ các thẻ con trực tiếp (flex item).
+ Có hai trục trên model flexbox: main axis và cross axis và luôn vuông góc với nhau.
    + Trục main axis quyết định các item nằm ngang hay dọc. Vị trí main start vs main end quyết định các item đi theo chiều nào.
    + Trục cross axis quyết định hướng các item khi có nhiều hàng, item từ dưới lên hay lên xuống dựa vào cross start và cross end.
+ Kích thước flex item là main size, và cross size. Main size là kích thước song song với main axis.
+ main axis, main start, main end , main size.
+ cross axis, cross start, cross end, cross size.

# Các thuộc tính CSS trong flexbox
## Properties for the flex container
+ flex-direction: row, column, row-reverse, column-reverse.
    + Quyết định chiều main axis.
    + Mặc định là row. các item theo trên 1 hàng.

+ flex-wrap: nowrap, wrap, wrap-reverse.
    + Mặc định tất cả item sẽ nằm trên 1 hàng hoặc cột.
    + wrap để  quyết định các item có xuống dòng hay không.
    + wrap-reverse: thay vì xuống dòng sẽ nhảy lên trên(đổi chiều cross start , cross end)

+ flex-basis: xác định kích thước main size.

+ justify-content: căn chỉnh các item - flex-start, flex-end, space-between, center, space-around.(main axis)
    + flex-start, flex-end, center: canh trái, canh phải, canh giữa.

    + space-between: (đẩy các flex-item ra xa nhất có thể theo chiều main axis.) không cách lề hai bên.
    + space-around: (đẩy các flex-item ra xa nhất có thể theo chiều main axis.) có cách lề  bằng 1/2 giữa.
    + space-evenly: (đẩy các flex-item ra xa nhất có thể theo chiều main axis.) có cách lề  bằng giữa.
    + Các flex-items chỉ có khoảng cách với nhau khi có kích thước chiều ngang cố định.

+ align-content: giống justify-content nhưng theo chiều cross axis , flex-start, flex-end, space-between, center, space-around, stretch.(cross axis) - xét cho nhiều hàng.
+ align-items: flex-start, flex-end, center, baseline, stretch.(cross axis)

+ flex-flow: that a shorthand exists for flex-direction and flex-wrap.(flex-flow: row wrap;)

## Properties for the flex items.
+ justify-self: như justify-content nhưng xét cho flex items.
+ align-self: như align-content nhưng xét cho flex items.

+ flex-grow: như flex-basis nhưng xét cho flex items. rất linh động có thể xét theo trọng số. làm lớn kích thước.
+ flex-shrink: ngược lại flex-grow thu nhỏ kích thước lại.
c-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
}

+ flex: flex-grow [flex-shrink] [flex-basis]; shorthand.

    flex: 1; flex-grow 1, shrink 1, flex-basis auto.
+ order. thay đổi thứ tự flex-items. flex-items nào order nhỏ nhất là vị trí main start.
+ flex-basis: 30%: kích thước mỗi item theo chiều main axis(main-size) main-size bằng 30% độ dài main axis.

## Other
+ display: flex; mặc định flex-direction là row.
+ flex: 1; (tương đương với flex-grow 1, shrink 1, flex-basis auto.)
    + Nếu chỉ có một flex-items có thuộc tính này thì nó sẽ chiếm hết khoảng trống theo main axis.
    + Nếu tất cả flex-items có thuộc tính này thì kích thước các items như nhau.
    + Nếu mỗi flex-items có mỗi giá trị khác nhau thì kích thước theo trọng số.

+ Cách nhanh để căn giữa một items trong khối: margin : auto;
    + justify-content: center; canh giữa chiều ngang (main axis).
    + align-items: center; align-self: center; canh giữa theo chiều dọc (cross axis)

+ align -> cross axis.2px

+ Khối có display flex sẽ không ăn thuộc tính margin như block.(dùng padding)

+ Dùng margin-left, margin , margin-right : auto để căn chỉnh các items nhanh chóng.

# Reference
+ [property of flex](https://codepen.io/enxaneta/full/adLPwv/)
+ [Flex model](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox).c-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
}