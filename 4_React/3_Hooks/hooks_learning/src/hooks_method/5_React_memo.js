
import {useState, useEffect, useRef, memo } from 'react'

// memo(): ghi nhớ - đây không phải là Hook method mà là một Higher Order Component (HOC)

// Hiểu về HOC
/** Trong React sẽ cho ta 3 khái niệm dùng để tránh lặp lại cái logic trong component
 * Ở component ta cần tính năng nào thì lôi vào để dùng. Mỗi thèn sẽ có chức năng và cách dùng ưu nhược điểm khác nhau.
 * Đại loại sẽ đặt tên theo cách dùng
 * 
 * Hooks: móc vào , gắn vào 
 * HOC: component bậc cao, nên sẽ không dùng bên trong component mà wrap lại bên ngoài component(đối số của nó là component)
 * Render props : đã giới thiệu đầu chương react.
 * 
 */

// memo(): ghi nhớ các props của một component để quyết định có re-render lại component đó hay không.
// Nguyên lý hoạt động: (sử dụng ===)Check các props của một component có bị thay đổi hay không, chỉ cần ít nhất một props thay đổi thì sẽ render lại.

// Ứng dụng để tránh rerender lại component con trong một component cha ở các tình huống không cần thiết.
// Nhưng không nên lạm dụng 100% memo cho mọi component: ta phải đánh giá component nào phức tạp ảnh hưởng đến perfomance của
// component cha ta mới dùng.

// Khi code chạy tới component có dùng memo , memo sẽ đón đầu và chạy trước tiên để kiểm tra props có thay đổi hay không
// trước khi cho re-render lại component.

function MemMoHOC()
{
    console.log("re-render")
    return (
        <h1>Hello AE</h1>
    )
}

export default memo(MemMoHOC)
