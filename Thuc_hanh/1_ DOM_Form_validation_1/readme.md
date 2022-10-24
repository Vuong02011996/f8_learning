# Form validation
+ Là form kiểm tra dữ liệu người dùng nhập vào qua các thẻ input
+ Các trường hợp báo lỗi: chú ý trải nghiệm người dùng(UX).
    + Nếu người dùng không nhập gì hoặc nhập dữ liệu sai không như mong muốn của chúng ta thì thông báo lỗi.
    + Báo lỗi sớm nhất cho người dùng, tránh trường hợp bấm đến cuối cùng mới báo lỗi ở trên. -> trải nghiệm không tốt.
    + Khi người dùng đang nhập không được hiện thông báo lỗi. -> gây khó chịu.

    + Áp dụng được nhiều rule cho một thẻ input. Ví dụ email, bắt buộc nhập trước sau khi nhập lại check phải là email => hai rule.
    + Các thẻ input có thể nằm sau trong nhiều thẻ cha, không thể dùng inputElement.parentElement.
    + Các thẻ input là radio hoặc checkbox thì có nhiều input bên trong do đó, không lấy inputELement bằng selector id được, phải dùng class với selectorALl.
    + Các thẻ input có thể là checkbox, radio, ... thì value của thẻ input luôn có sẵn trong lúc ta viết html do đó muốn check trường hợp value rỗng của loại input này ta phải check cách khác. Phải đảm bảo radio hoặc checkbox đã được checked.(selector: "input[name='gender']:checked")
    + Input là file , checkbox phải có cách lấy giá trị khác nhau.



# Cách 1
+ Lấy tất cả thẻ input có thuộc tính name và rules 
    // var inputElements = formElement.querySelectorAll("input[name][rules]")

+ // Lấy ra tất cả thẻ có thuộc tính name và không có thuộc tính disable
    var enableInputs = formElement.querySelector('[name]:not([disable])')

+ Kiểm tra một element có matches với selector của nó hay không
    // element_child.parentElement.matches(selector_parent_element)

+ Lấy giá trị của radio hoặc checkbox được checked
    // formElement.querySelector(input[name='gender'] + ":checked")
    // input.matches(":checked") kiểm tra input có checked không

# Cách 2, dùng gọn hơn nhưng code nâng cao hơn, lạ hơn
+ Tăng kinh nghiệm khi code JS

+ Các thuộc tính rules trong file html là do người viết thư viện quy định.

+ function lồng nhau: vẫn là function đơn giản là kết quả trả về của function thứ nhất là function số 2.

+ lấy element node của event
    // console.log(event.target)
+ lấy giá trị của thẻ gọi event
    //console.log(event.target.value)
+ lấy selector của thẻ gọi event
    //console.log(event.target.name)

+ Cách dùng constructor , tạo object vs từ khóa this.