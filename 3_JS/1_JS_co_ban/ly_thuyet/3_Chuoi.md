# Tạo chuỗi 2 cách
+ var name  = 'Name'
+ var name  = new String("Name") -> kiểu data object.
+ Sử dụng cách 1: vì nhanh hơn, kiểu dữ liệu cách 2 là object.

# Trường hợp sử  dụng backslash.
+ var name = "Toi bị \"dien\"";

# Xem độ dài chuỗi
+ name.length

# Template string ES6(2015)
+ Thay vì viết cộng nhiều khi xấu.
+ Biến đưa vào $ là string, không sẽ tự động chuyển về string.
    ```
    var firstName = "Toi";
    var lastName = "La";
    var fullName = `Ten là: $(firstName) $(lastName)`
    ```

# String methods.
+ mystring = 'Hoc JS tại F8!';
## Length
+ mystring.length()
## Find Index: indexOf
+ mystring.indexOf('JS', vị tri băt dau tim kiem)) -> 4: find index.
+ mystring.lastIndexOf('JS')) -> 4: find index.
+ mystring.search('JS')) -> 4: find index.
## Cut String: slice
+ mystring.slice(start, end)
+ mystring.slice(start): cắt từ start tới hết.
+ số  âm từ phải sang trái.

## Replace
+ mystring.replace("JS", "javascript"): replace 1 JS
+ mystring.replace(/JS/g, "javascript"): Biểu thức chính quy replace tất cả JS 

## Convert upper case, lower case.
+ mystring.toUpperCase()
+ mystring.toLowerCase()

## Trim
+ Hữu ích khi xử lí dữ liệu người dùng đưa vào.
+ Loại bỏ khoảng trắng thừa.
+ mystring.trim()

## Split
+ Cắt chuỗi thành array.
+ Dùng điểm chung để  tách string.
+ mystring.split(",").

# Get a character by index.
+ mystring.charAt(0) -> H
+ mystring[0] -> H.