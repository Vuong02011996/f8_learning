# Hooks
+ Thực chất là những method, hàm được viết sẵn trong ReactJS, ta sẽ gọi method này trong component mỗi khi dùng.
+ Mỗi hàm có một tính năng và trường hợp cụ thể để sử dụng.
+ Khi làm việc với function component , ta cần những tính năng mà Hooks cung cấp, ta lôi vào sử dụng(gắn vào || Móc vào), dùng bên trong function component này.
+ Được thêm vào React từ phiên bản 16.8.0

# Quy ước, lời khuyên
+ Đặt tên hook bắt đầu bằng `use` (dùng, sử dụng)
+ Chỉ dùng được cho function component không dùng được cho class component nên:
    + Không bị chia logic ra như method trong lifeCycle của class component
    + Không cần sử dụng `this`.
+ Sử dụng Hooks khi nào?
    + Dự án mới => Hooks
    + Dự án cũ giữ nguyên class component có thời gian tối ưu sau.
    + Logic nghiệp vụ cần hướng đối tượng thì có thể dùng class component(FB chưa định xóa bỏ).

+ Có thể kết hợp function component với class component.(Trong class component có thể return JSX chứa function component)

# HOC - bài 5 memo().



