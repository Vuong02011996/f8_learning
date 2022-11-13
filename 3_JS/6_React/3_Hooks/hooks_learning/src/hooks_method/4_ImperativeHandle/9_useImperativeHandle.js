import {useImperativeHandle, useRef, useEffect} from 'react'
import Video from './Video'


// Hook này giúp tùy chỉnh được một ref của function component

// Bài toán là ta muốn Play Pause không dùng props controls của thẻ video

// Đầu tiên ta phải lấy được DOM element thật của thẻ video sau đó xử lí logic
// Nhưng ở đây thẻ video nằm ở component Video còn logic ta xử lí lại nằm ở đây 
// nên ta không lấy được DOM element từ component video

// Ta không thể tạo useRef ở đây rồi truyền qua thuộc tính ref cho function component Video 
// Vì thuộc tính ref trong React chỉ để dùng cho react element chứ không dùng cho react component.

// Cách xử lí:

// Ta xử lí bằng cách dùng HOC forwardRef(chuyển tiếp ref) của react trong component video
// Ở component cha ta vẫn tạo thuộc tính ref và truyền cho component Video 
// Thực ra lúc truyền qua Video sẽ qua forwardRef trước 
// forwardRef nhận đối số là ref xử lí và gọi Video truyền đối số thứ hai là ref cho Video - forwardRef(Video)

// Vấn đề ở đây là tính đóng gói, private của dữ liệu nên phải dùng useImperativeHandle
// videoRef được public ra ngoài component Video nên có nhiều rủi ro, ví dụ ra remove nó qua DOM.



function ImperativeHandle()
{
    const videoRef = useRef()
    
    // Dùng useEffect để component render xong mới chạy qua callback lúc này videoRef mới có gía trị
    useEffect(() => {
        // Khi dùng useImperativeHandle
        // videoRef.current ở đây chỉ nhận được các thuộc tính trong object mà callback của useImperative trả ra.
        // chớ không phải DOM element của thẻ video như ban đầu
        console.log(videoRef.current)
    })
    const handlePlay = () => {
        videoRef.current.playVideo()
    }

    const handlePause = () => {
        videoRef.current.pauseVideo()
    }
    return (
        <div>
            <Video ref={videoRef} a={0}/>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}

export default ImperativeHandle