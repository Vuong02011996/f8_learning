// https://homiedev.com/iterators-va-iterables-trong-javascript-ban-da-biet-chua/


// Iteration protocols (giao thức lặp) là tập hợp các quy tắc mà một object cần tuân theo.
// . Để triển khai giao thức này thì một object cần có method next() return về một 
    // object khác với 2 thuộc tính (properties):
        // done: một giá trị boolean cho biết còn hay không còn phần tử nào có thể được lặp lại.
v       //value: giá trị hiện tại.