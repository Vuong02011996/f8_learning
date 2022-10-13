// module không có default (contants.js) chỉ import với destructuring {}, {TYPE_LOG}
import {TYPE_LOG, TYPE_ERROR, TYPE_WARN} from "./contants.js"


function logger(log, type=TYPE_LOG) {
          console[type](log);
}

export default logger;