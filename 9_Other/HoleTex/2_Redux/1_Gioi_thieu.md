# Redux

-   Là thư viện js dùng để quản lý và cập nhật state của ứng dụng.
-   Redux là một PATTERN(khuôn mẫu)

# Vì sao phải sử dụng Redux(core)?

-   Quản lý global state:
    -   Các components ở mọi nơi có thể truy xuất và cập nhật
    -   Giải quyết vấn đề của React khi muốn truyền dữ liệu vào các cấp con cháu.
-   Dễ dàng debug
-   Xử lý caching dữ liệu từ phía server.

# Vì sao phải sử dụng Redux Toolkit?

-   Redux Toolkit là một thư viện js bọc bên ngoài Redux core , nó chứa các function và package cần thiết để sử dụng vs redux.
-   Không cần cài đặt riêng lẻ nhiều package để sử dụng redux, chỉ cần cài redux toolkit.
-   Giải quyết các vấn đề đối với sử dụng redux core.
    -   Việc cấu hình redux phức tạp.
    -   Phải cài đặt thủ công nhiều package để redux hoạt động hiệu quả.
    -   Redux yêu cầu nhiều boilerplate code(code lập đi lặp lại)

# Khi nào nên sử dụng redux?

-   Hữu dụng vs các trường hợp sau đây:
    -   Dự án có số lượng state lớn và cập nhật ở nhiều nới.
    -   State được cập nhật thường xuyên, logic cập nhập phức tạp(gọi api)
    -   Số lượng code trung bình hoặc lớn có nhiều người làm chung.
        ...
-   Không phải lúc nào cũng sử dụng redux.
