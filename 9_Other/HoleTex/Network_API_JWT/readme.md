# API response 
## Status Code của HTTP
+ https://viblo.asia/p/tim-hieu-ve-http-status-code-lA7GKwx5GKZQ
+  Ký tự đầu tiên của Status-Code định nghĩa loại Response và hai ký tự cuối không có bất cứ vai trò phân loại nào. Có 5 giá trị của ký tự đầu tiên:
    + `1xx`: Information (Thông tin): Khi nhận được những mã như vậy tức là request đã được server tiếp nhận và quá trình xử lý request đang được tiếp tục.
    + `2xx`: Success (Thành công): Khi nhận được những mã như vậy tức là request đã được server tiếp nhận, hiểu và xử lý thành công
    + `3xx`: Redirection (Chuyển hướng): Mã trạng thái này cho biết client cần có thêm action để hoàn thành request
    + `4xx`: Client Error (Lỗi Client): Nó nghĩa là request chứa cú pháp không chính xác hoặc không được thực hiện.
        + `403 Forbidden`: Request là hợp lệ nhưng server từ chối đáp ứng nó. Nó có nghĩa là trái phép, người dùng không có quyền cần thiết để tiếp cận với các tài nguyên.
    + `5xx`: Server Error (Lỗi Server): Nó nghĩa là Server thất bại với việc thực hiện một request nhìn như có vẻ khả thi.
        + `500 Internal Server Error`: Một thông báo chung chung, được đưa ra khi Server gặp phải một trường hợp bất ngờ, Message cụ thể là không phù hợp.