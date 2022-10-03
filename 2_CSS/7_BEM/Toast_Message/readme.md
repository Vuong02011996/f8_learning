
# Toast Message with BEM
Các kiến thức trong video:
    + Đặt tên class theo BEM, viết html cách truyền thống theo BEM nhanh gọn(toast).
    + CSS theo BEM để  dùng lại nhiều lần. Chỉ cần copy html và thêm modifier trong css.
    + Tạo thẻ div(createElement) và add tên class cho thẻ trong JS.(toast_class.classList.add('toast', `toast--${type}`);)
    + Cách add các html element (innerHTML, appendChild) trong JS.
    + Cách lấy giá trị từ biến và truyền vô trong template html(`toast--${type}`).
    + Lắng nghe sự kiện onclick trên button và viết hàm js xử  lí khi click vào.
    + Cách truyền đối số vào hàm trong JS.
    + Tạo keyframe , animation hiện từ ngoài vào và ẩn đi trong CSS thuần và CSS trong JS.

## Sau cùng viết HTML và CSS hoàn toàn bằng Javascript.

+ Copy link css from : font-awesome cdn.

# Add function js in button div, dùng onclick
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

# Add html template in js
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
        toast_id.appendChild(toast_class10)
    }
    ```

# Add css in js.
    ```
    toast_class.style.animation = `slideInLeft ease .3s, FadeOut linear .5s ${duration}s forwards`
    ```