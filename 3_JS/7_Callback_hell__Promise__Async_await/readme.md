# Giới thiệu đồng bộ và bất đồng bộ
+ https://codegym.vn/blog/2020/04/29/nguyen-tac-cua-dong-bo-va-bat-dong-bo-trong-javascript/
+ Để xử lí bất đồng bộ Javascript đã phát triển một số cách : `Callback < 2015, Promise(2015) và Async/await(2017).`
+ 

# Promise vs async/await
+ https://ehkoo.com/bai-viet/tat-tan-tat-ve-promise-va-async-await

# Promise (sync(đồng bộ), async(bất đồng bộ)) 
+ Sync: đồng bộ là code chạy từ trên xuống, cái nào viết trước chạy trước, chạy theo luồng tuần tự đồng bộ.
+ Async: chạy bất đồng bộ , viết trước chạy sau. setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame.
  + Sử dụng Callback.
  + Gặp vấn đề callback hell

+ Promise ra đời để xử lí các vấn đề bất đồng bộ gặp callback hell.
+ Promise thực ra là function dùng cho các cv bất đồng bộ.
+ `Tính chất quan trọng nhất của promise là: trong .then nếu không return một promise thì sẽ chạy ngay xuống then phía sau. Nếu return một promise thì phải xử lí xong promise đó và then phía sau là then của promise được return.`

## Promise(Pain)
+ Callback hell : là tình trạng các hàm callback lồng vào nhau ở quá nhiều tầng.
  + Một công việc hiện tại phụ thuộc vào kết quả của công việc trước đó. và liên tục như vậy.
+ Pyramid of doom.

## Promise (concept)
+ Promise: ra đời để tránh callback hell  trong những tác vụ bất đồng bộ nếu callback không hell thì vẫn dùng callback bình thường.
+ Promise có đối số là một excutor function với tham số là hai function resole(), reject().Một trong hai function này phải được gọi trong excutor function nếu không sẽ rò rỉ(lãng phí bộ nhớ).
+ Promise khi khởi tạo sẽ có 3 trạng thái:
  + pendding: không có resolve(), reject() được gọi trong excutor function - rò rỉ bộ nhớ.
  + fulfilled: khi resolve() được gọi.
  + rejected: khi reject() được gọi - fail
## Cách hoạt động sử dụng promise
+ Một đối tượng promise tạo ra sẽ có 3 phương thức then, catch, finally. Cả 3 phương thức này đều nhận đối số là callback nhưng các callback này được thực thi dựa vào excutor function gọi function ntn.
+ Promise chain: tính chất giúp promise giải quyết dược callback hell
+ Promise.resole() : (trả vể promise luôn luôn thành công),
+ Promise.reject(), 
+ Promise.all(): giúp chạy song song các promise, VD cần kết quả của cv1 và cv2 làm cv3 thì cv1, cv2 có thể chạy song song.
