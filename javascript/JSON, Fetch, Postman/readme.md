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
+ Callback hell 
  + Một công việc hiện tại phụ thuộc vào kết quả của công việc trước đó. và liên tục như vậy.
+ Pyramid of doom.

## Promise (concept)
+ Promise: ra đời để tránh callback hell.
+ 
