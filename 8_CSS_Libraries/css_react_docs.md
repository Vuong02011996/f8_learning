# Cách sử dụng CSS cho dự án 
+ Cách 1: dùng props style -> css inline
+ Cách 2: viết hết trong 1 file App.css/index.css rồi import file này vô component sử dụng css
    + development: css internal -> thẻ style trên thẻ head
    + production: css external -> gọp chung tất cả file css lại 1 file.
+ Cách 3: mỗi component viết mỗi file CSS rồi import vào component(có vấn đề khi ta đặt tên class giống nhau)
+ Cách 4: Dùng Css module , tạo các file .module.css độc lập và không ảnh hưởng tới nhau (Cách 3 nhưng tên class giống nhau vẫn oke, không bị trùng nhờ mã hóa đường dẫn). Kết hợp với GlobalStyle để CSS chung có các component.

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
