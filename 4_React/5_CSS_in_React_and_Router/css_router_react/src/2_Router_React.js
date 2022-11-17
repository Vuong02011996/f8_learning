import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'

// Ví dụ ta tạo 2 trang : trang chủ/ trang tin tức/ trang liên hệ tương ứng với 3 component.

// Bước 1: Tạo cơ chế định tuyến cho toàn App : vào file index.js import {BrowserRouter} from 'react-router-dom'
    // Đưa component này bọc App của chúng ta lại , và một web site chỉ có một router.

// Bước 2: import {Routes, Route} from 'react-router-dom' trong file App
    // Routes sẽ là component cha ôm các component con là Route
    // Route sẽ có hai props:
        // path: đường dẫn tới trang muỗn định tuyến - như ref thẻ a
        // element: cần truyền React element tới trang muốn tới(không phải React component nên phải truyền dạng JSX)

// Bước 3 đổi các thẻ a -> Link, href -> to mới đúng chuyển trang theo SPA của React.

// Cách hoạt động :  đường dẫn trên web khi click vào sẽ so sánh với các path của Route xem cái nào match thì hiển thị React element đó.

// Chú ý thẻ Link không liên kết với path bên ngoài trang web như thẻ a.
// Dù dùng thẻ Link nhưng trên DOM thật ta vẫn thấy thẻ a nhưng cách hoạt động sẽ không giống thẻ a bằng preventDefault..
function App()
{
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/news'>News</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* Tại nới xảy ra sự thay đổi ta dùng Routes như sau */}
            {/* element={Home} không thể truyền React component vì element cần React element */}
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/news' element={<News/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </>
    )
}


export default App;