// ------------------Fetch-----------------------------
/**
 * Frontend : Xây dựng giao diện và logic giao diện người dùng.
 * Backend : Xây dựng logic xử lí và cơ sở dữ liệu.
 * Fetch: Từ FE gọi lên API để  lấy lên nội dung lưu trữ từ phía BE.
 * BE cung cấp API data dạng JSON cho FE, FE fetch data from API , parse JSON và reder lên html
 * Hàm fetch nhận vô một url và trả về một promise
*/


// ---------------JSON-SERVER create fake API-----------------
// Sử dụng để tạo API thay cho BE khi BE chưa làm xong data.

//[json-server](https://github.com/typicode/json-server)
// Thư viện Fake REST API(Mock API) cho FE trong 30s

// Cài Node JS trước, để sử dụng npm(node package manager).
// Có thể cài trên toàn bộ máy hoặc trong một thư mục cụ thể (bỏ -g)
// Sau khi cài xong npm sẽ sinh ra một file là package.json để quản lý
// tất cả các thư viện được cài bằng npm.(dependencíes)

// Tạo một file db.json để lưu fake data của chúng ta.
// Nếu cài ở folder thêm trường start vào scripts với lện chạy json-server.
// Sau đó dùng url.


// ---------------------Postman------------------------------------


// Fetch example
var courseApi = "http://localhost:3000/course"
var block_fetch = document.querySelector("#block_fetch")
console.log("block_fetch: ", block_fetch)

function test_fetch() {
    // Hàm fetch nhận vô một url và trả về một promise
    fetch(courseApi)
        .then(function(response) {
            // response.json() đã parse JSON về JS type.
            // Hàm response.json() tiếp tục trả về một promise khác với data là dữ liệu đã được parse.
            return response.json();
        })
        // then này là của promise được return ở then trước 
        // Ở đây đã sử dụng promise chain , công việc sau muốn thực hiện phải chờ công việc trước xong
        // mà không biết công việc trước khi nào xong, có lỗi hay không.
        .then(function(courses) {
            console.log(courses)
            var htmls = courses.map(function(course) {
                return `<li>
                    <h2>${course.title}</h2>
                    <p>${course.author}</p>
                </li>`
            })
            // map trả về mảng mỗi phần tử là template string nối

            console.log(htmls)
            // htmls.join("") trả về  chuỗi html cần render.
            document.getElementById("block_fetch").innerHTML = htmls.join("")
        })
        .catch(function(err) {
            console.log(err)
        })

}

// ----------------------------------------------Fetch GET, POST, DELETE, PUT -----------------------------------------
// Fetch GET
function getCourse(callback) {
    // Hàm fetch trả về một response dạng promise
    fetch(courseApi)
        .then(function(response) {
            // response.json() đã parse JSON về JS types và trả về promise.
            return response.json();
        })
        // sử dụng callback vì .then() nhận một function vô xử lí. ta viết hàm xử lí bên ngoài rồi truyền vào.
        .then(callback)
}

// Fetch POST
function createCourse(data, callback) {
    // Hàm fetch trả về một response dạng promise
    options = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
         body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    fetch(courseApi, options)
        .then(function(response) {
            // response.json() đã parse JSON về JS types và trả về promise.
            return response.json();
        })
        // nhận callback để làm việc.
        .then(callback)
}

// Fetch DELETE
function handleDeleteCourse(id) {
    // Hàm fetch trả về một response dạng promise
    options = {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }

    fetch(courseApi + "/" + id, options)
        .then(function(response) {
            // response.json() đã parse JSON về JS types và trả về promise.
            return response.json();
        })
        .then(function() {
            // delete the li voi class
            document.querySelector(".course_item_" + id).remove()
        })
}
// Fetch PUT

// ----------------------------------------------------------------------------------------------------------
// function render course HTML
function renderCourse(courses) {
    console.log("courses before render: ", courses)
    var htmls = courses.map(function(course) {
                return `<li class="course_item_${course.id}" >
                    <h2>${course.name}</h2>
                    <p>${course.description}</p>
                    <button onclick="handleDeleteCourse(${course.id})"> Xoa </button>
                </li>`
            })
    // map trả về mảng mỗi phần tử là template string nối
//    console.log(htmls)
    block_fetch.innerHTML = htmls.join("")

}

// function handle Form
function handleCreateForm(){
    var createBtn = document.querySelector("#create")
    createBtn.onclick = function() {
        // get value of the name
        var name = document.querySelector("input[name]").value
        console.log("name: ", name)
//        var description = document.querySelector("input[description]")
        var description = document.querySelector("#des").value
        console.log("description: ", description)

        // bấm create tạo dữ liệu mới
        var data = {
            name: name,
            description: description
        }
        createCourse(data, function() {
            getCourse(renderCourse)
        })
    }
}

function start() {
//    getCourse(function(course) {
//        renderCourse(course)
//    });
    // có thể viết gọn thành hàm truyền đối số là hàm
    getCourse(renderCourse)
    handleCreateForm()
}

start();


