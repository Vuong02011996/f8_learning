import {useState, useEffect, useRef, memo } from 'react'

// useCallback(): dùng để tránh tạo ra các hàm mới không cần thiết trong component của chúng ta 
// Khi ta tạo các function một cách không kiểm soát trong component sẽ dẫn đến re-render lại component không cần thiết
// mặc dù đã áp dụng react memo 

// Kiến thước cần nắm chắc
// Reference type
// memo(): bài trước
// props: ứng dụng để truyền dữ liệu từ component cha xuống component con.


// Dùng lại ví dụ của bài memo nhưng ta sẽ đem button từ App vào component
// ta thấy vấn để là mỗi lần re-render lại App  sẽ tạo ra một phạm vi mới và hàm handleInrease sẽ là
// một hàm mới (reference type). Do đó mỗi lần bâm click setCount re-render lại App chạy qua memo sẽ
// kiểm tra props onIncrease sẽ thay đổi(mỗi lần lưu mỗi địa chỉ mới(dùng ===))

// Do đó sẽ re-render lại component không cần thiết trong trường hợp truyền hàm từ component cha sang component con.

// Dùng useCallback để khắc phục

// Cách dùng useCallback: dùng ở component cha(App)
// Nhận hai đối số: 
// 1. là hàm ta muốn truyền sang component con.(callback)
// 2. là mảng chứa deps , hoạt động tương tự như useEffect. Nếu trường hợp callback ở đối số thứ nhất có các tham số
// thay đổi mỗi khi truyền vào ta sẽ truyền vào deps để re-render lại component. 

// Cách hoạt động:
// trong lần đầu tiên render , useCallback sẽ tạo ra hàm mới (là đối số thứ nhất) và lưu tham chiếu bên ngoài.
// trong lần thứ hai render lại app, nó sẽ kiểm tra đối số thứ hai có deps thay đổi hay không,
// nếu không có sẽ vẫn giữ nguyên tham chiếu đã tạo ra lần đầu tiên truyền qua component con nên sẽ không rerender lại component.

// Thực tế : useCallback chỉ có ý nghĩa khi dùng memo vì không có memo thì component con luôn luôn bị render lại
// Do đó khi dùng memo và ta truyền các props là kiểu tham chiếu như (object, array, function) thì nên dùng useCallback hết.

// * Cách sử dụng useCallback
// * ở đầy chỉ có một useState, nên chỉ có một lần component render lại
// * Khi render lại thì history thay đổi, dẫn đến currentMenu cũng thay đổi theo mà trong các hàm bên dưới
// * dùng currentMenu, history bên trong nên nếu dùng useCallBack thì các biến này cũng là dependences
// * Nên dùng useCallBack ở đây không hiệu quả.

function HookCallBack({onIncrease})
{
    console.log("re-render")
    return (
        // Thẻ trống là viết tắt của thẻ Fragment
        <>
            <h1>Hello AE</h1>
            <button onClick={onIncrease}>Click me</button>
        </>
        
    )
}

export default memo(HookCallBack)