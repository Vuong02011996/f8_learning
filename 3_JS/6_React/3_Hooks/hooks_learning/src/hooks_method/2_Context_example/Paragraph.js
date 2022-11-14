
// Trong một project ta sẽ có rất nhiều context cha
// nên ta phải import đúng Provider của context cha muốn dùng
import { ThemeContext } from "./Context_App"
import {useContext} from 'react'

// Dùng truyền props qua trung gian
function Paragraph1({theme})
{
    console.log(theme)
    return (
        <p className={theme}>
            Khái niệm giúp truyền dữ liệu từ component cha xuống các component con mà không cần sử dung props
        </p>
    )
}

// Dùng Context
// Bước 3 ta dùng một hooks là useContext để làm Consumer lấy dữ liệu từ Provider


function Paragraph()
{

    // Thèn Provider có value là gì thì value đó sẽ được lấy ở đây
    // truyền cho useContext đúng Provider của context cha
    const theme = useContext(ThemeContext)

    console.log(theme)
    return (
        <p className={theme}>
            Khái niệm giúp truyền dữ liệu từ component cha xuống các component con mà không cần sử dung props
        </p>
    )
}

export default Paragraph