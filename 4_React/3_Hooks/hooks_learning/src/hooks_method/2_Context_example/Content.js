import Paragraph from "./Paragraph"

// Dùng truyền props trung gian
function Content1({theme})
{
    return (
        <div>
            <Paragraph theme={theme}/>
        </div>
    )
}

// Dùng Context component trung gian không cần truyền gì cả
function Content()
{
    return (
        <div>
            <Paragraph/>
        </div>
    )
}

export default Content