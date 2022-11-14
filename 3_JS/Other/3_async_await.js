// từ khóa async cho một hàm để thể hiện rằng đây là một hàm bất đồng bộ(Step 3 được chạy trước Step 2)
// Hàm async trả về một promise

// Ví dụ
async function f() {
    console.log('Step 1-0');
    return Promise.resolve('homiedev.com');
}

// Vì hàm này return một promise nên ta có thể dùng method then để lấy data khi promise hoàn thành như sau
    // f()
    //     .then(function(result) {
    //         console.log(result)
    //         return 'abc'
    //     })
    //     .then(function(result) {
    //         console.log(result)
    //     })
    //     .then(function(result) {
    //         console.log('Step 2-0');
    //         console.log(result)
    //     });
    // console.log('Step 3-0');

// Nhưng thay vì return promise và dùng then như promise sẽ phức tạp khó hiểu khi có promise chain thì người ta dùng await bên trong async.

// Từ khóa await được sử dụng bên trong hàm async để chờ một xử lí bất đồng bộ, Chúng ta chỉ có thể sử dụng await bên trong async function.
// Cú pháp : await sẽ đứng trước một promise (let result = await promise)
// Nó sẽ tạm dừng async function cho đến khi promise return về giá trị (kết quả của resolve hoặc reject)

let promise = new Promise(function (resolve, reject) {
    // chờ sau 3 giây thì gọi resolve
    setTimeout(function () {
      resolve('Promise resolved')
    }, 3000); 
});

// async function
async function asyncFunc() {
    console.log("Step 1")

    // chờ cho đến khi promise resolve
    let result = await promise; 

    console.log(result);
    console.log("Step 2")
}

// gọi async function
    // asyncFunc();
    // console.log("Step 3")
// Ta thấy khi dùng await thì function asyncFunc sẽ tạm dừng cho đến khi promise được resolve hoặc reject rồi mới chạy tiếp.


// Trường hợp sử dụng nhiều promise
    // let promise1 = new Promise((resolve, reject)=>{resolve('Promise1')})
    // let promise2 = new Promise((resolve)=>{resolve('Promise2 resolve')});
    // let promise3 = new Promise((reject)=>{reject('Promise3 reject')});

    // async function asyncFunc1() {
    //     console.log("promise1: ", promise1)
    //     let result1 = await promise1;
    //     let result2 = await promise2;
    //     let result3 = await promise3;

    //     console.log(result1);
    //     console.log(result2);
    //     console.log(result3);
    //     console.log('homiedev.com');
    // }
    // asyncFunc1()
// Ta thấy khi dùng await dù promise trả về thành công (resolve) hay thất bại (reject) thì đều nhận kết quả ở result 
// Nên ta cần cơ chế để bắt lỗi đó là sử dụng method try catch() để bắt lỗi khi promise gọi reject

let promise4 = new Promise((resolve, reject)=>{resolve('Promise4 reject')});

async function asyncFunc2() {
    let result3 = await promise4;
    console.log(result3);
    console.log('homiedev.com');
}
asyncFunc2().catch(
    // Nếu dùng catch thì dù promise gọi resolve hay reject thì đều chạy xuống dòng này 
    console.log("promise gọi reject")
)

let promise5 = new Promise((resolve, reject)=>{reject('Promise5 reject')});

// async function
async function asyncFunc3() {
    try {
        // promise trả về lỗi ngay sau đó sẽ xử lý lỗi ở catch
        let result = await promise5; 

        // console.log(result);
    }   
    catch(error) {
        // xử lý lỗi tại đây
        // Nếu promise gọi reject thì mới chạy xuống ở đây và error là đối số của reject
        console.log("Error: ", error);
    }
}

// gọi async function
asyncFunc3(); // Lỗi mất rồi !😢