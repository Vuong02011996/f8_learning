//// Test setTimeout()
////setTimeout(function() {
////    console.log("timeout 3s")
////}, 3000)
////console.log("no timeout")
//
//// 2 bước khi tạo một promise
//// 1. tạo 1 đối tượng promise
//// 2. truyền đối số là function cho đối tượng (Executor)
//
//// 3 trạng thái của promise.
//// 1. Pending: khi chua goi function
//// 2. Fulfilled : khi gọi  resolve();
//// 3. Rejected : khi gọi reject();
//
//// Promise Object constructor nhận đối số là 1 function gọi là executor.
//// Khi tạo 1 promise executor sẽ gọi function trước cả việc tạo ra đối tượng promise.
//var promise = new Promise(
//    // Executor
//    // function này trả về 2 tham số điều là hàm.
//    function(resolve, reject) {
//        // Logic : sau khi thực hiện logic phải gọi một trong 2 function ở dưới.
//        // Khi logic thành công thì gọi resolve().
//        // Khi logic thất bại thì gọi reject().
//        // Nếu không gọi 1 trong 2 function thì sẽ bị rò rỉ bộ nhớ (Memory leak) trạng thái pending.
//        resolve(["OKE", {"id": 123, "name": "Name"}]);
////        reject("Có lỗi");
//    }
//);
//
//// Promise có 3 phương thức(.then, .catch, .finally) nhận đối số là callback.
//promise
//    .then(function(result) {
//        // Khi thành công sẽ nhảy vô
//        console.log(result);
//        console.log(1);
//        return "result then 1"
//    })
//    // Tính chất chuỗi(chain) của promise
//    // kết quả trả về của then trước là input của then sau, nếu then trước không trả về then sau sẽ nhận undefined.
//    // Ông đằng sau cần kết quả function đằng trước.
//    .then(function(result) {
//        // Khi thành công sẽ nhảy vô
//        console.log(result);
//        console.log(2);
//    })
//    .then(function(result) {
//        // Khi thành công sẽ nhảy vô
//        console.log(result); // then 2 không return => undefined
//
//        console.log(3);
//        // Nếu then return bất cứ cái gì không phải promise thì thì sẽ chạy ngay vào then phía sau.
//        // Nếu return promise, thì .then phía sau chính là của new promise được return này (không còn là của promise phía ngoài)
//        return new Promise(function(resolve, reject) {
////            reject("Có lỗi");
//        })
//
//    })
//    // then này của new promise return ở trên.
//    .then(function(result) {
//        // Khi thành công sẽ nhảy vô
//        console.log(result)
//        console.log(4);
//    })
//
//    .catch(function(error) {
//        // Khi thất bại sẽ nhảy vô
//        console.log(error);
//    })
//    .finally(function() {
//        // Khi một trong hai hàm resolve() hoặc reject() được gọi
//        console.log("Done");
//    })
//
//// -----------------------------------------------------------------------------------------------------
//// Ví dụ Promise chain:  In ra các số 1, 2, 3 sau khoảng thời gian cách đều 1s không dùng setInterval
//
//function sleep(ms) {
//    return new Promise(function(resolve) {
//            // resolve được gọi sau 1s, gọi resole sẽ vào .then
//            setTimeout(resolve, ms)
//        });
//}
//sleep(1000) // trả về promise.
//    .then(function() {
//        console.log(1);
//        return sleep(1000);
//    })
//    .then(function() {
//        console.log(2);
//        // Mot promise reject se nhay den catch.
//        return new Promise(function(resolve, reject) {
//            reject("Co Loi");
//        })
//
//    })
//    .then(function() {
//        console.log(3);
//        return sleep(1000);
//    })
//    // Can handle de xu li cho nhung promise bi reject
//     .catch(function(err) {
//        console.log(err);
//     });
//// -----------------------------------------------------------------------------------------------------
//// Promise.resole(), Promise.reject()
//// Những promise không có logic, biết kết quả là thành công hoặc thất bại thì ta tạo nhanh bg cach sau:
//
//var promise = Promise.resolve("Success");
//promise
//    .then(function (result) {
//        console.log("result: ", result);
//    })
//    // Nếu dùng Promise.resolve() Không bao h chạy xuống phần catch.
//    .catch(function (err) {
//        console.log("err: ", err);
//    })
//
//// -----------------------------------------------------------------------------------------------------
// // Promise all : giup chay song song cac promise, nhan ket qua cung mot thoi diem, cac ket qua promise khong phu thuoc vao nhau.
//
// var promise1 = new Promise(function(resolve) {
//    setTimeout(function(){
//        resolve([1]);
//    }, 1000)
// })
//
//var promise2 = new Promise(function(resolve) {
//    setTimeout(function(){
//        resolve([2, 3]);
//    }, 2000)
//})
//
//// Neu co mot promise co loi trong promise.all() thi tat ca promise sau khong care nua, se lot vao .catch
//var promise3 = Promise.reject("Co Loi");
//
//// Promise all nhan doi so la mang, moi phan tu la mot promise.
//Promise.all([promise1, promise2, promise3])
//    // promise all tra ve mang result la moi phan tu la ket qua tung promise.
//    .then(function(result) {
//        var result1 = result[0]
//        var result2 = result[1]
//        console.log("Promise all:", result1.concat(result2))
//    })
//    .catch(function(err) {
//        console.log("Error Promise all: ", err)
//    })

// -----------------------------------------------------------------------------------------------------
// Su dung ul, li hien thi: 1. Name1: comment of Name1
//                          2. Name2: comment of Name2

// Phan tich: lay comment, sau do su dung user_id cua comment lay user tuong ung.


// Example: Su dung nhung kien thuc sau
// Array: map, filter, find, includes
// Function, Callback
// DOM innerHTML, string.
// Promise.

var users = [
    {
        id: 1,
        name: "Name1",
    },
    {
        id: 2,
        name: "Name2",
    },
    {
        id: 3,
        name: "Name3",
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        comment: "comment of Name1"
    },
    {
        id: 2,
        user_id: 2,
        comment: "comment of Name2"
    },
    {
        id: 3,
        user_id: 3,
        comment: "comment of Name3"
    },
    {
        id: 4,
        user_id: 3,
        comment: "comment of Name3"
    }
]

// Trong thuc te lay data tu API se tuy thuoc vao đường mạng nên ta luôn dùng promise để chờ nhận được kết quả mới xử lí.

// function lọc user từ users and UserIds
function getUsersByIds(userIds) {
    // FAKE API giả sử sau 1s mới nhận được data
    return new Promise(function(resolve) {
        // logic xử lí lấy user từ array UserIds
         var result_user = users.filter(function (user) {
            return userIds.includes(user.id)
         })
         // Sau 1s trả về
         setTimeout(function() {
            resolve(result_user);
         }, 1000)

    })
}
// function lấy data comments từ api
function getComments() {
    return new Promise(function(resolve) {
        // Fake API: giả sử sau 1s api mới trả về kết quả
        setTimeout(function() {
            resolve(comments)
        }, 1000);
    })
}
getComments()
    // B1 lấy UserId từ comments
    .then(function(comments) {
        console.log("comments: ", comments)
        // get array userIds from array comment, using map
        var userIds = comments.map(function(comment) {
            return comment.user_id
        })
        console.log("userIds: ", userIds)
       // B2 lọc user từ UserIds
        return getUsersByIds(userIds)
            // getUsersByIds resolve result_user nên .then nhận được
            .then(function(result_user) {
                return {
                    users: result_user,
                    comments: comments
                }
            })
    })
    // B3 Dùng DOM get show html với user và comment ở trên.
    .then(function (data) {
        var commentBlock = document.getElementById("comment_block")
        html = ""
        data.comments.forEach(function(comment) {
            var user_with_comment = data.users.find(function(user) {
                return user.id === comment.user_id
            })
            html += `<li>${user_with_comment.name}: ${comment.comment}</li>`

        })
        commentBlock.innerHTML = html
    })

// Test function getUsersByIds
//getUsersByIds([1, 3])
//    .then(function(result_user) {
//        console.log("Test getUsersByIds: ", result_user)
//    })

// Test DOM , innerHTML
//var commentBlock = document.getElementById("comment_block")
//console.log(commentBlock)
//
//
//
//html = `<li> Name1: comment of Name1 </li>`
//commentBlock.innerHTML = html

