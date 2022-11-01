import {useState, useEffect} from 'react'

// Mounted(lắp vào) / Unmounted(tháo ra)
//1. Mounted: thời điểm đưa component vào sử dụng
//2. Unmounted: thời điểm gỡ component ra không sử dụng nó nữa.

function HookEffect1()
{   
    const [show, setShow] = useState(true)
    return (
        <div style={{padding: 20}}>

            <button onClick={() => setShow(!show)}>Toggle</button>

            <h1>{show && "Hello"}</h1>
        </div>
    )
}

/** Kiến thức cần nắm khi học HookEffect
 * Events: Add/remove event listener
 * Observer pattern: Subcribe/ Unsubcribe - triển khai mở rộng của add/remove event listener
 * Closure: hàm đóng
 * Timers: setInterval, setTimeout, clearInterval, clearTimeout
 * useState
 * Mounted/Unmounted
 * ===
 * Call API  
 */

/**Ví dụ : dùng useEffect để dùng trong các ứng dụng sau
 * 1. Update Dom - F8 blog title
 * 2. Call API
 * 3. Listen DOM event
 *  - Scroll
 *  - Resize
 * 4. Cleanup 
 *  - Remove Listen / Unsubcribe 
 *  - Clear timer
 */

// Ta sử dụng useEffect khi ta muốn thực hiện các side Effect (các công việc phụ bên cạnh việc chính)
// side effect: thuật ngữ chung của lập trình phần mềm, khi có một tác động xảy ra thì dữ liệu thay đổi
// cú pháp: hàm này nhận hai đối số: useEffect(callback, [deps])
// callback: bắt buộc - hàm tự truyền vào, code ở đây để thực hiện các side effect như update DOM, call API,...
// [deps]: mảng chứa những cái phụ thuộc vào mặc dữ liệu: không bắt buộc

// Chia ra để học:
// 1. Khi dùng useEffect và có mỗi callback: useEffect(callback) - ít dùng
    // - TH này callback còn được gọi mỗi khi component re-render lại.
    // - Nhưng callback chỉ gọi sau khi component đã được thêm vào DOM
// 2. Khi dùng useEffect và có callback với mảng deps rỗng: useEffect(callback, [])
// 3. Khi dùng useEffect và có callback với mảng deps: useEffect(callback, [deps])

// Note:
// 1. Cả 3 trường hợp Callback đều được gọi sau khi component mounted(tức là đã render jsx trả về lên web) 
//    Sau khi unmounted cứ mount lại thì callback trong useEffect sẽ được gọi lại


// TH1 chỉ có callback
function HookEffect2()
{   
    const [show, setShow] = useState(true)

    useEffect(() => {
        // TH1: Cứ khi nào render lại dữ liệu thì Callback này được gọi ngay.
        // render luôn in ra trước mounted. useEffect nhận đối số là callback nhưng chưa thực thi, khi nào dữ liệu đã được render
        // hoặc component được mounted thì mới chạy callback.

        // Do đó nếu trong callback ta viết một logic phức tạp và chạy lâu thì cũng không ảnh hưởng đến việc render dữ liệu lên người dùng
        // Việc render là việc chính, còn logic trong callback chỉ là phụ - side effect.
        console.log("mounted")
    })

    return (
        <div style={{padding: 20}}>

            <button onClick={() => setShow(!show)}>Toggle</button>
            <h1>{show && "Hello"}</h1>
            {console.log("render")}
        </div>
    )
}

// Ứng dùng F8 blog title
function HookEffect()
{   
    const [title, setTitle] = useState('')

    useEffect(()=>{
        document.title = title
    })

    // document.title = title // kết quả vẫn tương tự nếu đặt ở đây nhưng nếu đây là một logic dài thì rất lâu giữ liệu mới được
    // render do đó ta mới dùng useEffect để xử lí công việc phụ này còn việc chính vẫn là render.
    return (
        <div style={{padding: 20}}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )
}

export default HookEffect