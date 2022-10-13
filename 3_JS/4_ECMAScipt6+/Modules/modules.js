import logger from "./log.js"; // logger là export default nên import bình thường không cần destructoring

// import các giá trị không phải export default 
// Cách 1
import {TYPE_LOG, TYPE_ERROR, TYPE_WARN} from "./contants.js"
// Cách 2
import * as contants from "./contants.js"


// Modules
// Muốn sử dụng modules nào thì dùng import nạp module đó.
// module export cái gì thì thèn import nhận được cái đó.


// contants là object chứa tất cả các biến const bên contants.js 
logger("Meassage... ", contants.TYPE_LOG)