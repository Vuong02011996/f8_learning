# Giới thiệu grid-system.
+ Xuất hiện đầu thế kỉ 20(Constructivism) nghệ thuật / kiến trúc.
+ Sắp xếp bố cục trật tự, thống nhất, cân bằng.

# UI/UX
+ UI: user interface - giao diện người dùng: đẹp cân bằng.
+ UX: user experience - trải nghiệm người dùng: thoải mái, tiện lợi, dễ dàng

# Grid System.
Học rất là kĩ, học bình tĩnh, không vội vàng-học suốt đời.
## Lý thuyết
+ Có 4 thành phần: grid, row, column, gutter.
+ Column:
    + Độ rộng sử dụng đơn vị %
    + Số lượng cột được xác định trước.
+ Gutter:
    + Là khoảng cách 2 phía của cột
    + Thay đổi phù hợp với thiết kế: 24px, 10px, ..
+ Margin:
    + Là khoảng cách 2 bên trái phải của màn hình chính website.
    + Thay đổi theo kích thước màn hình, màn hình càng to thì margin càng rộng.(phần thừa 2 bên)

## Thành phần chính
+ Grid - lưới : thành phần cha chứa Row, column.
+ Row - Dòng : chiều ngang chứa column.
+ Column - Cột : chứa nội dung thành phần trên website.

## Thực hành - xây dụng thư viện responsive
### Tạo đối tượng grid
+ Tạo class:
    + grid: full-width , chiếm hết chiều ngang thẻ chứa.
    + wide: chiều ngang tối đa 1200px.(tham khảo 960 grid)
+ Đặt lại chiều rộng trên các thiết bị.
### Tạo đối tượng row
+ Vai trò:
    + Chứa columns giúp các column nằm ngang.
    + Khi tổng chiều ngang column vượt quá kích thước Row, cho colmuns xuống hàng.
    + Loại bỏ khoảng thừa do gutters tạo ra ở 2 phía.
### Tạo đối tượng column
+ Vai trò:
    + Chứa các thành phần trên website.

### Column offset
+ Nếu không dùng col-offset thì muốn canh giữa col bên trong phải thêm thuộc tính jusify-content: center
cho thèn row. Thay vì vậy ta dùng column offset để căn chỉnh cho linh động. Khỏi mất công media query nhiều CSS cho row.
+ Sắp xếp vị trí column theo ý muốn và hiệu quả trên nhiều device khác nhau.
+ l-o-4: hiểu là item sẽ bắt đầu từ cột thứ 4 trên PC.

### No gutter
+ Album ảnh Facebook không có khoảng cách giữa các ảnh không muốn có gutter.
+ Thêm class no-gutter sau class row.

# Bootstrap 
+ Dự án cần nhiều thứ dùng bootstrap thì mới dùng còn không lôi vào sẽ nặng.
+ Khi sử dụng thư viện grid.css thì theo độ ưu tiên cái nào là thư viện sẽ link lên trước. Vì viết sau sẽ ưu tiên hơn, trong trường hợp chúng ta muốn css lại một số  thuộc tính trong thư viện chỉ cần copy lại CSS selector của thư viện viết lại là sẽ đè lên css của thư viện.

# Luôn có Css sau khi dùng thư viện grid.css
```
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


NT: Response
+ Khoảng cách các col 24px.
    .grid {
        .row {
            .col {

            }
            .col {

            }
        }
        .row {
            .col {

            }
            .col {
                
            }
        }
    } 
```