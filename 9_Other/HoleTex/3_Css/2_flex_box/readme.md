# Ý nghĩa

-   Căn chỉnh sắp xếp element mà không dùng float hoặc position.

# Đặc điểm, khái niệm.

-   Sử lí element theo một chiều là row hoặc column.
-   Chiều ngang là trục main(default), chiều dọc là trục cross.
-   Container, flex item: khi một element có thuộc tính display : flex thì nó là container. Và các element con trực tiếp của nó là flex item.

# Các thuộc tính

## Flex container

-   `flex-direction`:

    -   row(mặc định): các element sắp theo chiều ngang từ trái sang phải.
    -   column.
    -   column-reverse.

-   `flex-wrap`:

    -   nowrap: sẽ không xuống hàng khi tổng chiều rộng của nó lớn hơn flex container => tràn ra ngoài.
    -   wrap: tự động xuống hàng.

-   `flex-flow`: viết tắt cho hai thuộc tính ở trên

    -   flex-flow: row wrap;

-   `justify-content`: căn chỉnh các element theo trục main. (mặc định main nằm ngang nên căn chỉnh theo chiều ngang)

    -   flex-start(mặc định): flex-item nằm hết sang bên trái.
    -   center
    -   flex-end
    -   space-between: có khoảng trống bằng nhau ở giữa flex item.
    -   space-around: có thêm khoảng trắng phía trước element đầu và phía sau element cuối.(bằng 1/2 khoảng trắng ở giữa)
    -   space-evenly: có thêm khoảng trắng phía trước element đầu và phía sau element cuối.(bằng khoảng trắng ở giữa)

-   `align-items`: căn chỉnh theo trục cross(mặc định là trục dọc). - căn chỉnh nguyên hàng
    -   flex-start, center, flex-end.
    -   space-between: có nhiều hàng.

## Flex item

-   Nắm khái niệm: available-space - không gian khả dụng.
-   `available-space`: là khoảng không gian(diện tích) của flex-container theo trục main.
-   3 thuộc tính quan trọng:

    -   `flex-basis`: xác định kích thước của một flex-item trước khi hai thuộc tính bên dưới được áp dụng.Mặc định `auto` - kích thước nội dung của item đó, nếu có set width height sẽ lấy kích thước đó .
    -   `flex-grow`: dùng để làm `tăng kích thước item` theo trục main bắt đầu từ kích thước flex basis, khi xét flex-grow chung cho tất cả item sẽ tăng đều kích thước tất cả item để chiếm hết không khả dụng còn nếu xét rieeng flex-grow cho từng item thì sẽ chia đều kích thước theo tỉ lệ xét.
    -   `flex-shrink`:chỉ có giá trị khi diện tích không gian khả dụng là âm(các item tràn ra ngoài), khi xét flex-shrink thì các item sẽ không tràn ra ngoài nữa.

-   Viết tắt 3 thuộc tính trên:

    -   flex: 1 1 auto grow:shrink:basis.

-   Ngoài ra còn có thuộc tính order: sắp xếp thứ tự các item.
