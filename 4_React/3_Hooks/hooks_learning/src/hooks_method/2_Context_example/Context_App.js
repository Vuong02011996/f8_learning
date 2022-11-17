import Content from './Content'
import {useState, createContext} from 'react'

// React context
// Trong react đã cung cấp sẵn cho chúng ta một phương thức context 
// Khái niệm giúp truyền dữ liệu từ component cha xuống các component con mà không cần sử dung props

// Khi sử dụng context ta có thể truyền dữ liệu từ component cha xuống bất cứ component con nào bên trong mà 
// không cần thông qua component trung gian.

// Đặc biệt ta muốn bỏ một component trung gian ta phải viết code lại nếu như ta dùng cách truyền props từ component cha sang component con.

// Cách dùng 3 bước:
// Bước 1: Create context: Tạo ra một phạm vi giúp truyền dữ liệu trong phạm vi đó
// Bước 2: Provider (nhà cung cấp) - component cha nới tạo ra context
// Bước 3: Consumer (nhà sử dụng, nhận dữ liệu từ provider) - Vào thẳng thèn component con muốn sử dụng dữ liệu từ component cha import Provider
 


// Ví dụ chuyển màu tối sáng cho background
// Dùng truyền props 
function Context1()
{
    const [theme, setTheme] = useState('dark')
    function handleClick()
    {
        setTheme((theme) => theme === "dark" ? "light": "dark")
    }
    
    return (
        <div style={{padding: 20}}>
            <button onClick={handleClick}>Toggle Theme</button>
            <Content theme={theme}/>
        </div>
    )
}

// Dùng context

// Bước 1 tạo context ở component cha để tạo phạm vi truyền dữ liệu xuống component con bên trong
// Hàm createContext sẽ trả về một object có hai thuộc tính Consumer và Provider
// Hai thuộc tính này chính là React component nên có thể dùng nó viết JSX.
export const ThemeContext = createContext()

function Context()
{
    const [theme, setTheme] = useState('dark')
    function handleClick()
    {
        setTheme((theme) => theme === "dark" ? "light": "dark")
    }
    
    // Bước hai tạo Provider ôm tất cả component con
    // Provider có một props là value sẽ nhận dữ liệu gì đó, dữ liệu này có thể sử dụng ở bất cứ component con nào.

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{padding: 20}}>
                <button onClick={handleClick}>Toggle Theme</button>
                <Content/>
            </div>
        </ThemeContext.Provider>
    )
}
export default Context