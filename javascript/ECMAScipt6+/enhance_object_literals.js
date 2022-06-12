// 1. Định nghĩa key value cho object
var name = "Name"
var age = 30
// var info = {
//           name: name,
//           age: age
// }
var info = {
          name,
          age
};
console.log(info)

// 2. Định nghĩa method cho object
var name = "Name"
var age = 30
// var info = {
//           name,
//           age,
//           getName:function() {
//                     return this.name;
//           }
// };
// bỏ luôn :function 
var info = {
          name,
          age,
          getName() {
                    return this.name;
          }
};
console.log(info.getName())


// 3. Định nghĩa key cho object dưới dạng biến . dùng [biến]

var fieldName = "new_name"
var fieldAge = "age"
var info = {
          [fieldAge]: 20,
          [fieldName]: "Name"
}
console.log(info)

