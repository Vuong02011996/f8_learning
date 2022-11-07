import {useState, useRef, useEffect } from 'react'

// Ref: (reference)  dùng để lưu giá trị qua một tham chiếu bên ngoài một component
    // tương tự như việc khai báo biến bên ngoài component để mỗi lần rerender lại thì biến vẫn giữ giá trị cũ.
    // Ứng dụng để lấy DOM element thật thay cho getElement bằng thuộc tính ref của element.

// useRef là một hàm, và nhận một đối số là gía trị khởi tạo (có thể là bất cứ giá trị gì của JS) nó chỉ lấy 
    // môt lần duy nhất giá trị khởi tạo ở lần đầu tiên component được mounted (render lần đầu)
    // Mỗi khi setState qua useState sẽ dấn đến rerender lại component nhưng useRef thì không set lại giá trị khởi tạo.

    // Hàm useRef sẽ return lại một object có key(property) là current và gía trị của key này mới là giá trị khởi tạo.
    // Giá trị khởi tạo cho useRef chỉ thay đổi khi ta sửa nó thông qua key current và luôn không đổi khi rerender lại component.


// Ví dụ ứng dụng đếm số ngược sau mỗi 1s
// Bấm start sẽ đếm về 0, bấm stop sẽ dừng 


// Vấn đề nếu dùng  chỉ  let TimerId bên trong component
    // trước khi bấm start : TimerId là undefine, app mounted lần đầu.
    // Khi bấm Start , TimerId lấy giá trị setInterval lần đầu tiên và chạy tới setCount sẽ rerender lại component.
    // Khi rerender lại thì lại set lại TimerId mới là undefine chớ không phải giá trị lúc bấm start
        //(VÌ MỖI LẦN RERENDER LẠI THÌ FUNCTION HookRef LẠI LÀ TẠO PHẠM VI MỚI VỚI CODE HOÀN TOÀN MỚI :))
    // Nên khi bấm Stop TimerId không phải giá trị lúc bấm Start.

    // Chú ý nếu ta bấm Start rồi Stop liền trước 1s trước khi rerender lại component thì TimerId vẫn chưa được set lại nên Stop được :)


// Cách khắc phục
// 1. đưa biến TimerId ra ngoài component HookRef (biến global)
    // Nhưng cách này ít dùng vì
    //  - move biến ra ngoài component(tạo closure) là bởi do logic sẽ cần phải duy trì trong vòng đời của component, 
    // nếu move ra closure thì sinh ra nhiều instances của component đó sẽ dùng cùng 1 data(semi global)
    // - a Sơn: theo tư duy React thì mỗi file chỉ nên chứa component còn các biến hằng dùng chung thì ta tạo một file khác rồi import vào.

function HookRef1()
{

    const [count, setCount] = useState(60)

    const refTimerId = useRef(0) // đưa biến refTimerId ra ngoài function component làm tham chiếu.(không thay đổi mỗi khi rerender)
    console.log(refTimerId.current)

    function handleStart()
    {
        refTimerId.current = setInterval(() => {
            setCount(count => count - 1)
        }, 1000)
        console.log("Start: ", refTimerId.current)
    }
    function handleStop()
    {
        clearInterval(refTimerId.current)
        console.log("Stop: ", refTimerId.current)
    }

    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

// Ứng dụng in ra giá trị state hiện tại và trước đó của useState (đôi khi ta cần giá trị trước đó của State để xử lí việc gì đó)

// Flow code chạy như sau(hiểu rõ useState, useEffect, useRef)
    /**
     * Nói chung thì callback trong useEffect sẽ được chạy ngay sau khi JSX return được mounted vào DOM kể cả giá trị deps count
     * chưa thay đổi(chưa bấm start), do đó khi F5 lại ứng dụng thì  preCount.current đã bằng 60(nhưng chưa rerender 
     * lại app nên chưa in ra, mới chỉ in giá trị trước khi JSX mounted vào DOM là undefine, nhưng thực ra hiện tại sau khi F5 thì
     * giá trị preCount.current đã bằng 60)
     *
     * Khi bấm Start m sau 1s sẽ gọi setCount count sẽ bằng 59, console.log count = 59, preCount.current =g 60 và re-render lại component, 
     * hiển thị count = 59, vì count thay đổi nên callback được gọi và gán preCount.current = 59 nhưng chưa log ra.
     * 
     * Sau 1s sau lại gọi setCount và quy trình lặp lại.
     * 
     */
function HookRef2()
{
    const [count, setCount] = useState(60)

    const refTimerId = useRef()
    const preCount = useRef()

    function handleStart()
    {
        refTimerId.current = setInterval(() => {
            setCount(count => count - 1)
        }, 1000)
    }
    function handleStop()
    {
        clearInterval(refTimerId.current)
    }

    // Ta dùng useEffect để mỗi lần deps state thay đổi sẽ nhảy gọi callback ở đây
    useEffect(() => {
        // Mỗi lần count thay đổi ta giá trị hiện tại cho biến lưu giá trị trước hiện tại.
        preCount.current = count
    }, [count])

    console.log("current value: ", count)
    console.log("prev value: ", preCount.current)
    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

// Ví dụ 3: Ứng dụng để lấy DOM element thật thay cho getElement bằng thuộc tính ref của element.
// Ta thường dùng để lấy tọa độ, ,,, các thông số của element, còn để gán sự kiện ta viết trực tiếp lên element luôn

// Rất thích hợp khi element thay đổi thì h1Ref sẽ tự cập nhật lại theo đúng element đã thay đổi.
function HookRef()
{

    const h1Ref = useRef()
    useEffect(() => {
        console.log(h1Ref.current)
        // Ví dụ lấy thông tin tọa độ element
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
    })

    return (
        <div style={{padding: 20}}>
            <h1 ref={h1Ref}>Hello</h1>
        </div>
    )
}

export default HookRef