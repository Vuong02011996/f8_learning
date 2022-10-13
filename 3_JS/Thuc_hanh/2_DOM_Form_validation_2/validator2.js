/**
 * Yêu cầu và bước làm:
 * Bước 1: Lấy ra form element cần validate
 * Bước 2: lấy ra tất cả thẻ input trong form element cần validate.(tất cả thẻ input có attribute là rules và name)
 * 
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
// function Validator(formSelector, options) 
function Validator(formSelector) 
{
    // // JS ES5 gán giá trị mặc định cho đối số
    // if(!options)
    // {
    //     options = {}
    // }
    // Mẹo thís ở đây mới chính là đối tượng của Validator
    var _this = this

    var formElement = document.querySelector(formSelector)
    console.log(formElement)

      // Bước 3 tạo object có các key là rule-function validate 
    // MẸO là tên function trùng với tên của rule ở file html
    var validatorRules = {
        required: function(value) {
            return value ? undefined: "Vui lòng nhập trường này"
        },
        email: function(value) {
           var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
           return regex.test(value) ? undefined: "Vui lòng nhập email" ;
       },
       // Cách để truyền 2 tham số vô function , dùng function lồng nhau
       min: function(min) {
           return function(value) {
               return value.length >= min ? undefined: `Vui lòng nhập ít nhất ${min} ký tự`
           }
       }
    }

    // Bước 2 lấy tất cả thẻ input có attribute là name và rules
    if(formElement)
    {
        var inputElements = formElement.querySelectorAll("input[name][rules]")
        console.log(inputElements)

        // Mong muốn lấy ra dữ liệu như sau
        // var formRules = {
        //     fullname: "required",
        //     email: "required|email"
        // }
        // Cách 1 dùng reduce
        // var formRules = Array.from(inputElements).reduce(function(formRules, inputElement) {
        //     console.log(inputElement)
        //     formRules[inputElement.id] = inputElement.getAttribute("rules")
        //     return formRules
        // }, {})

        // Cách 2 dùng for/of
        var formRules = {}
        for (var input of inputElements) 
        {
            var rules = input.getAttribute('rules').split('|')
            for (var rule of rules)
            {
                var ruleFunc = validatorRules[rule]

                if (rule.includes(":"))
                {
                    var ruleInfo = rule.split(":")
                    rule = ruleInfo[0]
                    // mong muốn ruleFunc chỉ là function nhận value để validate và trả về message
                    // do đó chạy function bên ngoài trước
                    ruleFunc = validatorRules[rule](ruleInfo[1])
                }

                if (Array.isArray(formRules[input.name]))
                {
                    formRules[input.name].push(ruleFunc)
                }
                else 
                {
                    formRules[input.name] = [ruleFunc]
                }
            }

            // Bước 4 lấy ra các selector của các thẻ input để lắng nghe sự kiện trên nó rồi validate
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
        console.log(formRules)
    }


    function handleValidate(event)
    {
        // lấy element node của : event.target
        // lấy giá trị của thẻ gọi event: event.target.value
        // lấy selector của thẻ gọi event: event.target.name

        var rules = formRules[event.target.name]
        // Dùng find() để tận dụng rules nào có lỗi return ngay
        var errorMessage;
        rules.find(function(rule) {
            errorMessage = rule(event.target.value)
            return errorMessage
        })
        // console.log(errorMessage)
        // Nếu có lỗi thì hiển thị message lỗi ra UI
        if (errorMessage)
        {
            var formGroup = getParent(event.target, ".form_group")
            formGroup.classList.add("invalid")

            console.log(formGroup)
            if (formGroup) 
            {
                var errorElement = formGroup.querySelector(".form_message")
                if (errorElement)
                {
                    errorElement.innerText = errorMessage
                }
            }
        }
        return !errorMessage
    }

    function handleClearError(event)
    {
        var formGroup = getParent(event.target, ".form_group")   
        if (formGroup.classList.contains("invalid"))
        {
            formGroup.classList.remove("invalid")
        
            var errorElement = formGroup.querySelector(".form_message")
            if (errorElement)
            {
                errorElement.innerText = ""
            }
        }
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


    // Bước 5: Xử lí khi submit
    // 1. Bỏ hành vi submit mặc đinh
    // 2. Check validate all input nếu có một cái lỗi thì không cho submit

    formElement.onsubmit = function(event) {
        // this ở đây là element node: formElement, không 
        event.preventDefault()

        var inputElements = formElement.querySelectorAll("input[name][rules]")
        var isFormValid = true
        for (var input of inputElements) 
        {   
            // handleValidate(event) nhận một event là object có key target, giả event bằng object 
            if(!handleValidate({target: input}))
            {
                isFormValid = false
            }
        }

        // khi không có lỗi thì submit form
        if (isFormValid)
        {
            // Nếu có onSubmit thì lấy data từ form về gọi API
            if(typeof _this.onSubmit === 'function')
            {
                 // Lấy ra tất cả thẻ có thuộc tính name và không có thuộc tính disable
                 var enableInputs = formElement.querySelectorAll('[name]:not([disable])')    
                 // enableInputs là NodeList nên chuyển về array mới dùng được các hàm reduce, ...
                 console.log("enableInputs:", enableInputs)
                 console.log(Array.from(enableInputs))
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
                 // this ở đây là element node: formElement, không phải là đối tượng của Validator nên 
                 // không gọi được hàm obSubmit chỗ này.
                 _this.onSubmit(formValues)
                 console.log("formValues: ", formValues)
            }
            // Không có onSubmit thì submit với hành vi mặc định
            else
            {
                formElement.submit()
            }
        }


    }

}


