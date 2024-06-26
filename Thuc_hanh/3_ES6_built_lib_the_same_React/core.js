
// ------------------------Function html để viết template View----------------------------------------------

// Một đặc điểm không thể thiếu của thư viện FE là một template engine để  viết được phần View. 
// (ở đây chế bằng template string)

const cars = ["BMW", "Porsche", "Mercedes"]

// var isSuccess = true in ra Thành công.
// Vấn đề 2 in h1 ra fasle , mong muốn false thì không in ra
var isSuccess = false

const output = `
    <h1> ${isSuccess && "Thành công"}</h1>
    <ul>
        ${cars.map(car => `<li> ${car}</li>`)}
    </ul>
`
console.log(output)
{/* <ul>
<li> BMW</li>,<li> Porsche</li>,<li> Mercedes</li>
</ul> */}

// Hàm map nhận đối số là callback(tham số là từng phần tử trong mảng - viết gọn theo ES6),
// trả về mảng mới số lượng phần tử như mảng ban đầu có thêm thẻ li hai bên.

// Vấn đề 1: ${cars.map(car => `<li> ${car}</li>`).join("")} để loại bỏ các dấu , giữa các phần tử mảng
// sử dụng map rất nhiều lặp lại thèn join.

// 3 Vấn đề  trên của một view engine nên phải viết lại hàm html sử dụng Tagged template literals


function html_step1(array_tagged_template_literals, ...rest_array_tagged) {
    console.log("array_tagged_template_literals: ", array_tagged_template_literals) // ['\n    <h1> ', '</h1>\n    <ul>\n        ', '\n    </ul>\n']
    // Dùng Tagged template literals: hàm html có từ hai đối số trớ lên
    //1. array_tagged_template_literals: là mảng các phần tử ngăn cách bởi dấu ${}
    
    console.log("rest_array_tagged: ", rest_array_tagged) // [false, ['<li> BMW</li>', '<li> Porsche</li>', '<li> Mercedes</li>']]
    //2. rest_array_tagged: nếu không dùng rest thì các tham số tiếp theo là các giá trị của ${}(biến nội suy)
    // ở đây dùng rest cho các tham số tiếp theo nên ta có mảng như trên.
}

function html_step2([first, ...strings], ...rest_array_tagged) {
    console.log(first) // string  <h1> 
    console.log(strings) // ['</h1>\n    <ul>\n        ', '\n    </ul>\n']
    // Ở đây tiếp tục dùng destructuring và rest destructuring cho array_tagged_template_literals
    // first: phần tử đầu tiên mảng
    // strings: các phần tử còn lại của mảngrest_array_tagged
    // Chú ý length của strings luôn bằng length của rest_array_tagged lặp 1 mảng cũng như lặp 2 mảng này
}

function html_step3([first, ...strings], ...values) {
    return values.reduce(
        (acc, curren_value, index) => acc.concat(curren_value, strings.shift()),
        [first]
    )
    // Dùng reduce () với giá trị khởi tạo là mảng [first] sau đó concat các phần tử lại
    // strings.shift() lấy và xóa luôn phần tử đầu tiên của mảng, <=> strings[index]
    // ['\n    <h1> ', false, '</h1>\n    <ul>\n        ', '<li> BMW</li>', '<li> Porsche</li>', '<li> Mercedes</li>', '\n    </ul>\n']
}

function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, curren_value) => acc.concat(curren_value, strings.shift()),
        [first]
    )
    // lặp qua từng phần tử  của mảng hàm reduce() return trả về
    // loại bỏ những phần tử  boolean là false, null, ..(6 kiểu dữ liệu falsy), bỏ luôn true, giữ lại số 0
    .filter(x => x && x !==true || x === 0) 
    .join("")
   
}

export default html // hàm html dùng nhiều hơn nên dùng default

// ------------------------End Function html để viết template View----------------------------------------------




// Tiếp theo viết phần Store
// Đây là phần quan trọng nhất để lấy dữ liệu cho View 
/**
 * Nguyên tắc là nhận giá trị từ Reducers nên sẽ truyền một callback reducer vào store để  gọi lấy dữ liệu từ reduce
 * Chú ý: thư viện chỉ có hai thành phần chính là View html ở trên và createStore bên dưới còn reduce ta viết bên ngoài.
 * Dữ liệu trong Store gọi là state(trạng thái)
 */

// Nhận đối số là callback reducer để gọi lại lấy dữ liệu từ Reducers

//? cách export thường một function ? không trực tiếp mà viết xong mới export
export function createStore(reducer)
{
    // dữ liệu trong store gọi là state, lấy dữ liệu khởi tạo ban đầu từ Reducers
    let state = reducer()

    //1. Viết hàm render các component lên View

    // Các thành phần(component) sẽ được đẩy (innerHTML) tới thẻ root để hiển thị lên View
    // roots là những element gốc(ở đây chỉ có thẻ root) , dùng DOM lấy element này và lưu vào roots
    // Map là một object đặc biệt, có tính chất lặp qua và có thể đặc key bằng bất kể dữ liệu nào
    // kể  cả element, element là object muốn object làm key được thì dùng Map, object thường key chỉ là string. 

    const roots = new Map() // đầu tiên size = 0, không có element nào trong roots. 

    function render()
    {
        for (const [root, component] of roots)
        {
            // Lặp qua tất cả các element gốc và thêm html của các thành phần cần thêm vào từng root tương ứng
            // root là element gốc
            // component là callback function trả về các html_component
            // component() ở đây chính là App(), có bao nhiêu app bấy nhiêu component được tạo ra.
            const html_component = component()
            root.innerHTML = html_component
            console.log("html_component", html_component)
            console.log("root", root)
        }
    }

    // 2. Viết các phương thức để làm việc với Store

    // attach: Khi attach được gọi nó sẽ nhận từng html_component đẩy qua root tương ứng và render lên View
    // component ở đây là callback function trả về html_component sẽ được gọi lại lúc render()
    // component chính là App truyền trong attach của file script.js
    function attach(component, root)
    {   
        // Roots ở trên dùng Map nên ở đây dùng phương thức set của nó
        // object thường sẽ dùng roots{root: component}
        roots.set(root, component)
        // Khi set xong thì roots sẽ có dữ liệu và gọi render để  hiển thị lên giao diện
        render()
    }


    //connect:  Store và View nằm ở xa nhau nên cần một phương phức kết nối 
    // View có rất nhiều element, mà đôi khi chỉ cần lấy vài dữ liệu từ Store nên truyền vào selector cần hiển thị ở Views
    // selector = state => state: là một callback dùng để lựa chọn một dữ liệu cụ thể ở Store, vì
    // mặc định nhận đối số là một object(state) và trả về luôn object đó(state) ta lấy tất cả dữ liệu state ban đầu trong Store làm mặc định
    //  Thực tế ta có thể chỉnh sửa thay đổi slector function để lấy ra dữ liệu cần View tử Store

    // hàm connect sẽ return lại một hàm nhận đối số là callback component của chúng ta(App())
    // hàm này lại return một arrow function khác có tham số là 
    // props:  những dữ liệu muốn truyền vào component sau này 
    // ...args: rest nhận tất cả đối số còn lại của function này
    // function này sẽ chạy callback component() của đối số hàm bên ngoài và truyền tất cả các tham số bên ngoài vào.
    // Dùng Object.assign để merge hết tham số vào một object.
    function connect(selector = state => state) // gán tham số cho arrow function
    {
        // Phút 26-30 chưa hiểu
        // Hàm connect mục đích là chạy lại component với trạng thái mới.
        return component => (props, ...args) => component(Object.assign({}, props, selector(state), ...args))

    }

    function connect2(selector = state => state) // gán tham số cho arrow function
    {
        function abc(component)
        {
            function xyz(props, ...args)
            {
                return component(Object.assign({}, props, selector(state), ...args))
            }
            return xyz
        }
        return abc
    }
    // hàm connect lấy dữ liệu state từ store đưa qua component nên giúp hiển thị lên view được


    // dispatch: View muốn hành động phải dispatch nên ta có một phương thức để làm việc này
    // tham số action: nhận mô tả action -> đẩy cho reducer
    // ...args: Và đẩy thêm các dữ liệu cần đẩy vào reducer như dữ liệu cần thêm, xóa, ..
    function dispatch(action, ...args)
    {
        // reducer nhận lạ state return trước đó let state = reducer() trả lại state mới
        // reducer nhận vô action và các dữ liệu khác sửa lại dữ liệu state của store và trả về  dữ liệu state mới
        // Store được update lại -> gọi lại render() để  update lại View

        state = reducer(state, action, args)
        render()
    }

    return {
        attach,
        connect,
        connect2,
        dispatch
    }

}
