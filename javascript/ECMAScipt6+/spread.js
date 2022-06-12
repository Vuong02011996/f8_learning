// Dùng để giải array hoặc object 

var array1 = [1, 2, 3]
var array2 = [4, 5 ,6]

var array3 = [...array1, ...array2]
console.log(array3)

// Rest với spread
var array = [1, 2, 3]
function logger(...rest)  { // Rest
          for(var i = 0; i < rest.length; i ++)
          {
                    console.log(rest[i])
          }
}
logger(...array)// spread