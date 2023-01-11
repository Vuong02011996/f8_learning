import {useState} from "react" 


// Luôn nắm nguyên tắc: là môi khi gọi setState xong thì code sẽ chạy lại từ file App để render lại giao diên.
// Mỗi khi giao diện người dùng re-render lại thì nghĩ ngay đến useState().
// useState: Phải nắm và diễn tả được cách code chạy như nào qua từng ví dụ
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
    // <React.StrictMode>  do file index.js sử dụng cái này để check syntax trước nên re-render được in ra 2 lần.
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

function HookState2()
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

//--------One-way Binding(mặc định trong React JS) , Two-way Binding(V-model mặc định trong Vju JS) --------------------------------
//  
// Ràng buộc một chiều và ràng buộc hai chiều ở đây đang nói về việc xử lí dữ liệu trong form
// Khi code JS thuần ta sẽ lấy dữ liệu từ người dùng trên web bằng cách get element trong DOM rồi chọc vào property value 
// Khi làm việc với các framework JS thì nói không với các thao tác trên. Mà ta chỉ xử lí dữ liệu bằng One-way bindind, Two-way binding

// One-way binding 
// Khi ta thay đổi dữ liệu trên web, thêm dữ liệu vào thẻ input thì trong component có một state mà state này có giá trị
// thay đổi tương ứng với giá trị gõ vào trên web thì gọi là One way binding.

// Two-way binding
// Ta vừa thay đổi trên web dữ liệu ở state component thay đổi, lại vừa thay đổi dữ liệu dưới component thì trên web cũng thay đổi theo
// thì gọi là Two-way binding.

// Thực hiện được 1 trong 2 chiều gọi là One-way binding, thay đổi cả hai chiều gọi là Two way binding.


// 1. Ví dụ One way binding , khi dữ liệu trên web thay đổi thì state trong component thay đổi theo
// Nhưng khi thay đổi dữ liệu state trong component thì dữ liệu trên web vẫn không thay đổi => One way binding
function HookState3()
{
    // Ta có thể lấy dữ liệu từ thẻ input bằng useState
    // Mỗi lần hàm setValue được gọi thì sẽ gọi lại App bên ngoài, nên mỗi lần onchange thì App sẽ được render lại liên tục.
    const [value_input, setValue] = useState("")
    console.log(value_input)

    // Chú ý các sự kiện onClick, onChange chỉ nhận một hàm rồi khi thực hiện sự kiện mới thực hiện hàm
    // Chớ không phải gọi hàm luôn.
    return (
        <div style={{padding: 32}}> 
            <input onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => setValue("New Value")}>Change</button>
        </div>
    )
    // Console thì value_input đã là New Value nhưng giá trị thẻ input vẫn không thay đổi theo -> One way binding
}

// 2. Ví dụ Two way binding
// Two way biding: Khi input thay đổi thì state thay đổi, khi state thay đổi thì input cũng thay đổi.

// Khi dữ liệu state thay đổi thì dữ liệu trên web cũng thay đổi theo và ngược lại thì là Two-way binding
// Ta xử lí bằng cách mỗi lần state value_input thay đổi thì set lại value(value={value_input}) cho thẻ input thay đổi theo.

// Chỉ cần mất đi một chiều là one way binding.
function HookState4()
{
    const [value_input, setValue] = useState("")
    console.log(value_input)

    return (
        <div style={{padding: 32}}> 
            
            <input
            // chiều thứ 2 khi click vào button gọi setValue render lại value_input thay đổi  thì value input cũng thay đôi
                value={value_input}
            // CHiều thứ nhất: khi input thay đổi thì state value_input cũng thay đổi theo
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => setValue("New Value")}>Change</button>
        </div>
    )
}

// Ứng dụng 1: Sử dụng submit form không cần phải get lại element rồi chọc vô thuộc tính value mỗi khi dữ liệu trên web thay đổi
// mà ta sẽ lấy thẳng dữ liệu ở state của component, sẽ tự cập nhật mỗi khi dữ liệu trên web thay đổi.
function HookState5()
{
    // Ví dụ ta có hai thẻ input là name và email
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    function handleSubmit()
    {
        // Call API
        // Ở đây ta có thể lấy giữ liệu name, email mỗi khi bấm submit
        console.log({
            name,
            email
        })
    }

    return (
        <div style={{padding: 32}}> 
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

// Làm việc với form thì thẻ input là dễ nhất, khó hơn là radio, checkbox
// Ứng dụng Two-way binding để lấy dữ liệu từ radio và checkbox


//--------------------------------------------lấy dữ liệu từ radio----------------------------------------------------------


// Ứng dụng Two-way binding của useState để lấy dữ liệu trong radio box
// Thực tế ta cần truyền id của checkbox để gọi API làm việc

// Chiều thứ nhất khi check radio nào thì set State cho đúng id của checkbox đó
const courses = [
    {
        id: 1,
        name: "Math",
    },
    {
        id: 2,
        name: "English",
    },
    {
        id: 3,
        name: "Physics",
    }
]

function HookState6()
{
    // mặc định ban đầu ta set radio đầu tiên được check
    const [id_checked, setId] = useState(1)
    console.log(id_checked)

    // onChange={() => setId(course.id)
    // Khi ta tick vào radio box, xảy ra sự kiện onChange, khi đó ta sẽ set state mới id_checked chính là Id của course được check
    // ta console ra thì id_checked (state của component) đã thay đổi => One way binding
    // Nhưng trên web vẫn lưu checked của tất cả id được check. Do đó ta cần thêm đều kiện để khi state thay đổi thì dữ liệu trên
    // web cũng thay đổi theo bằng thuộc tính checked của thẻ input, checked={id_checked === course.id} => Two way binding.

    // Chú ý : nếu radio được check thì checked là true. 
    function handleSubmit()
    {
        // Call API
        console.log({id: id_checked})

    }

    return (
        <div style={{padding: 20}}>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input 
                            type="radio"
                            checked={id_checked === course.id}
                            onChange={() => setId(course.id)}
                        />
                        {course.name}
                    </div>
                )
            })}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

//--------------------------------------------lấy dữ liệu từ checkbox----------------------------------------------------------

// Lấy dữ liệu checkbox: cho được chọn nhiều, và khi click vào cái đang chọn thì phải bỏ chọn

// Chú ý:
// onChange={() => handleChecked(course.id)} : vì các sự kiện này chỉ cho truyền hàm chứ không phải gọi hàm 
// nên muốn truyền tham số course.id cho callback thì phải lồng bên ngoài bằng arrow function.
function HookState7()
{

    const [list_checked, setSelected] = useState([])
    console.log(list_checked)
    function handleClick()
    {
        // Call API
        console.log(list_checked)
    }

    function handleChecked(id_checked)
    {
        // prev chính là list_checked của state hiện tại
        setSelected((prev) => {

            // check id hiện tại của mảng course có đang được checked hay không, nếu có thì bỏ checked 
            if(list_checked.includes(id_checked))
            {
                // filter trả về tất cả phần tử thỏa mãn đk nào đó
                // ở đây trả về mảng các id khác với id hiện tại, vì id này được bỏ check
                return list_checked.filter(x => x!== id_checked)
            }
            // ngược lại id hiện tại chưa được check thì thêm id vào list_checked
            else
            {
                return [...prev, id_checked]
            }
        })
    }

    return (
        <div style={{padding: 20}}>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input 
                            type="checkbox"
                            checked={list_checked.includes(course.id)}
                            onChange={() => handleChecked(course.id)}
                        />
                        {course.name}
                    </div>
                )
            })}
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

// -------------------------------------ứng dụng todo list đơn giản sử dụng useState --------------------------------
// Có thẻ input ta nhập công việc, button Add, mỗi khi bấm Add thì ta render value ở thẻ input vào danh sách li
// Dùng Two-way binding

// Tư duy: Ta phải có một mảng lưu danh sách các công việc mỗi lần bấm Add thì setState lại mảng đó (thêm công việc vào) và render lại
// Thêm nữa mỗi lần thay đổi trên input ta cần có một state khác để lưu lại giá trị input.

function HookState8()
{
    // localStorage.getItem('jobs') chỉ là string nên thêm JSON.parse để parse lại array
    // initJobs ?? []: ?? check trường hợp initJobs là null hoặc undefined.

    // ở đây mỗi khi render lại sẽ chạy lại code lấy dữ liệu từ Storage nhưng việc nay chỉ nên làm duy nhất lần đầu nên ta đem vô
    // callback ở initial State, và useState sẽ nhận giá trị return của callback làm giá trị khởi tạo
    

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const initJobs = JSON.parse(localStorage.getItem('jobs'));
        return initJobs ?? []
    })

    function handleClick()
    {
        // Call API
        setJobs((prev) => {
            const newJobs = [...prev, job]

            const jsonJobs = JSON.stringify(newJobs)
            // lưu vào local storage , ("id", json)
            localStorage.setItem('jobs', jsonJobs)

            return newJobs
        })
        // để khi render lại chỗ value = {job} thì sẽ xóa job trước đó.
        setJob('')

        // Chú ý: hàm setJobs sau khi chạy sẽ không add job vào jobs ngay lập tức mà phải lên lịch trình rồi chờ khi nào gọi lại App 
        // thì mới add job vào jobs, console jobs ở đây ta thấy dữ liệu luôn chậm hơn một bước., dữ liệu thì render ra rồi mà console.log
        // ở đây vẫn chưa có dữ liệu vì render App trước rồi mới add jobs nên console ở đây click lần sau mới thấy lần trước.
        console.log(jobs)
    }

    return (
        <div style={{padding: 20}}>
            <input
                value = {job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button onClick={handleClick}>Add</button>

            <ul>
                {jobs.map(((job, index) => 
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}

const HookState = HookState4
export default HookState