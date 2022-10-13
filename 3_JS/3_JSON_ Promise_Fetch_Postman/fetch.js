// Build json-server and create fake API
// Fetch example
var courseApi = "http://localhost:3000/course"
var block_fetch = document.querySelector("#block_fetch")
console.log("block_fetch: ", block_fetch)

function test_fetch() {
    // Hàm fetch trả về một response dạng promise
    fetch(courseApi)
        .then(function(response) {
            // response.json() đã parse JSON về JS types và trả về promise.
            return response.json();
        })
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
    // có thể viết gọn thành
    getCourse(renderCourse)
    handleCreateForm()
}

start();


