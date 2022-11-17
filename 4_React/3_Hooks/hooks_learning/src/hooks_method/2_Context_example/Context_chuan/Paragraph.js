
import { ThemeContext } from "./ThemeContext"
import {useContext} from 'react'

// Dùng Context
// Bước 3 ta dùng một hooks là useContext để làm Consumer lấy dữ liệu từ Provider


function Paragraph()
{

    // Thèn Provider có value là gì thì value đó sẽ được lấy ở đây
    // truyền cho useContext đúng Provider của context cha
    const context = useContext(ThemeContext)

    console.log(context.theme)
    return (
        <p className={context.theme}>
            Khái niệm giúp truyền dữ liệu từ component cha xuống các component con mà không cần sử dung props
        </p>
    )
}

export default Paragraph