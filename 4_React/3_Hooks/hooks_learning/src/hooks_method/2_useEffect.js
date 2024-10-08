import {useState, useEffect} from 'react'

// Khái niệm:  Mounted(lắp vào) / Unmounted(tháo ra) - vòng đời component
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

/** Kiến thức cần nắm trước khi học HookEffect
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

// Ta sử dụng useEffect khi ta muốn thực hiện các side Effect (các công việc phụ bên cạnh việc chính-bất đồng bộ)
// side effect: thuật ngữ chung của lập trình phần mềm, khi có một tác động xảy ra thì dữ liệu thay đổi
// cú pháp: hàm này nhận hai đối số: useEffect(callback, [deps])
// callback: bắt buộc - hàm tự truyền vào, code ở đây để thực hiện các side effect như update DOM, call API,...
// [deps]: mảng chứa những cái phụ thuộc vào mặc dữ liệu: không bắt buộc

// useEffect: kiến thức cốt lõi ở useEffect là biết khi nào callback được gọi 
    // Callback luôn được chạy ngay sau khi JSX của component được mounted, và chạy tiếp hay không tùy thuộc vào ta truyền đối số thứ hai như  thế nào
    // 1. không truyền: callback luôn chạy lại mỗi khi component rerender(thường là gọi setState).
    // 2. truyền mảng rỗng: callback không chạy thêm lần nào nữa.
    // 3.  truyền mảng có deps: callback sẽ chạy lại mỗi khi deps thay đổi (thường là setState nếu deps là state) 


//-------------------------------------------Cách dùng useEffect --------------------------------------------------------------------------

// điểm chốt : callback luôn chạy sau khi render lại DOM. 

// Chia ra để học:
// 1. Khi dùng useEffect và có mỗi callback: useEffect(callback) - gọi callback liên tục khi state thay đổi nên ít dùng
    // - TH này callback còn được gọi mỗi khi component re-render lại.(mỗi lần setState được gọi(render lại App) thì callback sẽ gọi theo -> ít dùng)

// 2. Khi dùng useEffect và có callback với mảng deps rỗng: useEffect(callback, [])
    // - Chỉ gọi callback một lần mỗi khi component được mounted.(chỉ dùng tính chất chung)
    // - Dùng với những logic muốn chạy một lần thì dùng useEffect với mảng rỗng.
// 3. Khi dùng useEffect và có callback với mảng deps: useEffect(callback, [deps])
    // -Callback được gọi lại mỗi khi deps thay đổi giá trị(deps là một biến): khi chương trình chạy tới useEffect nó sẽ kiểm tra giá trị deps trước và
    // sau khi render có thay đổi hay không bằng toán tử 3 dấu === so sánh hai biến, nếu có nó sẽ gọi lại callback.


// Note chung cả 3 TH trên đều có tính chất này:
// 0. nhưng callback chỉ gọi sau khi component đã được thêm vào DOM tức là render JSX trước khi gọi callback

// 1. Cả 3 trường hợp Callback đều được gọi ngay sau khi component mounted vào App (ngay khi đọc tới dòng này <HookEffect/> trong file App.js)
//    Sau khi unmounted cứ mount lại thì callback trong useEffect sẽ được gọi lại.
// 2. Cleanup function luôn được gọi sau khi component unmounted. Cleannup function là hàm được return trong callback useEffect.
// This is why React also cleans up effects from the previous render before running the effects next time https://reactjs.org/docs/hooks-effect.html



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

// ------------------------------------Ứng dụng F8 blog title------------------------------------------------
function HookEffect3()
{   
    const [title, setTitle] = useState('')

    useEffect(()=>{
        document.title = title
    })

    // document.title = title // kết quả vẫn tương tự nếu đặt ở đây nhưng nếu đây là một logic dài thì rất lâu dữ liệu mới được, hoặc một logic làm chặn
    // việc render dữ liệu 
    // do đó ta mới dùng useEffect để xử lí công việc phụ này còn việc chính vẫn là render.
    return (
        <div style={{padding: 20}}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
    )
}

// ---------------Ứng dụng Call API bằng userEffect---------------------------------------------------------
// TH1: Không dùng useEffect, không dùng setState để render lại dữ liệu nên fetch chỉ gọi 1 lần khi chương trình bắt đầu chạy từ trên xuống dưới
// Nhược điểm: kiểu viết lưng chừng bên ngoài như ri mỗi khi chạy lại component thì lại gọi fetch. chưa tính đến việc setState trong component.
// thêm nữa nếu fetch chạy lâu hoặc bị lỗi sẽ làm hỏng công việc chính là render lại dữ liệu ra DOM.

function HookEffect4()
{   
    // fetch trả về một promise là stream data res
    // res.json() lại trả về một promise khác với json data post của chúng ta
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            console.log("Get data success")
            // 
            return res.json()
        })
        // then này là của promise res.json()
        .then((data) => {
            console.log(data)
        })
        .catch(() =>{
            console.log("API lỗi")
        })
    
    return (
        <div style={{padding: 20}}>
            <h1>post data</h1>
        </div>
    )
}

// TH2: Dùng useEffect TH1, không dùng setState để render lại dữ liệu nên fetch chỉ gọi 1 lần vì khi HookEffect được mount vào App thì callback được gọi.
// tính chất chung khi sử dụng useEffect(callback được gọi ngay khi component được mounted), ở đây ta chưa dùng setState lại dữ liệu nên không ảnh hưởng gì cả.
function HookEffect5()
{   
    // fetch trả về một promise là stream data res
    // res.json() lại trả về một promise khác với json data post của chúng ta
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log("Get data success")
                // 
                return res.json()
            })
            // then này là của promise res.json()
            .then((data) => {
                console.log(data)
            })
            .catch(() =>{
                console.log("API lỗi")
            })
    })
    
    return (
        <div style={{padding: 20}}>
            <h1>post data</h1>
        </div>
    )
}

// TH3: Dùng useEffect TH1, Dùng setState để render lại dữ liệu nên sẽ gọi fetch liên tục mỗi khi dữ liệu được render -> có thể đứng máy
// Vì: khi component được mounted sẽ gọi callback, trong callback lại gọi fetch có setPosts render lại dữ liệu mà TH1 thì khi render lại dữ liệu
// thì gọi callback lại gọi fectch có setPosts render lại dữ liệu lại gọi callback.... vòng lặp vô tận nên fetch liên tục. 
// Do đó ta sẽ học dùng useEffect TH2.
function HookEffect6()
{   
    const [posts, setPosts] = useState([])
    // fetch trả về một promise là stream data res
    // res.json() lại trả về một promise khác với json data post của chúng ta
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log("Get data success")
                // 
                return res.json()
            })
            // then này là của promise res.json()
            .then((data) => {
                console.log(data)
                setPosts(data)
            })
            .catch(() =>{
                console.log("API lỗi")
            })
    })

    return (
        <div style={{padding: 20}}>
            {posts.map((post) => {
                <li>{post.title}</li>
            })}
        </div>
    )
}

// TH4: Dùng useEffect TH2, Dùng setState : callback chỉ gọi một lần và không bị gọi lại khi setState render lại dữ liệu 
function HookEffect7()
{   
    const [posts, setPosts] = useState([])
    // fetch trả về một promise là stream data res
    // res.json() lại trả về một promise khác với json data post của chúng ta
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log("Get data success")
                // 
                return res.json()
            })
            // then này là của promise res.json()
            .then((data) => {
                console.log(data)
                setPosts(data)
            })
            .catch(() =>{
                console.log("API lỗi")
            })
    }, [])

    return (
        <div style={{padding: 20}}>
            {posts.map((post) => {return <li>{post.title}</li>})}
        </div>
    )
}

// ----------------Dùng useEffect trường hợp 3, có mảng với các biến/state phụ thuộc.-----------
// Callback được gọi lại mỗi khi deps thay đổi giá trị(deps là một biến)
// Ví dụ xậy dựng một tabar mỗi lần bấm vào tab nào thì sẽ call API và render dữ liệu của API đó.

function HookEffect8()
{   
    const tabs = ["posts", "comments", "albums"]

    const [posts, setPosts] = useState([])
    const [type, setType] = useState("posts")


    
    // [deps] : deps nói chung là một biến, có thể là một props truyền từ ngoài vào, một state của useState, ..
    // Khi chạy tới useEffect sẽ kiểm tra giá trị deps trước khi render và sau khi render có thay đổi hay không nếu thay đổi thì gọi callback.
    // Ở đây code chạy như sau:
    // B1: Code chạy từ trên xuống, lần đầu tiên khi component được mounted nên gặp useEffect sẽ gọi callback callAPI 1 lần
    // B2: Trong callback có setPosts render lại dữ liệu và lại gặp useEffect, useEffect kiểm tra deps trước và sau khi render có thay đổi hay không
        // ở bước này type chưa thay đổi nên callback không được gọi.
    // B3: Sau khi render lại dữ liệu với data nhận từ API ở bước 1. Và chờ khi nào có sự kiện làm thay đổi deps-type thì sẽ gọi callback call API và nhận lại data mới.
    // Khi bấm click vào một trong 3 button, thì sẽ gọi setType và render lại dữ liệu, trong khi render lại dữ liệu tới dòng useEffect thấy deps-type thay đổi
        // nên callback callAPI được gọi và lấy dữ liệu mới render lại lên web.
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((res) => {
                console.log("Get data success")
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setPosts(data)
            })
            .catch(() =>{
                console.log("API lỗi")
            })
    }, [type])

    function handleClick(tab)
    {
        setType(tab)
    }

    return (
        <div style={{padding: 20}}>
            {tabs.map((tab) => 
                <button 
                    key={tab}
                    style={type === tab ? {color: "#fff", backgroundColor: "#333",}: {}}
                    onClick={()=>handleClick(tab)}
                    >
                        {tab}
                </button>
            )}
            {posts.map((post) => {return <li key={post.id}>{post.title || post.name}</li>})}
        </div>
    )
}

//-------------------------------------------End Cách dùng useEffect --------------------------------------------------------------------------

// -----------------------------------------Các ứng dụng với useEffect-------------------------------------------------------------------------
// 1. Ứng dụng với DOM event: Sẽ học 3 cái
//- Cách listen DOM event trong React Component
//- Các vấn đề khi listen DOM event 
//- Cách khắc phục

// Ví dụ 1: Scroll màn hình, khi cuộn xuống trình duyệt một khoảng cách lớn hơn 200px thì hiển thị một button ở góc phải Go To Top
// nhỏ hơn 200px thì ẩn nút đó đi.

// 1.1 Cách dùng DOM event (window.addEventListener) trong React, vì event ta chỉ cần gán một lần duy nhất nên
// Ta phải đưa vào useEffect với đối số thứ hai là mảng rỗng.
// Nếu ta đặt ở ngoài hoặc đưa vào useEffect với một đối số là callback thì event sẽ liên tục gán lại khi re-render lại giao diện nên 
// id event liên tục được tạo ra gây ra rò rỉ bộ nhớ.

// 1.2 Vấn đề: Thực tế component của chúng ta sẽ liên tục được mounted và unmounted nên callback trong useEffect sẽ được gọi lại do đó,
// sẽ cũng gặp vấn đề về rò rỉ bộ nhớ vì mỗi khi gọi lại sẽ tạo một event id mới.

// 1.3 Cách khắc phục dùng cleanup function để gỡ bỏ event ngay trước khi componnent được unmounted.
function HookEffect9()
{
    const tabs = ["posts", "albums", "comments"]
    const [type, setType] = useState("posts")
    const [posts, setPosts] = useState([])
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPosts(data)
            })
            .catch(() => {
                console.log("API lỗi")
            })
    }, [type])

    useEffect(() => {
        function handleScroll()
        {
            setShowGoToTop(window.scrollY > 200)
            console.log("set state")
        }
        window.addEventListener("scroll", handleScroll)
        console.log("mounted - addEventListener")

        // function được return là cleanup function sẽ được gọi mỗi khi component được unmounted để dọn dẹp.
        return () => {
            window.removeEventListener("scroll", handleScroll)
            console.log("Unmounted - removeEventListener")
        }
    }, [])

    return (
        <div style={{padding: 20}}>
            {tabs.map((tab) => {
                return <button
                            key={tab}
                            style = {tab === type ? {color: "#fff", backgroundColor: "#333"}:{}}
                            onClick={() => setType(tab)}
                        >
                        {tab}
                        </button>
            })}
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title || post.name}</li>
                })}
            </ul>
            {showGoToTop && <button style={{position: 'fixed', right: 20, bottom: 50 }}>Go To Top</button>}
        </div>
    )
}

// Ví dụ 2 hiển thị kích thước chiều ngang màn hình(resize), khi thay đổi thì cập nhập lại
function HookEffect10()
{
    const [size, setSize] = useState(window.innerWidth)
    // Dùng sự kiện resize element để update lại state
    // dùng DOM event thì phải đưa vào useEffect và đối số thứ hai là mảng rỗng
    useEffect(() => {
        function handleResize()
        {
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

        // Clean up function
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div style={{padding: 20}}>
            <h1>{size}</h1>
        </div>
    )
}

// Ví dụ 3: Viết một ứng dụng đếm ngược từ 180 về  0
// Sử dụng kiến thức, closure, setInterval, clearInterval, setTimeout, clearTimeout.
// Nếu dùng setInterval và để ngoài useEffect thì mỗi lần gọi setCountDown sẽ re-render lại giao diện là lại gọi setInterval
// lại setCountDown nên một thời gian sẽ chạy không đúng nữa

// Cách khắc phục: Dùng setTimeout hoặc bỏ trong useEffect mảng rỗng để chạy 1 lần.
function HookEffect()
{
    const [countdown, setCountDown] = useState(180)
    
    // dùng setInterval - mặc định hàm setInterval là sau một khoảng thời gian sẽ gọi lại hàm truyền vào
    useEffect(() => {
            const intervalID = setInterval(() => {
                    // setCountDown(countdown - 1) nếu dùng cách này biến countdown được tham chiếu từ bên ngoài nên hàm setInterval có tính chất closure
                    // nên countdown sẽ luôn giữ giá trị 180.
                    setCountDown(prev => prev - 1)

                    // giả sử không cleanup setInterval khi unmounted thì hàm này vẫn chạy ngầm bên trong
                    console.log("Counting ...")
                }, 1000)
            
            // clean up setInterval để unmounted component thì hàm setInterval không còn được chạy
            return () => clearInterval(intervalID)
        }, [])
    

    // Dùng setTimeout thì cần thêm deps để khi deps thay đổi sẽ gọi lại callback.
    // useEffect(() => {
    //     setTimeout(() => {
    //         setCountDown(countdown - 1)
    //     }, 1000)
    // }, [countdown])
    
    return (
        <div style={{padding: 20}}>
            <h1>{countdown}</h1>
        </div>
    )
}

 
export default HookEffect