import {useState} from "react" 

// useState
/**
 * Khi dữ liệu thay đổi từ giá trị này sang giá trị kia gọi là State của dữ liệu.
 * + useState: giúp dữ liệu thay đổi gì dữ liệu thay đổi đó(đơn giản hóa việc render dữ liệu)
 * + Code thuần: muốn thay đổi chữ chuối Nguyễn Văn A trên web ta phải getElement rồi innerText hoặc
 * textContent lại chuỗi mới. Với useState ta chỉ cần thay đổi giá trị Nguyễn Văn A là giao diện tự thay đổi.
 * 
 * Dùng khi nào?
 * Khi muốn dữ liệu thay đổi thì giao diện tự động cập nhật lại.
 * @returns 
 */

//1.  Cách dùng

function HookState1()
{
    // const [state, setState] = useState(initState)
    // giá trị trả về dùng destructuring lấy hai phần tử đầu tiên của mảng 

    // Đối số: initState - giá trị khởi tạo chỉ dùng một lần trong lần đầu truyền vào

    // Trả về mảng hai phần tử 
    // state: Trong lần đầu tiên sẽ lấy giá trị khởi tạo đưa cho state.
    // setState: phần tử thứ hai là một hàm dùng để set lại state, truyền vào giá trị gì thì state mới
    // nhận giá trị đó(trả về đúng giá trị đã truyền vào và gán cho state trong [state, setState]) và hiển thị lên giao diện


    // Cách đọc code và hoạt động
    // Bắt đầu:
    // Trong file App.js hàm App có React.createElement nhận type là function HookState nên chạy hàm này là lấy giá trị trả về
    // Trong hàm HookState đọc code từ trên xuống
        // dòng : giá trị khởi tạo là 1 nên counter là 1
        // dòng : tạo ra một hàm
        // tới dòng <h1>{counter}</h1>: nhận counter là 1 nên render là 1
        // Khi bấm vào button sẽ gọi hàm handleClick nên đoạn code bên trong sẽ được thực thi
            // Bên trong lại thực thi hàm setCounter và lấy giá trị counter+1 = 2 set lại cho counter.
            // Sau khi setCounter thì React sẽ gọi lại hàm(component) App ở file App.js ta lại đọc code lại 
            // từ chỗ  Bắt đầu và render lại counter = 2 lên giao diện ở dòng <h1>{counter}</h1>

            // Từ lần thứ hai hàm setCounter sẽ không lấy giá trị khởi tạo nữa mà lấy counter set lần trước.



    // Lưu ý :
        // + Component App được render lại ngay sau khi chạy hàm setState.(nhưng trong TH setState liên tục trong một hàm
        // thì React có cơ chế lịch trình chỉ render 1 lần)
        // + Hàm setState có thể nhận đối số là callback., hàm setState sẽ đưa vô cho callBack một đối số là state set trước đó(giá trị hiện tại State).
        // + initState có thể truyền callBack nhưng mà chỉ lấy giá trị trả về của callBack để làm giá trị khởi tạo


    
        // Ví dụ đếm số, click vào button thì số tự động tăng lên trên giao diện 

    // Bắt đầu đếm từ số 1 
    const [counter, setCounter] = useState(1)

    function handleClick()
    {
        // setCounter(pre_counter)
        // setCounter(pre_counter)
        // Nếu ta gọi setCounter 2 lần thì counter mới trả về của hàm setCounter vẫn không thay đổi vì ta 
        // truyền chung một giá trị pre_counter cho cả hai lần 
        // Hàm setCounter chỉ nhận một tham số (state mới) và gán cho counter trong[counter, setCounter] giá trị mới này

        // Đặc biệt hàm setState nhận đối số là một callback và gọi hàm đó bên trong với đối số là state đưa vào
        // nên ta có thể thay đổi state mới thông qua callback đó.

        // setState đưa cho callBack đối dố là state set trước đó(giá trị hiện tại)
        // pre_counter chính là đối số của Callback chính là counter hiện tại của useState
        setCounter(pre_counter => pre_counter + 1)
        setCounter(pre_counter => pre_counter + 1)
        setCounter(pre_counter => pre_counter + 1)
        setCounter(pre_counter => pre_counter + 1)
    }
    // Gọi setCounter nhiều lần nhưng React chỉ tạo ra một stack, lịch làm việc rồi gọi lại component App một lần
    console.log("re-render")

    return (
        <div style={{padding: 20}}>
            <h1>{counter}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

// 2.  Thực hành
/**
 * Random Gift
 * One-way Binding , Two-way Binding
 * TodoList 
 */

// Ví dụ Random Gift
// Khi chưa bấm lấy thưởng thì hiển thị Chưa có phần thưởng
// Khi bấm vào sẽ random và hiển thị lên thẻ h1 một trong 3 phần thưởng trong mảng sau

const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'RGB Keyboard'
]

function HookState1()
{
    const [gift, setGift] = useState('')

    function handleClick()
    {
        // Ý tưởng
        // Nếu click vô button sẽ random một con số 0->length mảng và lấy con số đó làm index để random một giá trị trong mảng
        // đem giá trị đó set lại State cho h1
        // Một số từ 0*3 < x * 3 < 1*3 
        const index = Math.floor(Math.random() * gifts.length)
        setGift(gifts[index])
    }

    return (
        <div style={{padding: 32}}> 
            <h1>{gift || "Chưa có phần thưởng"}</h1>
            <button onClick={handleClick}>Lấy thưởng</button>
        </div>
    )
}

//--------------------------------------------------------------------------------------------------------------------------------
//  One-way Binding(React JS) , Two-way Binding(Vju JS) 
// Ràng buộc một chiều và ràng buộc hai chiều ở đây đang nói về việc xử lí dữ liệu trong form
// 

function HookState()
{
    return (
        <div style={{padding: 32}}> 
            <input />
        </div>
    )
}
export default HookState