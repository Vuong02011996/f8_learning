import video from './video/bay_len_tang_lau.mp4'
import {forwardRef, useRef, useImperativeHandle} from 'react'

function Video(props, ref)
{
    const videoRef = useRef()

    console.log("props", props)

    // useImperativeHandle sẽ nhận hai đối số
    // 1: ref của component cha
    // 2. callback, callback này trả về object gồm các chỉ gồm các thuộc tính mà ref có thể dùng bên component cha

    useImperativeHandle(ref, () => ({
        playVideo() {
            videoRef.current.play()
        },
        pauseVideo() {
            videoRef.current.pause()
        },
    }))

    return (

        // Thẻ video có props controls để hiển thị giao diện controls mặc định
        // ở đây ta không dùng
        <video 
            ref={videoRef}
            src={video}
            width={300} 
            // controls   
        />
    )
}

export default forwardRef(Video)