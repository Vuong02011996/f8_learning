
function highlight([first, ...strings], ...value) {
          console.log(first) // Hoc lap trinh
          console.log(strings) // [tai, !]
          console.log(value) // [python, F8]
}

var brand = 'F8'
var course = "python"

const html = highlight`Hoc lap trinh ${course} tai ${brand}!`
// function highlight sẽ nhận đối số gồm mảng các phần tử không chứa ${}, phần tử tiếp theo là các ${}

// console.log(html)