# Cách sử dụng CSS cho dự án 
+ Cách 1: dùng props style -> css inline
+ Cách 2: viết hết trong 1 file App.css/index.css rồi import file này vô component sử dụng css
    + development: css internal -> thẻ style trên thẻ head
    + production: css external -> gọp chung tất cả file css lại 1 file.
+ Cách 3: mỗi component viết mỗi file CSS rồi import vào component(có vấn đề khi ta đặt tên class giống nhau)
+ Cách 4: Dùng Css module , tạo các file .module.css độc lập và không ảnh hưởng tới nhau (Cách 3 nhưng tên class giống nhau vẫn oke, không bị trùng nhờ mã hóa đường dẫn). Kết hợp với GlobalStyle để CSS chung có các component.

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

# clsx và className
+ Dùng để sử dụng nhiều class và class động trong css
+ Ta có thể dùng bất cử kiến thức JS nào để trả về chuỗi string cho className và các class cách nhau một dấu cách
    + Dùng template string {`${style.btn} ${style.active}`}
    + Dùng mảng [style.btn, style.active].join(' ')

+ Tuy nhiên thực tế người ta ít dùng cách trên vì cách trình bày xấu và dài dòng
    + Ta sẽ sử dụng một trong hai thư viện sau: classnames(ra đời trước) hoặc clsx
    + Hai thư viện này hoạt động tương tự nhau, ở đây dùng clsx

+ Install yarn add clsx hoặc npm i clsx
    + Cách dùng: clsx là một hàm , đối số là các class ta muốn add vào: clsx(style.btn, style.active)

+ Dùng Css Động lúc có lúc không 
    + Ta dùng {} cho đối số  và viết logic bên trong
+ VD: src/component/Button/index.js


# Router
+ Cơ chế giúp chuyển đổi các trang web trong project.
+ install: npm install react-router-dom@6
+ https://reactrouter.com/en/main/start/tutorial#the-root-route