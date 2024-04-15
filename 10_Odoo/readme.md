# Intro
+ Open source web , app quản trị doanh nghiệp
+ Giống: Oracle ERP, SAP ERP, base.vn(Việt Nam)
+ Ưu điểm:
    + Miễn phí
    + Dễ sử dụng
    + Đầy đủ chức năng
+ Yêu cầu để Dev:
    + Python: server backend
    + SQL: Postgres - Dùng pdAdmin để xem data.
    + HTML, CSS, JS, XML: FE
+ ERP: phần mềm thống nhất tất cả hoạt động trong doanh nghiệp.
quản lý lương, nhân sự, kho
+ Thảo luận nhóm, chat, …
+ Odoo: 2005 , Belgium

# Install and setup odoo 16 in Oryza
+ Install from source git: https://www.odoo.com/documentation/17.0/administration/on_premise/source.html
+ Chú ý kết nối với Postgres https://stackoverflow.com/questions/53450720/not-able-to-connect-postgresql-with-odoo
  ```Odoo oryza 
    clone oryza_odoo16: 
        git clone ssh://git@repo.oryza.vn:2222/oryza/odoo/oryza_odoo16.git
    clone odoo 16.0
        git clone -b 16.0 -depth 1  git@github.com:odoo/odoo.git 
    create conda env
    pip install requirements
    
    access denied khi tạo database mới : 
    mở command: admin_passwd = admin, tạo mail mới, db mới(admin/admin)
  ```
+ change file conf in debian folder:
    ```[options]
    ; This is the password that allows database operations:
    ; admin_passwd = admin
    db_host = 0.0.0.0
    db_port = 5432
    db_user = vuong
    db_password = admin
    addons_path = /home/vuong/Desktop/Project/odoo/addons,/home/vuong/Desktop/Project/oryza_odoo16
    default_productivity_apps = True```
    
    
+ RUN: 
  
   ``` ./odoo-bin -c debian/odoo.conf OR run icon in pycharm```

  
# App aside odoo 
+ https://apps.odoo.com/apps/modules

# Basic 

+ Cấu trúc một modules 

# Tạo module 
+ Tạo python package với file __manifest__.py
+ Điền thông tin module vào file __manifest__.py
=> search trong app, filter by extra tên module.
  
# Tạo models
+ Trong modules tạo python package với tên models 
+ Mỗi models là file python, cũng chính là một bảng trong database.
+ import các bảng và file __init__ 
+ import models vào file __init__ của module.

# Tạo Form, View
+ Có nhiều loại View: List View, ...

+ Tạo thư mục views hoặc data: chứa toàn bộ file xml, những thông tin ta muốn hiển thị lên client side.
+ Bên views trong là các file xml tương ứng với mỗi models, nên đặt tên giống với model là oke.
+ Đưa đường dẫn file xml nào vào trường data của file __manifest__.py 
+ Tạo Form view trong file xml: bắt chước từ các file view khác của odoo.

# Tạo Actions và Menu
+ Tạo actions để trỏ tới một view để hiển thị lên client.
  + Trước hết tạo một menu, rồi tạo một action trỏ tới menu đó để hiển thị cái form đó.
    + Vào file xml. copy một mẫu menu và submenu bỏ vào.
    + Vào file xml với menu có action, copy một action 
    + action="action_my_models" vào submenu.
    + Check menu item đã có action trên web.
  + Để menu hiển thị ở Home menu ta phải cấp quyền cho nó 
    + Tạo folder 
  
