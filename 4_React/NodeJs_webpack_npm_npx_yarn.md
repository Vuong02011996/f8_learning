https://fullstack.edu.vn/blog/phan-1-tao-du-an-reactjs-voi-webpack-va-babel.html
1. Node JS
2. Tạo dự án với React + webpack
3. Tạo project nhanh với công cụ create-react-app
4. npx - npm - yarn
5. Cấu trúc các file trong dự án ReactJS.

# Node JS
+ Node JS là một `JavaScript runtime`
+ JavaScript runtime là một môi trường độc lập để có thể chạy được code JavaScript.
+ Trình duyệt chạy JS cũng có một môi trường riêng và không liên quan gì đến node JS.
+ Nên khi cài Node JS ta có thể chạy JavaScript dưới máy chúng ta.
+ Và để Node JS chạy được JS thì cần một engine là `Chrome V8` ... engine này cũng được cài đặt 
ở một số trình duyệt hiện đại như chrome.

## Vai trò node JS
+ Làm `máy chủ web` như live server của Visual Code để chạy trên máy tính chúng ta.
+ Node có một hệ sinh thái bao gồm `npm, npx`cài node là có luôn hệ sinh thái này.
+ Có npm ta dễ dàng download các thư viện trên npm.com như `create-react-app`, ...
+ Có `create-react-app` thì đã cài luôn `yarn`.
+ Nên nếu ta clone một dự án từ github về và không chạy `npx create-react-app` thì phải cài thêm yarn bằng `npm i yarn`

## Install/Uninstall node, npm, npx, yarn theo a Sơn
+ A Sơn Chỉ cho window vs MacOS theo file installer 

+ Còn linux theo file bin lastest version => https://dev.to/aashishpanthi/step-by-step-instructions-to-install-node-and-npm-using-linux-binaries-1e0h.
    + Goto . https://nodejs.org/en/download/ and download node(Linux Binaries (x64))
    + `extract file tar -xf "*your_downloaded_file*`" or right click on tar file and extract (so simple).
    + Copy folder to /usr: `sudo cp -r ./{lib,share,include,bin} /usr`
    + Check node -v, npm -v, yarn -v -> Done
    + Uninstall:
    https://web.archive.org/web/20161114130923/http://amcositsupport.blogspot.in/2016/07/to-completely-uninstall-node-js-from.html
    ```
    sudo rm -rf /usr/bin/npm /usr/share/man/man1/node* /usr/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/bin/node opt/include/node /opt/lib/node_modules
    sudo rm -rf /usr/lib/node*
    sudo rm -rf /usr/include/node*
    sudo rm -rf /usr/bin/node*
    ```

+ Dùng cách ở đây option 2 nhanh gọn lẹ, using apt:
    + https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
    + có thể thay đổi version node tùy ý.

    + Uninstall
        + https://stackoverflow.com/questions/32426601/how-can-i-completely-uninstall-nodejs-npm-and-node-in-ubuntu
        + `sudo apt-get remove nodejs`
        + `sudo apt-get remove npm`
        + Then go to /etc/apt/sources.list.d and remove any node list if you have. Then do a `sudo apt-get update`

# Chạy dự án với React + Webpack
+ Ta chỉ cần 1 dòng lệnh là `npx create-react-app tên_project ` là có thể tạo dự án react và chạy
+ Nhưng ở đây ta muốn đi chi tiết xem một sự án react tạo ra thủ công sẽ qua những bước nào và có những lưu ý nào.

## webpack
+ webpack.js.org
+ webpack: dùng để 
    + module hóa mọi thứ trong project FE bao gồm tất cả các loại file: ảnh, css, js, ...
    + Tối ưu minifile code js khi lên production.

## Các bước tạo project thủ công
### Cài đặt thư viện và file cần thiết
+ npm init : để tạo file package.json
+ cài thư viện webpack: `npm i webpack webpack-cli --save-dev`
    + Sẽ tạo ra thư mục node module bên trong có webpack và webpack-cli và các thư viện phụ thuộc.
    + Trong file package.json sẽ có tên hai thư viện vừa cài.
        + Dùng `--save-dev` thì chỉ lưu trên devDependencies chỉ dùng được lúc dev
        + Dùng `--save` thì lưu trên dependencies chạy được lúc dev và cả production.
+ Cài `npm i react react-dom --save`
+ Cài babel 
+ Tạo file `public/index.html` : tạo thẻ root bên trong
+ Tạo file `src/index.js`: tạo component App và render lên root.

### Cấu hình webpack, babel
+ `npm i css-loader style-loader` : giúp tải file css dưới dạng module
+ Tạo file webpack.config.js ở thư mục gốc project, copy cấu trúc config thèn JS vào.
+ Tạo file .babelrc : để config babel để babel hoạt động.

### Thêm script cho dự án
+ `"start": "webpack --mode development --watch"` : để chạy dự án lên (bản bên trái webpack ), --watch để lắng nghe sự thay đổi trong file `src/index.js của module.export - entry`. Build ra output là file `build/bundle.js` - file này kết hợp webpack với code chúng ta ES6 - ES5, JSX -> JavaScript.
+ `"build": "webpack --mode production`: để build dự án sang bản production, bản bên phải webpack(webpack module hóa, optimze code ,...)


## Chạy dự án
+ npm start để build ra file `build/bundle.js`
+ Thêm thẻ script file này trong file public/index.html
+ Chạy live server trong VS code.
## Cách chạy dự án không cần link file `build/bundle.js` vào html
+ Cài plugin: html-webpack-plugin.
+ Thêm plugin trong file webpack.config.js
+ chạy npm start: sẽ tạo file index.html trong thư mục build, file này đã link sẵn thư file bundle.js
    + `defer`: tải file html trước rồi mới thực thi. nên không lỗi khi link thẻ script sau thẻ root.

+ Cài webpack dev-server để thay cho live server. 
+ Sửa script start thành webpack-dev-server: để đảm nhiệm vừa compile code vừa bật lên một web server.
    + --hot: để chỉ build lại đúng chỗ code thay đổi
    + --open: để mở luôn trình duyệt khi chạy npm start.
+ Chạy npm start 

# Tạo project nhanh với create-react-app
+ `npx create-react-app ten_du_an`
+ Thèn `npx` giúp sử dụng create-react-app mà không nhất thiết phải cài create-react-app lên máy của chúng ta.
    + Hoạt động: kiểm tra trong máy của chúng ta có thèn create-react-app chưa nếu chưa thì sẽ lên npm tải về.
    + Nên ta có thể trực tiếp cài create-react-app bằng npm. nhưng mà không nên vì sẽ fix version create-react-app.
    + create-react-app: thì đã bao gồm `yarn, webpack, babel` ,...
+ Chạy :
    + `yarn start`: để bật lên một development server (thay thể live server) và bên trong có webpack-dev-server nên tự  động bật web lên luôn.(open project lên trình duyệt)
    +  `yarn build`: build app ra các file tĩnh cho production(các file này đã được tối ưu), dùng khi triển khai cho khách hàng.
    + `yarn eject`: bung ra các cấu hình webpack, không nên chạy. mặc định đã ẩn đi cấu hình webpack.
+ cd ten_du_an -> yarn start
+ `Truy cập`:
    + tại máy mình: http://localhost:3000, không nên dùng lệnh bên dưới vì từ máy mình ra router xong truy cập lại vô máy mình.
    + tại máy chung mạng lan: http://192.168.1.133:3000

# npx - npm - yarn
## Global scope vs Project scope
- Những thư viện nào project import vào(phụ thuộc(dependencies)) thì import trong `Project scope`
    - `npm i tên_thư_viên `: sẽ lên trang npm download thư viện về lưu vào node_modules và tên thư viện ở package.json
        - `--save`: lưu vào dependencies với npm version cũ, npm mới không cần flag `--save`
        - `--save-dev or -D`: lưu vào devDependencies 

- Những thư viện không import trong project như `create-react-app, npm, yarn`,... thì import `Global scope`. Thêm flag `--global` vào. Vì thư viện này sẽ lưu vào hệ thống (admin/usr/...)nên cần `sudo`. Khi install như ri sẽ tạo ra file bin(`file bin là file cho phép thực thi các dòng lệnh trên terminal như create-react-app`).
    - `npm i --global tên_thư_viện`
    - `npm i -g tên_thư_viện`

## npx
- Cài node thì đã kèm theo npm, cài npm thì đã kèm theo npx, ...
- npx hổ trợ các thư viện cung cấp file bin như ở trên(create-react-app)
- `npx create-react-app ten_thu_vien`
- Cách hoạt động thèn npx như sau: xem thư mục đang gõ có node_modules hay không, nếu có sẽ chọc vào thư mục `.bin` tìm tên thư viện  đi cùng nếu chưa có sẽ `nhảy sang global tìm`(nếu có sẽ chạy bt), nếu không có cả ở global sẽ lên npm download về (project scope) và chạy tên thư viện đó. Sau khi chạy xong nó sẽ xóa bỏ luôn tên thư viện khỏi `.bin`
- Tại sao dùng: 
    - không cài thư viện global lên máy, nặng
    - cài global sẽ fix version tên thư viện , còn npx sẽ download version mới nhất của thư viện.

## yarn(2016) vs npm(2010)
- `yarn` ban đầu hơn về performance 
- bản thân các thư viện là một dự án nhỏ dùng trong dự án của bạn nên cấu trúc cũng y chang dự án của bạn. Vì là dự án nên bên trong sẽ có các thư viện khác.
- `package-lock.json or yarn.lock` là file quản lí tất cả thư viện bao gồm thư viện phụ thuộc nhỏ bên trong.`package.json ` chỉ quản lí thư viện chúng ta cài trong dự án, không bao gồm các thư viện phụ thuộc.
- `file lock` là một cái để optimize performance khi cài đặt thư viện.không phải cài lặp lại.
- Khác nhau về:
    - Cơ chế performance khi cài nhiều thư viện cùng lúc.
        - `npm`: tuần tự
        - `yarn`: song song => nhanh hơn nhưng không có nghĩa nhanh hơn cấp số x.
    - Cơ chế cache tổ chức:
        - `yarn`: khi cài sẽ lưu tạm một thư mục nào đó nên khi xóa node modules cài lại sẽ nhanh hơn
        - `npm`: chậm hơn nhưng ít tốn dung lượng hơn.
- => Cần về tốc độ dùng `yarn`, máy ít dung lượng dùng `npm`
- `yarn nên cài global.`
# Cấu trúc các file trong dự án React JS
+ `node_module`: nơi lưu trữ tất cả thư viện cài trong dự án
    + Khi cần thiết lỗi chi đó ta sẽ xóa thư mục này và `yarn start` sẽ không chạy được nữa.
    + Ta phải gõ `npm i` hoặc `yarn` (nếu có file `yarn.lock`) để tải lại.
+ `public`(công khai): tất cả trong file này có thể truy cập trên web
    + Đây là thư mục gốc(root), khi bật server lên sẽ trỏ thẳng đến thư mục này.
    + Do đó mặt định nó sẽ tải file `index.html` , ta truy cập một tên file sai cũng trỏ đến file này.
    + `favicon.ico` : icon trên cái tab trình duyệt
    + `manifest.json`: khai báo rõ ràng thông tin trang web thường đi với `PWA`
    + `robots.txt`: để hổ trợ công cụ tìm kiếm, nên tìm kiếm trong thư mục nào , ...
+ `src`: 
    + `index.js`: file entry point của webpack sẽ trỏ vào đây đọc nội dung file này và render ra file `bundle.js`.
            + file này sẽ import component App từ file `App.js`.
            + import file index.css : chứa các file css, được webpack hổ trợ thành module nên có thể import.
    + `App.js`: nơi viết toàn bộ nội dung website, ta có thể chia component ra rồi import vào file này.
    + `logo.svg`: file logo để quay quay .
    + `reportWebVitals.js`: thống kê báo cáo hiệu năng trang web, giúp hỗ trợ công cụ tìm kiếm, tối ưu trải nghiệm      người dùng. trong tương lại có thể gửi file này lên google anylatics để biết các thông tin của website. 
    + `setupTest.js`: giúp viết test các component có chạy đúng với mong muốn.


+ `yarn.lock`: 
+ `package.json`: mô tả dự án, quản lí các thư viện cài đặt trong dự án.

+ `build`: thư mục này sẽ sinh ra khi chạy `yarn build` để dùng cho production(module hóa, optimaze code).
    + Nó sẽ chuyển tất cả code chúng ta vào thư mục này.
    + Khi truyển khai cho khách hàng chỉ cần bê nguyên thư mục này đưa lên hosting là xong.
    + Chạy dự án cho khách hàng: `serve -s build`, chưa có serve thì dùng npm cài, lúc này sẽ sinh ra một url với port mới cho trang web chúng ta. chạy đúng source trong thư mục build.(không liên quan gì đến dev, webpack, ...)
    + Thư mục này nên ignore trong git.
