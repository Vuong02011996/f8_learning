/**
 * Mỗi component sẽ dựa vào tên namespace để biết dispatch action thuộc service ở đâu.
 * Các trường hợp dispatch action và thay đổi store:
 *  1. Khi click vào button chỉ thay đổi dữ liệu state không gọi api.
 *  2. Khi click vào button vừa thay đổi dữ liệu state vừa gọi api.
 * 
 * 
 *     // Trường hợp này khi bấm Lưu cấu hình sẽ vừa gọi api vừa update dữ liệu trên store
    // Có 3 cách xử lí: Phú sử dụng cách 1
    /**
     * Cách 1. dispatch action mỗi khi onChangeDate để update lại state khi thời gian thay đổi.
     * Trong service sau khi bấm Lưu cấu hình sẽ gọi api update dữ liệu lên DB không làm gì ở store cả.
     * Cách 2. dispatch action mỗi khi handleSaveConfig vừa gọi api xong sẽ dùng callback dispatch tiếp một action
     * để update dữ liệu lên store.
     * Cách 3: Dùng saga.put SET lại data sau khi saga.call
     */
