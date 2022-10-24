/**
 * Yêu cầu và bước làm:
 * Bước 1: lặp qua từng rule, lấy elementInput cần thực hiện rule đó
 * Bước 2: từ sự kiện onblur của elementInput, lấy giá trị của ô input đưa vô hàm test để check
 * Bước 3: Từ message của hàm test thực hiện các công việc cần thông báo cho người dùng.
 * 
 * Các TH cần xử lí:
 * 1. Khi onblur thì thực hiện validate, lúc người dùng oninput lại thì phải tắt thông báo lỗi.
 * 2. Khi lặp qua các rules, trường hợp một thẻ input có nhiều rule, phải lưu rule của từng thẻ input vào mảng để không ghi đè bởi rule sau.
 * 3. Trường hợp các thẻ input không là con trực tiếp của thẻ form_group phải tìm đúng thẻ cha form_group bằng vòng lặp while.
 * 4. Khi dùng input là radio  hoặc checkbox thì không lấy inputElement bằng id được phải dùng selectorAll mới lấy tất cả input được.
 * 5. Trường hợp dùng radio hoặc checkbox thì thuộc tính value luôn có giá trị ở thẻ input do đó 
 * phải check có input được checked mới pass qua required. Lấy value từ form cũng vậy.
 */


// Trong JS một hàm cũng là một đối tượng
// constructor | đối tượng validator
function Validator(options) 
{
    console.log(2)
    // options : object truyền các tham số  cần xử  lý vào

    // Lấy form cần validator
    var formElement = document.querySelector(options.form)
    if (formElement) 
    {   
        // Trường hợp một thẻ input có nhiều rule, tránh ghi đè rule trước phải đưa vào mảng
        var selectorRules = {}

        formElement.onsubmit = function(e) {
            // Xủ lí bỏ hành vi submit mặc định của form - nút button
            e.preventDefault()

            var isFormValid = true
            // Khi bấm vào nút submit validate tất cả các rule không cần onblur gì cả
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                // selectorRules đã có sẵn value vì chỗ ni khi nào bấm onsubmit mới chạy 
                var isValid = validate(selectorRules, rule.selector, inputElement, errorElement)
                if (!isValid)
                {
                    isFormValid = false
                }
            })

            if (isFormValid)
            {   
                // Submit với javascript
                if (typeof options.onSubmit === "function")
                {
                    // Lấy ra tất cả thẻ có thuộc tính name và không có thuộc tính disable
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable])')    
                    // enableInputs là NodeList nên chuyển về array mới dùng được các hàm reduce, ...
                    console.log("enableInputs:", enableInputs)
                    var formValues = Array.from(enableInputs).reduce(function(total_values, input) {
                        // Mỗi lần lặp sẽ qua mỗi thẻ input lấy giá trị 
                        // Trường hợp input là radio hoặc checkbox thì phải lấy đúng input được checked
                        switch(input.type)
                        {
                            case 'radio':
                                // "input[name='gender']:checked";
    
                                if (input.matches(":checked"))
                                {
                                    total_values[input.name] = formElement.querySelector("input[name='"+ input.name + "']:checked").value
                                }
                                // TH không chọn gì cả mới trả về chuỗi rỗng
                                else if(total_values[input.name] == null)
                                {
                                    total_values[input.name] = ""
                                }
                                break
                            case 'checkbox':
                                if (input.matches(":checked"))
                                {
                                    if(Array.isArray(total_values[input.name])) {
                                        total_values[input.name].push(input.value)
                                    }
                                    else
                                    {
                                        total_values[input.name] = [input.value]
                                    }
                                }
                                // TH không chọn gì cả mới trả về chuỗi rỗng
                                else if(total_values[input.name] == null)
                                {
                                    total_values[input.name] = ""
                                }
                                break;
                            case 'file':
                                total_values[input.name] = input.files
                                break;
                            default:
                                total_values[input.name] = input.value
                        }
                        return total_values
                    }, {})
                    options.onSubmit(formValues)
                }
                // submit với hành vi mặc định khi công có onSubmit, submit bởi HTML trình duyệt
                else
                {
                    formElement.submit()
                }
            }
        }

        // lặp qua phần tử trong rules lấy các ô input cần check rồi thực hiện validate
        options.rules.forEach(function(rule) {

            // Lưu lại các rule cho mỗi input, tránh trường hợp ghi đè khi một input nhiều rule
            if(Array.isArray(selectorRules[rule.selector]))
            {
                // input có nhiều hơn một rule
                selectorRules[rule.selector].push(rule.test)
            } 
            else
            {   
                // input có rule đầu tiên
                selectorRules[rule.selector] = [rule.test]
            }
            // số lượng object của selectorRules bằng số rule cần check ở form.html

            var inputElements = formElement.querySelectorAll(rule.selector)
            
            for (var i = 0; i < inputElements.length; i++)
            {
                var inputElement = inputElements[i]
                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                if (inputElement)
                {
                    // Xử lí khi người dùng blur ra khỏi ô input
                    // Gán cho sự kiện onblur cho function này khi nào blur mới chạy
                    inputElement.onblur = function(){
                        // ở đây ta đã có value của ô input, có hàm test của rule, ta tiến hành việc check giá trị qua hàm test
                        validate(selectorRules, rule.selector, inputElement, errorElement)
                    }
                    // Xứ khi người dùng đang nhập ô input(không được hiện lỗi)
                    inputElement.oninput = function(){
                        removeNotiError(inputElement, errorElement)
                    }
                }
            }
            
        })
    }

    // Các function dùng trong đối tượng Validator
    function validate(selectorRules, selector, inputElement, errorElement)
     {
        // selectorRules là object có field là tên selector, giá trị của field  là mảng gồm các function test
        for (var i = 0; i < selectorRules[selector].length ; i ++)
        {   
            // selectorRules[selector][i] ở đây là các hàm test được gán ở trên selectorRules[rule.selector] = [rule.test]
            // console.log(inputElement.type)
            // check nếu type của input là checkbox hoặc radio thì xử lí cách khác
            switch (inputElement.type) 
            {
                case "radio":
                case "checkbox":
                    //selector là "input[name='gender']:checked" thì mới gọi là có value.
                    // Lấy giá trị của radio hoặc checkbox được checked
                    // inputElement.value = formElement.querySelector(selector + ":checked")
                    var errorMessage = selectorRules[selector][i](formElement.querySelector(selector + ":checked"))
                    break
                default:
                    var errorMessage = selectorRules[selector][i](inputElement.value)
            }
            // Nếu có rule nào error dừng và xuất thông báo
            if (errorMessage)
            {
                break;
            } 
        }
        if (errorMessage)
        {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add("invalid")
        }
        else
        {
            removeNotiError(inputElement, errorElement)
        }

        return !errorMessage
    }

    function removeNotiError(inputElement, errorElement)
    {
        errorElement.innerText = ''
        getParent(inputElement, options.formGroupSelector).classList.remove("invalid")
    }

    // get parentElement từ ra ngoài mọi cấp với selector của nó
    function getParent(element_child, selector_parent_element)
    {   
        // Dừng lại khi bên ngoài không còn thẻ cha nào nữa thì vòng lặp kết thúc
        while(element_child.parentElement)
        {
            if(element_child.parentElement.matches(selector_parent_element)) 
            {
                return element_child.parentElement
            }
            element_child = element_child.parentElement
        }
    }

}

// Tạo các phương thức là các rule cho đối tượng Validator
// Khi đối tượng Validator được gọi các phương thức này sẽ chạy đầu tiên
// trước luôn cả dòng 4 : 
// console.log(2) còn chậm hơn console.log(0)
// Chứng tỏ: khi hàm|đối tượng Validator được gọi sẽ chạy qua tất cả các tham số bên trong trước , có code sẽ thực thi trước
// Để  lấy đúng các giá trị của tham số  cần truyền vào(return các giá trị cho mảng rules trước khi vô hàm)
// sau đó mới vô bên trong hàm thực thi code bên trong nó

// Các phương thức này trả về cái gì thì mảng rules nhận về cái đó.
// Ở đây trả về object gồm: selector của từng rule và hàm test để check điều kiện từng rule.

// Nguyên tắc các rule : nhận đối số là giá trị của ô input 
//1. Nếu giá trị nhập vào input hợp lệ : không trả về gì cả(undefine)
//2. Nếu giá trị nhập vào không hợp lệ: trả về  errorMessage tương ứng cho từng rule 

// Kiểm tra người dùng nhập giá trị chưa
Validator.isRequired = function(selector, errorMessage){
    console.log(1)
    return {
            selector: selector,
            // ở đây chỉ định nghĩa hàm test trả về cho mảng rules chớ hàm test chưa được gọi
            test: function (value_input) {
                // check input nhập vào có giá trị hay không(đã gõ hay chưa gõ)
                return value_input ? undefined: errorMessage || "Dấu || là sao đây";
        }
    }
}

// Kiểm tra người dùng có nhập đúng email không 
// Search javascript email regex: https://www.w3resource.com/javascript/form/email-validation.php
// kiểm tra theo dấu @ chưa chính xác vì sau @ cần domain.
Validator.isEmail = function(selector, errorMessage){
    console.log(3)
    return  {
            selector: selector,
            test: function (value) {
                var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                return regex.test(value) ? undefined:errorMessage || "Dấu || là sao đây" ;
        }
    }
}

// Kiểm tra người dùng nhập đủ min ký tự (cho password)
Validator.minLength = function(selector, min, errorMessage){
    return  {
            selector: selector,
            test: function (value) {
                return value.length >= min ? undefined: errorMessage || `Vui lòng nhập đủ ${min} ký tự` ;
        }
    }
}

// Kiểm tra giá trị nhập lại có đúng không
Validator.isConfirmed = function(selector, getValueConfirm, errorMessage){
    return  {
            selector: selector,
            test: function (value) {
                return value === getValueConfirm() ? undefined: errorMessage || "Dấu || là sao đây";
        }
    }
}

