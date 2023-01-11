import clsx from 'clsx'
import style from "./Button.module.css"



// Ta có thể dùng bất cử kiến thức JS nào để trả về chuỗi string cho className và các class cách nhau một dấu cách
    // Dùng template string {`${style.btn} ${style.active}`}
    // Dùng mảng [style.btn, style.active].join(' ')

// Tuy nhiên thực tế người ta ít dùng cách trên vì cách trình bày xấu và dài dòng
// Ta sẽ sử dụng một trong hai thư viện sau: classnames(ra đời trước) hoặc clsx
// Hai thư viện này hoạt động tương tự nhau, ở đây dùng clsx

// Install yarn add clsx hoặc npm i clsx
// Cách dùng: clsx là một hàm , đối số là các class ta muốn add vào: clsx(style.btn, style.active)

// Dùng Css Động lúc có lúc không 
    // Ta dùng {} cho đối số  và viết logic bên trong



function test(a, b)
{
    console.log([a])
    return clsx(a, b)
}

function Button({primary})
{
    const classes = clsx(style.btn, {
        [style.primary]: primary
    }, "d-flex")
    return (
        <>
            <h3>Sử dụng nhiều class trong css và css động</h3>
            {/* Không dùng thư viện */}
            {/* <button className={`${style.btn} ${style.active}`}>Clickme</button> */}
            
            {/* Dùng thư viện */}
            {/* <button className={clsx(style.btn, style.active)}>Clickme</button> */}

            {/* Dùng thư viện với class động */}
            <button className={clsx(style.btn, {
                [style.active]: false
            })}>Clickme</button>
            {/* Chú ý ở đây ta có biến 
            style.active = 'Button_btn__RBtNK'
            Do đó ta muốn lấy 'Button_btn__RBtNK' làm key cho object phải để biến trong dấy [], [style.active]
            Có thể test bên dưới
            */}
            {/* <button className={test(style.btn, style.active)}>Clickme</button> */}

            <button className={`${style.btn}`}>Clickme</button>

            {/* Truyền props xét CSS */}
            <button className={classes}>Clickme</button>

        </>
    )
}

export default Button