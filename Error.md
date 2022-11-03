# Không hiển thị gì trên web
+ Xem trong body có thẻ root chưa.

# Lỗi thẻ div, nhưng đúng cú pháp, và không hiển thị gì trên web
+ Xem có type="text/babel" trong thẻ script chưa.

# Lỗi không web không chạy(404) 
+ Chú ý luôn mở npm start (như một web server để truy cập vào)

# Run app Phú
## Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime (93): 
+ Check version node support: https://github.com/sass/node-sass/releases/tag/v4.14.1 - node 14.


# `npm start` React Native Error: ENOSPC: System limit for number of file watchers reached
+ https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached
+ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

# Không viết (  dưới return được phải viết trên 1 dòng `return (`
# Mỗi lần viết thay đổi code thì App.js cập nhật ngay lên web nên chú ý F5 lại để tránh thấy lỗi trong lúc code.

# Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite : Lỗi gán cho event hoặc biến là function chớ không phải gọi function. 
