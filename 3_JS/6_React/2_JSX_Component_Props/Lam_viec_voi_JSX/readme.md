# Làm việc với JSX
## Phần 1
- Xử lí DOM event
- Component do chúng ta định nghĩa phải viết hoa chữ cái đầu
    + Hiển thị component linh hoạt tùy theo ta trả về trong function Component.
    + Tạo một component vừa có thể là thẻ a, vừa có thể là button đa chức năng.
- Boolean, Null, undefined không được render
- Kết hợp toán tử logic để render theo điều kiện

## Phần 2
- Props trong JSX
    + < Yourcomponent
        propName1="String literals"
        propName2={exression}
        />
    + Props default to `true`
    + Spread/rest props
    + Children prop
- Render Props