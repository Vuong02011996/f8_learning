1. Json
2. Promise
3. Fetch
4. DOM Location
5. Local storage
6. Session storage
7. Coding convention
8. Best  Practice
9. Mistakes
10. Performance

# JSON
+ Javascript Object Notation.
+ Là kiểu định dạng dữ liệu.(dạng chuỗi)
+ JSON.stringify(): từ javascript types sang Json.
+ JSON.parse(): từ Json sang Javascript types.
+ Các kiểu dữ liệu trong JS có thể biến đổi thành dạng JSON: number, string, boolean, null, Object.

# Promise (sync(đồng bộ), async(bất đồng bộ)) 
+ Sync: đồng bộ là code chạy từ trên xuống, cái nào viết trước chạy trước, chạy theo luồng tuần tự đồng bộ.
+ Async: chạy bất đồng bộ , viết trước chạy sau. setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame.
  + Sử dụng Callback.

## Promise(Pain)
+ Callback hell : là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng.
  + Một công việc hiện tại phụ thuộc vào kết quả của công việc trước đó. và liên tục như vậy.
+ Pyramid of doom.

## Promise (concept)
+ Promise: ra đời để tránh callback hell.
+ Promise resole, reject.
+ Promise chain.
+ Promise.resole() : (trả vể promise luôn luôn thành công), Promise.reject(), Promise.all().

# Fetch, JSON server , Postman 
## Fetch
### API : application programing interface , cổng giao tiếp giữa các phần mềm(BE - FE).
+ `Backend -> API -> Fetch -> Json/xml -> json.parse -> JS types -> render ra giao diện với HTML`
+ Hàm fetch() nhận đối số là một API và trả về một promise.

### Fetch POST 
### Fetch GET 
### Fetch DELETE 
### Fetch PUT 


## JSON server 
+ [json-server](https://github.com/typicode/json-server)
+ Thư viện có thể FAKE API cho FE.

### NODE JS 
+ Install Node js -> sử dụng npm (npm phần mềm cài kèm theo khi install node)
+ [Node js version12](https://computingforgeeks.com/how-to-install-nodejs-on-ubuntu-debian-linux-mint/)
### Install json-server 
+ [json_server](https://github.com/typicode/json-server)
+ npm install -g json-server 
+ npm start 
## Postman 
+ CRUD: create, read, update, delete.
+ Http giao thức tương ứng: Post, get, put/patch, delete.

