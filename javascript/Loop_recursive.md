# Các cú pháp vòng lặp trong JS
1. for - lặp với điều kiện đúng.
2. for/in - lặp qua key của đối tượng
3. for/of - lặp qua value của đối tượng.
4. while - lặp khi điều kiện đúng
5. do/while - lặp ít nhất 1 lần, lặp tiếp khi điều kiện đúng.

# For
```
for(var i = 0; i <= 10; i ++)
{
  console.log("i");
}
```

# For .. in
```
// Dùng với object
var my_Object =
{
  name: "myName";
  age: 20
}
for (var key in my_Object)
{
  // key dạng string
  console.log(key);
  console.log(my_Object[keyư);
}
```

# For .. of.
+ Dùng như for .. in nhưng không dùng được với object.(không dùng đk với key .. value)
+ Cần thay đổi một xíu nếu dùng với object lặp qua key: Object.keys(my_Object), lặp qua value Object.values(my_Object)

# While
# Do while
+ Luôn chạy 1 lần trước khi kiểm tra điều kiện.(khác for vs while)
```
var i = 0;
do {
  i++;
  console.log(i)
} while(i < 10);
```

# Recursive( Đệ quy)
+ Hàm gọi chính nó bên trong
+ Chú ý khi dùng đệ quy để khỏi lặp vô tận
  + Xác định điểm dừng
  + Logic để tạo ra điểm dừng
```
// countdown
function countDown(num)
{
  if (num > 0)
  { 
    // loop
    console.log(num);
    return countDown(num-1);
  }
  return num
}

countDown(3) // 3 2 1


```








