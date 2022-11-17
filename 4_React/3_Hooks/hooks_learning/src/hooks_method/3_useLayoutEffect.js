import {useState, useLayoutEffect, useEffect} from 'react'

// Mục đích giống useEffect: để thực hiện các side Effect.
// Trong làm việc mỗi khi thực hiện side effect thì mặc định ta dùng useEffect, trong một số trường hợp rất hiếm gặp
// ta dùng useEffect gặp vấn đề về giao diện người dùng ta mới dùng useLayoutEffect nếu giải quyết được.

// useLayoutEffect hoạt giống gần 100% với useEffect ,chỉ khác nhau một xíu về thứ tự thực hiện công việc 

// Vấn đề: Khi setCount lên 4 sẽ render lại app, count đang mang giá trị là 4 chạy tới useEffect, thấy deps count thay đổi,
// sẽ đọc qua hàm callback nhưng chưa chạy callback(async) theo kiến thức cũ thì sẽ render trước khi gọi callback nên giao diện sẽ hiển thị số 4 rất nhanh 
// trước khi gọi callback để set count về 0 và hiển thị số 0
// Nhưng nếu layout không phải là một số mà là nhiều element thì sẽ nhìn rất rõ vấn đề này gây khó chịu cho người dùng

// Do đó ta dùng useLayoutEffect để gọi callback trước rồi mới render ra dữ liệu.(xử lí đồng bộ luôn)


// Phân tích lại thứ tự thực hiện trước khi gọi callback khi dùng useEffect và useLayoutEffect
// useEffect
/**
 * 1. Cập nhật lại state
 * 2. Cập nhật DOM(mutated-chỉ update một thành phần nhỏ một prop của DOM node, .. chớ chưa render lên giao diện để ta nhìn thấy bằng mắt)
 * 3. Render lại UI(lúc này mới cập nhật tất cả DOM lên giao diện để ta nhìn sau khi thay đổi ở bước 2)
 * 4. Gọi cleanup nếu deps thay đổi(async)
 * 5. Gọi useEffect callback(async)
 */

// useLayoutEffect, render ra dữ liệu sau cùng
/**
 * 1. Cập nhật lại state
 * 2. Cập nhật DOM(mutated-chỉ update một thành phần nhỏ một prop của DOM node, ..)
 * 3. Gọi cleanup nếu deps thay đổi(sync)
 * 4. Gọi useEffect callback(sync)
 * 5. Render lại UI
 */

// Ví dụ : đếm số mỗi khi bấm vào button yêu cầu lớn hơn 3 thì quay lại 0, 
// Luôn giữ nguyên tắt là mỗi khi gọi setCount thì sẽ cập nhật lại giao diên
function HookLayoutEffect()
{
    const [count, setCount] = useState(0)

    // ở đây ta ví dụng dùng useEffect để thấy vấn đề
    useLayoutEffect(() => {
        if (count > 3)
        {
            setCount(0)
        }
    }, [count])

    function handleRun()
    {
        // đơn giản ví dụ này ta có thể set điều kiện ở đây rồi set count về 0.
        setCount(count + 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </>
    )
}

export default HookLayoutEffect