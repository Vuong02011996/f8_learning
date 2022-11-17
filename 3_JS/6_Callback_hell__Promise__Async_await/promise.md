# Giới thiệu đồng bộ và bất đồng bộ
+ https://codegym.vn/blog/2020/04/29/nguyen-tac-cua-dong-bo-va-bat-dong-bo-trong-javascript/
+ Để xử lí bất đồng bộ Javascript đã phát triển một số cách : `Callback < 2015, Promise(2015) và Async/await(2017).`

# Promise vs async/await
+ https://ehkoo.com/bai-viet/tat-tan-tat-ve-promise-va-async-await

# Các tính chất cần nhớ về promise
+ Tạo promise bằng `new Promise(truyền function- excutor function)` excutor function sẽ chạy ngay trước cả một new promise được tạo.

+ Một promise thì bên trong bên trong `excutor function` phải gọi một trong hai function `resolve()` hoặc `reject()` nếu không sẽ rò rỉ bộ nhớ.
  + Khi gọi `resolve()` thì sẽ nhảy vào method `.then` và gọi callback, nếu có nhiều `then` liên tiếp(chain promise) thì sẽ chạy lần lượt từng `then`:
    +  `then`: sẽ nhận hai đối số là hai callback, callback đầu tiên sẽ chạy nếu excutor function gọi `resolve()`, callback thứ hai sẽ chạy nếu excutor function gọi `reject()`.
    + Sử dụng `.catch(f)` cũng giống như `.then (null, f)`, nó chỉ là một cách viết tắt (shorthand) 😁.
    + Tham số của callback trong `.then` chính là đối số truyền vào hàm `resolve()`
    + Kết quả trả về của `then` trước là tham số của callback `then` sau.
    + Nếu `then` trước không return một promise thì sẽ chạy ngay xuống `then` phía sau. Nếu return một promise thì phải xử lí xong promise đó và `then` phía sau là `then` của promise được return.

  + Khi gọi `reject()` thì sẽ nhảy vào method `.catch`
    + Tham số của callback trong `.catch` chính là đối số truyền vào hàm `reject()`

+ Promise mà không có logic bên trong excutor function có thể viết :
  + `var promise = Promise.resolve("message success")`
  + `var promise = Promise.reject("message error")`
