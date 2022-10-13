
// Tạo giá trị state ban đầu cho Store
const init = {
    cars: ["BMW"]
}

// Xử lí một cái gì đó từ action và trả về state mới
function reducer(state=init, action, args)
{
    console.log(action, args)
    switch (action) {
        // Khi dispatch thì sẽ nhận một action từ View và  tạo ra dữ liệu mới update lại state 
        case "ADD":
            // destructuring lấy phần tử của mảng gán cho bến newCar
            const [newCar] = args

            // spread giải object state ra các object con nếu có trước đó
            console.log("...state: ", {...state})
            // {...state} giải object này ra cũng có key là cars nên chỉ giữ lại key phía sau
            // Khi có key khác cars mới có tác dụng

            // ...state.cars giải và lấy giá trị các phần tử  có key là cars bỏ vào mảng cars.
            const new_state = {...state, 
                        cars: "1",
                        cars: [...state.cars, newCar]
                    }
            console.log("new_state: ", new_state)
            return new_state
        // Trường hợp mặc định ban đầu sẽ return state = init khi chạy đầu tiên
        default:
            return state
    }
}

export default reducer