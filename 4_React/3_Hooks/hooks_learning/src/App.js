import HookState from './hooks_method/1_useState';
// import HookEffect from './hooks_method/2_useEffect';
// import HookLayoutEffect from './hooks_method/3_useLayoutEffect';
// import HookRef from './hooks_method/4_useRef';
// import MemMoHOC from './hooks_method/5_React_memo';
// import HookCallBack from './hooks_method/6_useCallback';
// import HookMemMo from './hooks_method/7_useMemo';
// import HookReducer from './hooks_method/8_useReducer';

// mặc định webpack sẽ nạp file index trong thư mục ToDo chớ không cần phải viết rõ ToDo/index.js
// import ToDoApp from "./hooks_method/ToDo_useReducer"
// import Context from "./hooks_method/Context_example/Context_App"

// import Context from "./hooks_method/Context_example/Context_chuan/Context_App"

// import ToDoApp from './hooks_method/3_Global_state_context_useReducer/ToDo_App';

// import ImperativeHandle from './hooks_method/4_ImperativeHandle/9_useImperativeHandle'

import {useState, useCallback} from 'react'
import "./App.css"


function App() {
  const [mounted, setMounted] = useState(true)
  
  // Dùng cho memo
//   const [count, setCount] = useState(0)   
//   function handleInrease()
//   {
//       setCount(prev => prev + 1)
//   }

  // use CallBack
  // Kiểm tra [] có deps hay không nếu có sẽ tạo hàm handleInrease mới  và trả về tham chiếu mới,
  // không thì sẽ lấy tham chiếu ở lần render đầu tiên
//   const handleInreaseUseCallback = useCallback(handleInrease, [])

  // Cách viết gọn cho useCallback
//   const handleInreaseUseCallback = useCallback(() => {
//     setCount(prev => prev + 1)
//   }, [])
 
  return (
    <div className="App" style={{margin: 20}}>
      
      <button onClick={() => setMounted(!mounted)}>Mounted_Unmounted</button>

      <HookState/>

      {/* {mounted && <HookRef/>} */}

      {/* Dùng cho memo HOC */}
      {/* <MemMoHOC></MemMoHOC>
      <h1>{count}</h1>
      <button onClick={handleInrease}>Click me</button> */}

      {/* Dùng cho useCallback */}
      {/* Chú ý quy ước đặt tên props với các hàm thì thêm on còn hàm thì thêm handle */}
      {/* <HookCallBack onIncrease={handleInreaseUseCallback}/> */}
      {/* <h1>{count}</h1> */}
      {/* Qua callback đưa button vào component */}
      {/* <button onClick={handleInrease}>Click me</button> */}

      {/* <HookMemMo/> */}

      {/* <HookReducer/> */}
      {/* chia file Reducer */}
      {/* <ToDoApp/> */}

      {/* React context and useContext */}
      {/* <Context/> */}

      {/* Global state with context and useReducer the same redux*/}
      {/* <ToDoApp/> */}

      {/* useImperativeHandle */}
      {/* <ImperativeHandle/> */}


    </div>
  );
}

export default App;
