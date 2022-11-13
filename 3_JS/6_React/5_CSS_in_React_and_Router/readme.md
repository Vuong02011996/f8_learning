# Cách sử dụng CSS cho dự án 
+ Cách 1: dùng props style -> css inline
+ Cách 2: viết hết trong 1 file App.css/index.css rồi import file này vô component sử dụng css
    + development: css internal -> thẻ style trên thẻ head
    + production: css external -> gọp chung tất cả file css lại 1 file.
+ Cách 3: mỗi component viết mỗi file CSS rồi import vào component
+ Cách 4: Dùng Css module , tạo các file .nodule.css độc lập và không ảnh hưởng tới nhau 

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
    + Nếu báo lỗi chưa có module sass thì cài : yarn add sass || npm sass

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


# Router
+ Cơ chế giúp chuyển đổi các trang web trong project.
+ install: npm install react-router-dom@6
+ https://reactrouter.com/en/main/start/tutorial#the-root-route