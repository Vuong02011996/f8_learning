# Callback là gì
+ Là hàm
+ Được truyền qua đối số khi gọi hàm khác.
+ Được gọi lại trong hàm nhận đối số.

# Ví dụ Callback với map
```
Array.prototype.map2 = function(callback)
var output = [], arrayLength = this.length; // this chính là mảng gọi tới hàm map2
for (var i = 0; i < arrayLength; i ++)
{
  var result = callback(this[i], i);
  output.push(result);
}

courses = ["JS", "Python"]
var htmls = courses.map2(function(course){
  return `<h2>${course}</h2>`
})

console.log(htmls.join(""))
```
