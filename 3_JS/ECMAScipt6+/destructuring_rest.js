// Array 
var array = [1, 2, 3]

var [a, b, c] = array;
// a = 1, b = 2, c = 3
var [a, ...rest] = array; // rest tên array còn lại , đặt như nào cũng oke 
console.log(a)
console.log(rest)

var object = {
          name: "Name",
          age: 20,
          info: {
                    name: "school",
                    score: 2
          }
}

var {name, age} = object; // Object phải đặt đúng với tên field

var {name, ...rest} = object;

var {name: parentName, info: {name: childrenName}} = object // có thể đổi tên sau dấu : , và lấy object con bên trong
console.log(name)
console.log(rest)
console.log(parentName)
console.log(childrenName)

function logger(a, ...params){
          console.log(params) // params có kiểu là array[2, 3]
}
logger(1, 2, 3)