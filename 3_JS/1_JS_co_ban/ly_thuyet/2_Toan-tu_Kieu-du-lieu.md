
# Toán tử
## Toán tử sô học(Arithmetic)
+ Cộng: +, -, *, **(lũy thừa), /, %, ++, --(prefix, postfix);
+ ++, --: tăng giảm 1 giá trị số. Tiền tố và hậu tố
    + Khác nhau ở thời điểm thực hiện.
    + a++, lấy giá trị a rồi mới ++, ++a a = a+ 1 rồi mới trả về giá trị a.

## Toán tử gán(Assignment)
+ =, +=, -=, *=, /=, **=;

## Toán tử nối chuỗi
+ "Van" + " " + "Vuong" => Van Vuong.
+ Chỉ cần 1 trong hai vế của dấu cộng không là số thì dấu cộng là toán tử nối chuỗi.

## Toán tử so sánh.(Comparison)
+ ==, !=, >, >=, <, <=.


## Boolean.(true, false)
+ BoolTrue = 20 >= 18.


## If else.
+ Cú pháp:
```
if () {

} else {

}
```
+ Trong dấu (), if else chỉ quan tâm tới giá trị boolean.
+ false: 0, "", '', Nan, null, undefined còn lại đều là true.


## Toán tử logic(Logical)
+ &&(And-tất cả đúng mới đúng), || (or- một cái đúng là đúng), ! (not - đúng thành sai, sai thành đúng).


# Kiểu dữ liệu
+ Primitive-nguyên thủy: 
    + number: var = 1
    + string: var fullName = "Vuong"
    + boolean: 
    + undefined: Khai báo biến không gán giá trị
    + null
    + symbol. có tính duy nhất.
+ Complex-phức tạp: 
    + function
    ```
    var myFunction = function() {
        alert("Hi")
    }
    ```
    + object: có hai loại 
        + object
        ```
        var myObject = {
            name: "Vuong",
            age: 30 
        };
        ```
        + array
        ```
        var myArray = [1, 2, 3];
        ```
+ Kiểm tra kiểu dữ liệu:
    + console.log("KDL:", typeof myArray)