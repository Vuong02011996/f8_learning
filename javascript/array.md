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
