
# Note
+ `{posts.map((post) => {return <li>{post.title}</li>})}` : callback trong map có dấu {} phải return thì map mới trả về mảng data mới.
+ `style={type === tab ? {color: "#ccc", backgroundColor: "#000"}: {}}`: style inline nhanh cho button nào được bấm trong JSX - useEffect.

+  xoa job dựa vào index chú ý không xóa trực tiếp trên mảng state.jobs: (useReducer)

# DOM event
+ Lấy kích thước màn hình khi scroll: `window.scrollY`
+ Lấy kích thước chiều ngang của trình duyệt: `window.innerWidth`
+ Lấy element thật không dùng getElement  : `ref={nameRef}` dùng thuộc tính ref của element.

# Đặt tên
+ Chú ý quy ước đặt tên props với các hàm thì thêm `on` còn hàm thì thêm `handle`(useCallback)

# Khái niệm quan trọng: 
# expression: 
    + biểu thức: biến, +, ba ngôi, array, object, function, ... nhưng if else/ switchcase không phải là biểu thức không hợp lệ