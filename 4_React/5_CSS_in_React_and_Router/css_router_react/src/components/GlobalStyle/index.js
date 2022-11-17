// file này mục đích chỉ sử dụng CSS chung có các component

import './GlobalStyle.css'

function GlobalStyles({children})
{
    return children
}

// Ta sẽ dùng component này bao lại các component con muốn sử dụng chung CSS
// Ta cũng có thể viết css global ở file index.css nhưng cách trình bày sẽ không hay
export default GlobalStyles