
# Note
+ `{posts.map((post) => {return <li>{post.title}</li>})}` : callback trong map có dấu {} phải return thì map mới trả về mảng data mới.
+ `style={type === tab ? {color: "#ccc", backgroundColor: "#000"}: {}}`: style inline nhanh cho button nào được bấm trong JSX - useEffect.

# DOM event
+ Lấy kích thước màn hình khi scroll: `window.scrollY`
+ Lấy kích thước chiều ngang của trình duyệt: `window.innerWidth`

# Khái niệm quan trọng: 
# expression: 
    + biểu thức: biến, +, ba ngôi, array, object, function, ... nhưng if else/ switchcase không phải là biểu thức không hợp lệ