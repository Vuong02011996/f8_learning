# Các khái niệm trong flexbox
+ flex container, flex item.
+ main axis, main start, main end , main size.
+ cross axis, cross start, cross end, cross size.

# Properties for the flex container
+ flex-direction: row, column, row-reverse, column-reverse.(đổi chiều main axis)
+ flex-wrap: nowrap, wrap, wrap-reverse.
+ align-items: flex-start, flex-end, center, baseline, stretch.(cross axis)
+ justify-content: flex-start, flex-end, space-between, center, space-around.(main axis)
    + space-between: (đẩy các flex-item ra xa nhất có thể theo chiều main axis.)
    + space-around: (đẩy các flex-item ra xa nhất có thể theo chiều main axis.) có cách lề  bằng 1/2 giữa.
    + space-evenly: (đẩy các flex-item ra xa nhất có thể theo chiều main axis.) có cách lề  bằng giữa.
    + Các flex-items chỉ có khoảng các với nhau khi có kích thước chiều ngang cố định.
+ align-content: flex-start, flex-end, space-between, center, space-around, stretch.(cross axis)
+ flex-flow: that a shorthand exists for flex-direction and flex-wrap.(flex-flow: row wrap;)

# Properties for the flex items.
+ align-self: auto, flex-start, flex-end, center, baseline, stretch.(cross axis)
+ flex-grow
+ flex-shrink.
+ flex: flex-grow [flex-shrink] [flex-basis]; shorthand.
    + flex-grow: 1
    + flex-shrink: 1
    + flex-basis: auto
+ order. thay đổi thứ tự flex-items.
+ flex-basis: 30%: kích thước mỗi item theo chiều main axis(main-size)

# Other
+ display: flex; mặc định flex-direction là row.
+ flex: 1;
    + Nếu chỉ có một flex-items có thuộc tính này thì nó sẽ chiếm hết khoảng trống theo main axis.
    + Nếu tất cả flex-items có thuộc tính này thì kích thước các items như nhau.
    + Nếu mỗi flex-items có mỗi giá trị khác nhau thì kích thước theo trọng số.

+ Cách nhanh để căn giữa một items trong khối: margin : auto;
    + justify-content: center; canh giữa chiều ngang (main axis).
    + align-items: center; align-self: center; canh giữa theo chiều dọc (cross axis)

+ align -> cross axis.


# Reference
+ [property of flex](https://codepen.io/enxaneta/full/adLPwv/)
+ [Flex model](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)