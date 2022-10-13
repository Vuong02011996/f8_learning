# Cách xây dựng thư viện trong JS
+ Xây dựng app <- code thuần
+ Code thuần -> xây dựng thư viện -> xây dựng apps.(vẫn là kiến thức cơ bản nhưng khác hẵn về tư duy cách suy nghĩ)

# Xây dựng thư viện giống các React + Redux hoạt động với nhau.
## View - Actions - Reducers - Store
+ View chỉ là phần hiển thị giao diện người dùng.
    + Dispatch:  người dùng tác động một cái gì đó lên Views(click chuột, cuộn xuống, ..)
    + Khi view dispatch một hành động thì dispatch chọc qua Actions để lấy được mô tả Actions. rồi đẩy mô tả sang Reducers.
+ Actions: thành phần mô tả hành động, không phải thực hiện hành động.
    + Ví dụ thèn Views có các giao diện thêm sửa / xóa một ảnh.
    + Actions sẽ mô tả thêm thì làm gì, xóa thì làm gì,... chứ không thực hiện hành động. 
    
+ Reducers:
    + Phải học tốt hàm reduce của mảng. reduce -> giảm.
    + Luôn có một giá trị khởi tạo ban đầu.
    + Từ lần sau luôn nhận giá trị trả về trước đó để làm đối số  đầu vào cho lần sau sử dụng reduce.
    + Dựa vào mô tả của Actions -> thực hiện hành động bên trong và trả về dữ liệu mới. dữ liệu đó gọi là Store.

+ Store: 
    + Nơi lưu trữ dữ liệu từ Reducers đẩy ra.
    + Dùng dữ liệu mới này update lại giao diện View(Subscribe)


## Ví dụ quy trình :
+ View: Người dùng có hành động xóa một cái gì đó. -> Actions diễn tả, hành động này là gỡ bỏ một phần tử của mảng -> 
Reducers thực hiện xóa phần tử của mảng lưu lại mảng mới cho Store(update lại state)-> Store render lại dữ liệu cho View.

## Các bước xây dựng thư viện:
+ Bước 1:  Xây dựng hàm html - template engine cho phần View
+ Bước 2: Xây dựng hàm createStore(reducer) để tạo Store lưu dữ liệu (const roots = new Map()) và các phương thức làm việc với các thành phần khác: (Nhận đối số là callback reducer để gọi lại lấy dữ liệu từ Reducers)
    + View -> Actions -> Reducer/Store: dispatch(action, ...args)
    + Reducer/Store -> View: connect(selector = state => state)
    + View -> Giao diện người dùng : đẩy component lấy từ Store qua root(file index html)

## Kiến thức ES6 sử dụng build thư viện
+` Sử dụng module.`

+ `hàm html:`
    + ${cars.map(car => `<li> ${car}</li>`)}: Arrow function nhận vô một tham số  và chỉ return
        array.map(): lặp qua mảng và trả về mảng mới với phần tử thay đổi(thêm thẻ li hai bên mỗi phần tử)
    + html([first, ...strings], ...values): Tagged template literals, destructuring, rest tham số cho hàm, 
    + array: `reduce(), concat(), shift()`
    + filter(x => x && x !==true || x === 0) : filter lại bỏ phần tử falsy và true , giữ lại số 0 trong mảng.
    + .join(""): chuyển mảng thành string bỏ dấu ,

+ `Object Map()`
    + const roots = new Map(): dùng object Map(), có thể sử dụng key với mọi KDL, 
    + roots.set(root, component): set key, value cho Map, root là KDL object chứa element node.

+` Function trả về function , trong function lại trả về function ....`
    + return component => (props, ...args) => component(Object.assign({}, props, selector(state), ...args))
    + `Chưa hiểu cách chạy`
+ `Object.assign: merge các object thành vô một object mới`
    + Object.assign({}, props, selector(state), ...args)

+ `Ôn lại: Có thể viết script trực tiếp trên event thẻ html`

``` <h1 onclick="console.log(this.innerText)" class="attribute_event">
    Attribute event 
</h1>
```

+ `Destructuring với array và object`
```
            // destructuring lấy phần tử của mảng gán cho bến newCar
            const [newCar] = args

            // spread giải object state ra các object con nếu có trước đó
            console.log("...state: ", {...state})
            // {...state} giải object này ra cũng có key là cars nên chỉ giữ lại key phía sau
            // Khi có key khác cars mới có tác dụng

            // ...state.cars giải và lấy giá trị các phần tử  có key là cars bỏ vào mảng cars.
            const new_state = {...state, 
                        cars: "1",
                        cars: [...state.cars, newCar]
                    }

```


## Sử dụng thư viện
+ Thư viện chúng ta chỉ có 2 thành phần là template string html và createStore() Còn các thành phần khác như reduce(), ... khi dùng ta mới tạo ra.

+ Bước 1:  Tạo ra hai file khi sử dụng thư viện:
    + store.js: để tạo Store chứa các state-thành phần dữ liệu, createStore chỉ tạo Store và các phương thức làm việc với Store chớ không phải là Store.
    + reducer.js: để  nhận actions và xử lí

+ Bước 2: Viết các component(App.js) cho ứng dụng và đưa qua file script.js để chạy.


## Cách hoạt động thư viện.
+ Cách render:
    + Bắt đầu với file index.html, gọi file script.js
    + Trong file script.js gọi attach với tham số là App và root element ->` attach(App, document.querySelector("#root")` <=> `attach(component, root)` :  component chính là App.
    + Trong attach sẽ đưa component tương ứng để render  ->` roots.set(root, component)` gọi render().
    + Trong render sẽ gọi lại hàm App() - `const html_component = component()` trả về  html cần inner vào root. `root.innerHTML = html_component`

+ Cách lấy dữ liệu từ Store ra View:
    + Trong file App gọi connect(), connect sẽ chạy lại hàm App với dữ liệu mới lấy từ Store.
    `return component => (props, ...args) => component(Object.assign({}, props, selector(state), ...args))`

    => thèn App() chạy 2 lần : 1 lần trong render , không truyền tham số để lấy html ra, 1 lần chạy trong connect() để update lại html với dữ liệu mới.


+ Cách đưa giữ liệu từ View vào Store rồi ra lại View để hiển thị.
    + Khi bấm vào onclick - dispatch một hành động từ View hàm dispatch sẽ:
        + View->Store: gọi hàm reducer xử lí action trong reducer lưu lại state (dữ liệu mới) trả về  state cho lần sau update( mới dùng let state ở trên để update lại) - `state = reducer(state, action, args)`, đã lưu lại data trong Store.
        + Store-View:  Sau đó dispatch gọi lại hàm render() như ở trên -> render() lại gọi hàm App() , gọi App() thì lại thông qua connector để  lấy dữ liệu mới từ Store ra View như ở trên(cũng chạy hàm App nhưng để  thêm đữ liệu mới vào html), còn App() gọi ở đây không tham số sẽ trả về  html để inner vào root.

+ Xong

# Note
+ HTML chủ yếu render theo client side - trong JS, nên file index.html chỉ chứa một thẻ div trống. Các file JS sẽ innerHTML vào.

+ Một đặc điểm không thể thiếu của thư viện FE là một template engine(hàm html) để  viết được phần View. (ở đây chế bằng template string)

+ Hai chú ý quan trọng:
    + Hàm App() được gọi hai lần, một lần trong connect để  thêm dữ liệu mới từ Store ra View - ` component(Object.assign({}, props, selector(state), ...args))`. Một lần chạy trong render() không truyền tham số để  lấy dữ liệu từ View cho root -`const html_component = component()`
    + Mỗi lần update lại html cho root nó sẽ inner lại nguyên trang từ cũ tới mới của component chớ không phải lấy dữ liệu mới không.`const html_component = component()`

