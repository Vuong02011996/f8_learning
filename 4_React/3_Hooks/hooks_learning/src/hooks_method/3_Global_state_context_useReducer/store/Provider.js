// Tạo Provider để cung cấp state cho tất cả các component

import Context from "./Context";
import {useReducer} from 'react'
import reducer, {initState} from './reducer'
import { logger } from "./logger";

function Provider({children})
{

    // Tạo state bằng reducer để tạo ứng dụng hoạt động như redux
    const [state, dispatch] = useReducer(logger(reducer), initState)
    
    return (
        // Đưa state và dispatch xuống dưới để tất cả các component con đều có thể lấy state để dùng
        // dispatch để actions
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

// Đã có Provider ta sẽ dùng nó để ôm component cha muốn đấy dữ liệu state này xuống dưới
// Ở đây ta muốn toàn bộ ứng dụng đều có thể lấy state này nên ta đưa Provider ra component to nhất
// là Index.js để bao luôn App của chúng ta.

export default Provider