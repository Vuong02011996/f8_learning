import {TYPE_LOG} from "./contants.js" // module không có default chỉ import với destructuring {}


function logger(log, type=TYPE_LOG) {
          console[type](log);
}

export default logger;