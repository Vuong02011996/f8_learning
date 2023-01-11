// Dùng Css trong dự án React


// Cách 1: Dùng CSS inline dùng props style truyền một object có thuộc tính và giá trị CSS


// Cách 2: Viết css trong file App.css rồi import vào component muốn sử dụng
  // Khi chạy web ở development: npm start, yarn start thì css này là internal(thẻ style trên thẻ head)
      // Nguyên lý hoạt đông: khi webpack thấy một file.css import trong component thì sẽ chuyển thành thẻ style
      // Bao nhiêu file css thì bấy nhiêu thẻ style.
  
  // Khi chạy ở môi trường production: npm run build / yarn build thì các file css này sẽ là external
      // Css sẽ được mini file , gom tất cả file css thành một file có tên là ...chunk.css 
      // Xem file CSS được load ở tab CSS của dev tool , mỗi file sẽ tốn một lần đóng mở kết nối nên sẽ gom lại một file.

// Dùng cách 2 viết tất cả CSS của tất cả component vào một file sẽ bị các vấn đề sau:
  // Khi gỡ bỏ component ta có thể quên xóa CSS trong file App.css
  // Viết chung tất cả trong một file CSS sẽ dẫn đến khó tìm và chỉnh sửa CSS hoặc có thể đặt giống class trong component.



// Cách 3: Tạo mỗi component mỗi file CSS riêng nhưng vẫn có vấn đề khi ta đặt tên class giống nhau.
  // ta thấy hai component Heading và Paragraph đều có class heading_h2 nên element có class này sẽ ăn Css của 2 file



// Do đó đã có 2 cách xử lí triệt để là CSS module và Styled component 



// Cách 4: Css module 
//tạo các file css độc lập và không ảnh hưởng tới nhau dù đặt trùng class, css selector, ..
  // B1: Đặt tên file css phải có đui mở rộng là : .module.css
  // B2: import object styles(import abc from './Paragraph.module.css') để truyền class cho element: {abc.heading_h2}, tên object ta đặt sao cũng oke

  // Nguyên lý hoạt động: Khi webpack nhận diện file có .module.css thì sẽ xử lí trả về một object
  // object này chứa các key là tên className , value là chuỗi kí tự lạ - đây là class mới(tenfile_tenclass__đoạn mã hóa)
  // đoạn mã hóa là byte 64 mã hóa đường dẫn tới file css này nên không bị trùng.
  // Khi đó trên thẻ style các className sẽ là tên mới này nên không bị trùng.

  // Nhược điểm: 
    // Không có tính kế thừa chỉ dùng được ở một component 
    // Dùng tabname(h1, p) , css selector đặc biệt như * ở cấp cao(không có scss) thì css này sẽ ảnh hưởng đến tất cả component.
    // Tên class phải đặt theo CamelCase chớ không dùng dấu - ở giữa được vì khi code object. sẽ lỗi.
  
  // Cách để dùng chung Css với các component khác là tạo một component GlobalStyles (kết hợp CSS module vs CSS thường)






import './App.css'

import Heading from './components/Heading';
import Paragraph from './components/Paragraph';

import GlobalStyles from './components/GlobalStyle'
import Button from './components/Button';

function App1()
{
    return (
      <GlobalStyles>
        <div style={{padding: '0 32px'}}>
            <h1 className="heading">Hello</h1>
            <Heading/>
            <Paragraph/>
        </div>
      </GlobalStyles>
    )
}


// Cách sử dụng nhiều class và class động trong react JS: dùng thư viện clsx hoặc classnames
function App()
{
    return (
      <GlobalStyles>
        <div style={{padding: '0 32px'}}>
            <Button/>

            {/* ta truyền props để set CSS */}
            <Button primary/>
        </div>
      </GlobalStyles>
    )
}


export default App;
