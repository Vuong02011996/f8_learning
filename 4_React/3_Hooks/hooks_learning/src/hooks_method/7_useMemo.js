import { useState, useEffect, useRef, memo, useMemo } from 'react';

// Phân biệt với react memo
// + memo: dùng tránh component re-render trong những tình huống không cần thiết.
// + useMemo: dùng để tránh lặp lại một logic nào đó không cần thiết khi render lại component
// VD: khi ta tạo một object trong component và không muốn tạo mới khi render lại component thì có thể dùng useMemo

// Nhận đối số thứ nhất là callback: để ta viết logic muốn dùng useMemo(không muốn chạy lại khi render lại App)
// đối số thứ hai là mảng i như useEffect
// Nhận về kết quả return của đối số thứ nhất - callback, không trả về thì nhận undefined

// Ví dụ
function HookMemMo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [Products, setProducts] = useState([]);

    const nameRef = useRef();

    function handleSubmit() {
        // my way
        // setProducts(prev => {
        //     console.log(prev)
        //     prev.push({name, price})
        //     // không được return prev.push({name, price}) vì prev.push({name, price}) trả về len mảng.
        //     return prev
        // })

        setProducts([...Products, { name, price: +price }]);

        // reset lại name và price sau mỗi lần ADD, và focus vào name
        setName('');
        setPrice('');

        // focus  code js thuần
        nameRef.current.focus();
    }

    // Mỗi lần onChange trên thẻ input sẽ re-render lại component
    // Những logic ta không muốn re-render lại ta sẽ dùng useMemMo()
    // Đối số thứ hai là Products để mỗi lần thêm hoặc xóa sản phẩm sẽ tính lại tổng
    const totals = useMemo(() => {
        const result = Products.reduce((total, pro) => {
            return (total += pro.price);
        }, 0);
        console.log('re-render lại ');
        // return result
    }, [Products]);

    console.log(totals);
    return (
        <div style={{ padding: '10px 32px' }}>
            {/* Name */}
            <input
                // Dùng để lấy element thật của thẻ input này cho biến nameRef
                ref={nameRef}
                // Two-way binding
                value={name}
                placeholder="Enter name..."
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            {/* price */}
            <input
                // Two-way binding
                value={price}
                placeholder="Enter price..."
                onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {totals}
            <ul>
                {Products.map(({ name, price }, index) => (
                    <li key={index}>
                        {name} : {price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HookMemMo;
