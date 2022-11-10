// Một function bình thường không thể dừng lại khi đang thực thi và sau đó tiếp tục tại nơi nó đã tạm dừng

// generator function thì khác
// + Generator function cũng có thể `dừng thực thi bất cứ thời điểm nào`, 
    // đợi một `điều kiện` nào nó xảy ra rồi mới `tiếp tục thực thi`
// + có thể được `thực thi nhiều lần liên tiếp` mà ngữ cảnh (số lượng biến, giá trị biến, trạng thái các thành phần bên trong hàm ...) 
    // `đều có thể lưu lại` sử dụng sau mỗi phiên.


// Cú pháp
// + Sử dụng dấu * trước tên function để biểu thị đây là general function
// + Sử dụng lệnh yield bên trong để trả về giá trị và tạm dừng việc thực thi hàm

function* goGroceryShopping() {
    console.log('Dừng lại lần 1');
    yield 'hamburger - 🍔';
    console.log('Dừng lại lần 2');
    yield 'meat - 🥩';
}
let result = goGroceryShopping();
console.log("result: ", result) // trả về một Object Generator mà không thực thi phần thân của nó

// Object Generator trả về một object khác có hai thuộc tính (properties) là: done và value
// Nói cách khác Object Generator chính là một iterable

// Ta sử dụng method next() của object Generator.

let result1 = result.next() // ở đây function sẽ thực hiện phần thân 
console.log("result1: ", result1) // ta thấy sau khi thực hiện phần thân sẽ return giá trị ở yield và dùng hàm lại

// Ta gọi next lần thứ hai 
let result2 = result.next() // ở đây sẽ tiếp tục thực thi hàm tại nơi đã dừng lần trước
console.log("result2: ", result2) // và trả vể giá trị của lệnh yield lần thứ hai

// Lần gọi thứ 3
let result3 = result.next()
console.log("result3: ", result3) // trả về {value: undefined, done: true}


// Vì Object Generator là một iterable nên có thể dùng for...of để lặp qua các object.
