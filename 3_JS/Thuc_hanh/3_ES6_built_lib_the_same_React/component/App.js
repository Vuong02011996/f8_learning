import html from "../core.js";
import { connect2, connect } from "../store.js"; 


// Test selector thay đổi dữ liệu lấy ra từ Store 
// Chỉ nhận 1 thèn car
function selector2(state){
    return {
        car: state.cars[0]
    }
}


// ta muốn nhận dữ liệu từ Store vào App nên phải connect tới Store 
// chú ý return object phải có dấu () bao lại
const connector2 = connect2(state => ({
    car: state.cars
}))

//const connector = connect(selector) // truyền tên function tương đương với 
// const connector = connect(function selector(state){
//     return {
//         car: state.cars
//     }
// })



const connector = connect()

// App() chính là function component 
// Đối số của App props = Object.assign({}, props, selector(state), ...args)
// {cars:props} sử dụng destructuring để lấy ra mảng cars (cars: ["BMW"]) đổi tên thành props
function App({cars:props})
{
    console.log(props) // ['BMW'] innit ban đầu chưa dispatch 
    
    return html `
    <h1> hello </h1>
    <ul>
        ${props.map(car => `<li> ${car} </li>`)}
    </ul>
    <button onclick="dispatch('ADD', 'New Car')"> Add Car </button>
    `
}

// Hàm connector trả về một function nhận đối số là một function App <=> component
export default connector(App)

// abc là connector , nhận đối số là component chính là function App
// xyz là function nào??