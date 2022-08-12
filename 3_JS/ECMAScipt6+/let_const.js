// 1. Scope, Code block
// Chỉ có var mới gọi được bên ngoài block, let/const bị lỗi.
{
    var a = 1;
    // let a = 1; lỗi
}
console.log("a: ", a)

// 2. Hosting: đưa khai báo biến lên đầu. var có hổ trợ hosting còn let vs const thì không.
a = 0;
var a;
// let a; lỗi
console.log("a hosting: ", a)

// 3. assignment: const bị lỗi khi gán lại giá trị ; var với let thì không
// const b = 1; lỗi
const b = 0;
b = 100;
console.log("b assignment: ", b)
