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
+ Các kiểu dữ liệu trong JS có thể biến đổi thành dạng JSON: number, string, boolean, null, Object, Array.

# Fetch, JSON server , Postman 
## Fetch
### API : application programing interface , cổng giao tiếp giữa các phần mềm(BE - FE).
+ `Backend -> API(url) -> Fetch -> Json/xml -> json.parse -> JS types -> render ra giao diện với HTML`
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
+ REST API:  truyền tải dữ liệu qua interner bằng giao thức HTTP.
+ Http giao thức có các phương thức hay sử dụng sau: Post, get, put/patch, delete.

## Note
+ Khi gửi dữ liệu qua API bằng POST chỉ nhận về id mà không có data thì xem lại http protocol. Gửi lên thiếu header hoặc chi đó...


