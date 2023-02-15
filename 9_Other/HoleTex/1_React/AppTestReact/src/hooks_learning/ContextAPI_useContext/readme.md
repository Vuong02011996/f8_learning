# Giới thiệu

## Đặt vấn đề

-   Để truyền dữ liệu giữa các component ta thường truyền qua props.
-   Như vậy những component trung gian cũng phải chuyển tiếp các dữ liệu để truyền sang component khác.

## Giải pháp

-   Tạo một kho dữ liệu dùng chung để tất cả các component đều có thể truy cập vào.
-   Một giải pháp thường sử dụng là redux.
-   Đối với các dự án nhỏ data limited trong một component là giới hạn thì ta có thể dùng context API(giới thiệu ở React 16.3) để thay thế.

## Ví dụ

-   userData có thể dùng ở component Header hoặc UserInfomation nên ta đưa vào AppContext để những component con được bọc bở AppContext Provider điều sử dụng được.
-   isOpent Tương tự như chức năng đóng mở sidebar ở bất kì componnent nào.
-   Chức năng chuyển sáng tối toàn bộ trang.

# Basic step to use

1. Create a context: `const MyContext = React.createContext();`. Trong một dự án có rất nhiều context khác nhau nên ta nên tạo một folder Context và chứa tất cả context API ở trong này.

2. Wrap the component tree that needs access to the data with the `MyContext.Provider` component and pass the data to its value prop:
   `<MyContext.Provider value={data}>
  <App />
</MyContext.Provider>`

3. To access the data from context , a component can use the `useContext` hook or the `MyContext.Consumer` component:

-   `const value = useContext(MyContext);`
    or :
    `<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
`
