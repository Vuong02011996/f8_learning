# Array in JS
+ Các phần tử trong mảng có thể có kiểu dữ liệu khác nhau như list python.
+ Kiểu dữ liệu của array là object nếu dùng typeof giống với {}.
+ Array.isArray(): check array khác {}.
+ Index của mảng là số nguyên không âm, khác với python.(array[-1] sai)

# Phươg thức thường sử dụng với mảng.
+ toString(), join(): chuyển array to string(ngược với split ở string.)
+ pop(): xoá phần tử cuối mảng trả về phần tử đã xoá., xoá hết trả về undefine.
+ push(): thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.
+ shift(): xoá phần tử đầu mảng và trả về phần tử đã xoá. 
+ unshift(): thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.
+ splice(index, số lượng xoá): xoá một nhiều phần tử từ index.
+ splice(index, số lượng xoá, phần tử chèn 1, phần tử chèn 2, ...): chèn hoặc vừa chèn vừa xoá phần tử trong array.
+ concat(array2): nối 2 array.
+ slice(idx1, idx2): tách mảng thành mảng con. 

# Phương thức sử dụng với tham số là hàm(call back)
+ foreach(): không return , calls a function for each element in an array. 
+ every()
+ some()
+ find(): 
+ filter(): trả về new array với những element pass qua điều kiện của function. 
+ map(): trả về array mới kích thước như array gọi map với mỗi element được thay đổi qua function.
+ reduce(): returns a single value: the function's accumulated result.
+ ..
```
var courses = [
{
  id: 1,
  name: 'JS',
  coin: 250,
},
{
  id: 2,
  name: 'python',
  coin: 0,
}
];

// foreach(): duyệt qua từng phần tử của mảng
courses.foreach(function(course, index){
  console.log(index, course);
})

// every() Kiểm tra tất cả phần tử trong mảng thoả mản đk nào đó, trả về T/F
var isFree = courses.every(function(course, index){
  console.log(index, course);
  // Sẽ chạy qua từng phần tử trong mảng nếu thoải đều kiện ở dưới thì tiếp tục cho hết rồi return True, còn không return False dừng lại.
  return course.coin === 0;
})

// some() Kiểm tra có 1 phần tử trong mảng thoả mản đk nào đó, trả về T/F
var isFree = courses.some(function(course, index){
  console.log(index, course);
  // Sẽ chạy qua từng phần tử trong mảng nếu thoải đều kiện ở dưới thì return True rồi dừng, còn không chạy tới hết rồi return False.
  return course.coin === 0;
})

// find() tìm kiếm phần tử thoải mãn đk nào đó, chỉ trả về 1 phần tử đầu tiên
var course = courses.find(function(course, index){
  console.log(index, course);
  return course.name === "python";
})

// filter() tìm kiếm tất cả phần tử thoải mãn đk nào đó
var list_course = courses.filter(function(course, index){
  console.log(index, course);
  return course.name === "python";
})

// map() xử lí từng phần tử trong mảng, giống list(map()) in python
function courseHandler(course, index)
{
  return 
    {
      name: `Name: ${course.name}`,
      index: index
    }
}
var newCourses = courses.map(courseHandler)

// reduce() nhận đối số là một function, lặp từng phần tử trong mảng trả về một biến lưu trữ và element hiện tại của mảng
// Ví dụ làm phẳng mảng

var depthArray = [1, 2, [3, 4], 5]
var flatArray = depthArray.reduce(function(flatOut, current_element) {
  return flatOut.concat(current_element);
}, []); // [], giá trị khởi tạo cùng kiểu dữ liệu muốn trả về, nếu không có sẽ lấy phần tử đầu tiên của mảng làm initial.
```
# Method include()
+ Kiểm tra một phần tử có trong mảng hay không
+ Kiểm tra một substring có trong string hay không.
+ Trả về True, False.
