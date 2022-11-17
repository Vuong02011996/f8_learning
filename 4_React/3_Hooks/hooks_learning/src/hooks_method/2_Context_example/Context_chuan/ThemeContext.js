// Mình sẽ tạo Context, Provider và dữ liệu của Context luôn ở đây
import {useState, createContext} from 'react'

// B1: Tạo context
const ThemeContext = createContext()

// B2: Tạo Provider, Đây là phần bao bọc bên ngoài component cha nên ta biến thành wrapper và nhận children
function ThemeProvider({children})
{

    // B3 tạo luôn dữ liệu muốn truyền đi của component cha ở đây
    // Context sẽ quản lý luôn trạng thái của component cha

    const [theme, setTheme] = useState('dark')
    function handleClick()
    {
        setTheme((theme) => theme === "dark" ? "light": "dark")
    }
    // Tạo object value để truyền đi được nhiều props
    const value = {
        theme,
        handleClick
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

// Export ThemeContext cho component con sử dụng làm Customer và ThemeProvider cho component cha dùng để bao lại JSX
export {ThemeContext, ThemeProvider}