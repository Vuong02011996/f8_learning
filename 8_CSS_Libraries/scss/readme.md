# CSS preprocessors
+ Là ngôn ngữ tiền xử lí CSS, có nhiệm vụ logic hóa mã CSS sao cho gần giống với ngôn ngữ lập trình.
+ Các CSS pre-processors thường hay sử dụng là:
    + SASS được xây dựng dựa trên Ruby
    + SCSS ra đời sau SASS có cú pháp tương tự như CSS , nhằm thu hẹp khoảng cách giữa SASS và CSS.
    + LESS được xây dựng trên Javascript
    + https://topdev.vn/blog/sass-scss-la-gi/
    + http://dotnet.edu.vn/ChuyenMuc/So-sanh-SASS-vs-LESSCSS-Preprocessors-2154.aspx

# SASS/SCSS 
+ File .module.css ta đổi tên thành .module.scss là xong.
    + Nếu báo lỗi chưa có module sass thì cài : yarn add sass || npm i sass
    + development mới sài scss còn product chỉ sài css.

+ SCSS hổ trợ cú pháp làm tổ: viết css vào bên trong cặp {}
    ```
        .btn{
            font-size:20px

            &:hover {
                cursor: pointer
            }
        }
    ```
+ https://sass-lang.com/documentation/syntax
# Những tính năng cơ bản scss

+ `Variables`: Sử dụng ký tự $ để khai báo biến và gán giá trị cho nó.

+ `Nesting`: Sử dụng cặp dấu ngoặc nhọn {} để lồng các selector vào nhau.

+ `Mixins`: Sử dụng từ khoá @mixin để tạo ra một nhóm các thuộc tính và sử dụng từ khoá @include để gọi nó trong selector.

+ `Extend/Inheritance`: Sử dụng từ khoá @extend để kế thừa các thuộc tính từ một selector khác.

+ `Partials`: Sử dụng từ khoá @import để nạp một tập tin SCSS vào tập tin hiện tại.

+ `Functions`: Sử dụng các hàm trong SCSS, như lighten() hoặc darken(), để tính toán giá trị màu.

+ `Operators`: Sử dụng các toán tử như +, -, *, / để tính toán giá trị trong SCSS.


# Conver scss to css online
+ https://jsonformatter.org/scss-to-css
+ Chọn những css không có biến,...

# Ref
+ syntax https://sass-lang.com/documentation/syntax