# Giới thiệu:
+ Typescript là một dự án mã nguồn mở được `Microsoft` phát triển,
+ Có thể nói TypeScript là một `phiên bản nâng cao của JavaScript` vì nó `bổ sung những kiểu dữ liệu tĩnh và các lớp hướng đối tượng`, đồng thời nó bao gồm luôn các phiên bản ES mới nhất 
+ Các file TypeScript có đuôi (phần mở rộng – extension) là `*.ts`
+ TypeScript giúp bạn viết code theo `phong cách OOP` như: C#, Java. Nghĩa là nó có: class, abstract class, interface, encapsulation, ….
+ Dễ dàng hơn để `phát triển các dự án lớn` vì nó giúp bạn kiến trúc hệ thống theo `Module, namespace`.
+ Typescript đang được sử dụng ở các `Framework Front-end phổ biến` như `Angular 2`, `Ionic`... cũng như Nền tảng cho` back-end như Node-js` bởi những ưu điểm của mình.
+ https://viblo.asia/p/gioi-thieu-typescript-su-khac-nhau-giua-typescript-va-javascript-LzD5dDn05jY

# Install
+ Chúng ta không thể chạy trực tiếp Typescript ngay trong trình duyệt một cách đơn giản như Javascript, Typescript được biên dịch qua Javascript bởi trình biên dịch thông qua npm
+ Để có thể làm việc với Typescript thì bạn phải cài đặt `node.js & npm,`
+ Cài Typescript để biên dịch Typescript sang Javascript: `npm install -g typescript` check `tsc -v`

# So sánh vs JS

+ JS `dynamic type`, TS `type check` the same C/C++
+ Giống: Với TypeScript chúng ta có thể khai báo biến với từ khóa:` var, let và const`.
+ TypeScript thêm các `namespace, class và module tùy chọn vào JavaScript`. 
+ TypeScript được thiết kế sao cho dễ tích hợp vào chương trình JavaScript sẵn có nhất, nên `bất cứ tập tin JS nào cũng là một tập tin TS` hợp lệ, nhưng điều ngược lại không đúng nhe.
+ Để biên dịch một file Typescript sang javascript ta chạy lệnh: `tsc file1.ts file2.ts`, tùy chọn `–watch` để tự động biên dịch một file TypeScript khi có thay đổi  
+ Khi TypeScript được biên dịch thành JavaScript, toàn bộ khai báo kiểu sẽ bị xóa.

# Tutorial
+ Trang chủ: https://www.typescriptlang.org/docs
+ TS trong 5 phút: https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
+ https://www.typescripttutorial.net/typescript-tutorial/what-is-typescript/
+ https://www.tutorialspoint.com/typescript/typescript_overview.htm

# Base Type scripts.
+ Kiểu dữ liệu và Khai báo biến: `number, string, Boolean, array(JS), enum, tuple, any, void, ..`
+ Function trong TS: `Ta phải chỉ định luôn kiểu dữ liệu trả về cho hàm ngay từ đầu.` (vd: `number, string, void, …`)
+ Hướng đối tượng trong TS: c`lass, Access Modifier, Interface, Abstract, Namespace, Generic`

# Typescript vào ReactJS App
+ https://reactjs.org/docs/static-type-checking.html#typescript
+ `npx create-react-app react_typescripts_app --template typescript`
+ Có một lưu ý là đối với `các file chứa component` cần có phần mở rộng `.tsx`, ví dụ đối với App.tsx => (`.ts, .js, .tsx`)
+ https://viblo.asia/p/mot-vai-chia-se-khi-ung-dung-typescript-vao-reactjs-app-Ljy5V1zjlra
+ https://handsonreact.com/docs/react-typescript