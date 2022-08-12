# Quy ước đặt tên class theo BEM
BEM: block, element, modified.\
+ Block: css cho khối.
+ Element: css cho element trong khối.
+ Modified: css bổ  sung cho element.

# Button with BEM
+ Enable: pointer, hover effect.
+ Disable: arrow,, no effect.
+ Css cho btn đứng liền kề.
```
  .btn + .btn {
      margin-left: 16px;
  }

```

# Toast Message with BEM

+ Copy link css from : font-awesome cdn.

+ Add function js in button div, dùng onclick
    ```
        <div onclick="showSuccessToast()" class="btn btn--success">Show success toast</div>   
        <div onclick="showErrorToast()" class="btn btn--danger">Show error toast</div>  

         <!--Function  -->
        function showErrorToast(){
            toast({ title:"Error",
                    message:"Có lỗi xảy ra.", 
                    type:"error", 
                    duration: 3000 });
        }
    ```

+ Add html template in js
    ```
    if(toast_id)
    {
        // Nếú có khối toast(id) thì create các element html của toast class vô toast id
        const toast_class = document.createElement("div");
        // Create template HTML in js(dấu nháy ` không phải chuỗi)
        toast_class.innerHTML = 
        ` <div class="toast toast--${type}">
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">
                    <h3>${title}!</h3>
                </div>
                <div class="toast__msg">
                    ${message}
                </div>
            </div>
    
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        `;
        // append toast class to toast id
        toast_id.appendChild(toast_class)
    }
    ```

+ Add css in js.
    ```
    toast_class.style.animation = `slideInLeft ease .3s, FadeOut linear .5s ${duration}s forwards`
    ```