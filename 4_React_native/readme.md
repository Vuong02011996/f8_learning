# Thông tin về  React_Native
+ JavaScript both ios(swift, objective-c) + android(Java)
+ Ngoài React Native của JS còn có các Framework sau có thể build app trên nhiều nền tảng(cross-platform) như: Xamarin(C#), Flutter(Dart), ngôn ngữ Kotlin.




+ Có ba cách build app react-native
    + Expo CLI(tool setup - fast easy có packgage, api có sẵn chỉ cần import vào sử dụng)
    + React Native CLI(command line - dùng cho dự án lớn)
    + Expo Snack

# Có 3 cách để xem giao diện app di động sau khi code
+ Trực tiếp trên browser(Code online) 
    + Tạo tài khoản expo: Vương02011996 pass 02011996
    + Vào https://snack.expo.dev/ (tool/snack)
    + Phải đợi để tới lượt mình mới sử dụng được máy ảo.
    + https://www.youtube.com/watch?v=YESKWUQHDDc&list=PLv6GftO355AtasIvXXJNXIs_H6v9KSUXC&index=2

+ Cài đặt sử dụng máy di động ảo trên máy tính
    + Dùng với visual studio code
    + Vào trang chủ react-native setup environment -> https://reactnative.dev/docs/environment-setup tạo project với `npx create-expo-app AwesomeProject`, check expo --version , 
    + Cách 2: 
        + (`sudo npm i -g expo-cli` sudo mới không lỗi)
        + `expo init react_native_app`
    ```
    - cd react_native_app
    - npm run android
    - npm run ios # you need to use macOS to build the iOS project - use the Expo app if you need to do iOS development without a Mac
    - npm run web
    ```
    + Cài máy ảo Iphone và Android
        + Trên MacOS đã có XCode(liver server) xem máy ảo Iphone
        + Xem máy ảo Android cần Android Studio -> setup.

+ Sử dụng thiết bị di động thật lại có 2 cách 
    + Cách 1: xem trực tiếp trên điện thoại
    + Cách 2: xem đt trên màn hình PC
        + Cài airdroid cast trên đt và PC (web/app) rồi kết nối.
        + Tải Expo Go về máy và xem.


# VS extension
+ ES7+ React/Redux/React-Native snippets 
    + Tạo file code có import , component, stylesheet sẵn vs react-native: rnfs-> enter(react_native_function_style)



# React DOM vs React Native
+ Giống:
    + Function component
    + Props
    + State 
    + JSX
    + Lifecycle
    + Context API
    + Hook
    + ...
+ Khác
    + RN không sử dụng react element như: <p>, <div>, <img>, .. 
    + Thay vào đó sử dụng <Text>, <View>, <Image>, ..

    + RN không có các DOM objects như window, document, nên không có get element by id, class ,.. Không có id, class luôn.
    + React DOM không có các device API như Dimension, Vibration, ... 

    + RN không có LocalStorage, sessionStorage, cookies, ...
    + Thay vào đó có AsyncStorage.

    + React DOM có thể yêu cầu file .css
    + React Native sử dụng syntax giống CSS nhưng không phải CSS.Không có psedo element, class.

    + React DOM layout mặc định theo từng thẻ: div - block, a - inline, ...
    + RN có layout mặc định là flex, column direction.(vì mobile nhỏ chỉ muốn một cột)

    + Navigation: Web dùng thẻ a, href 
    + Muốn nhảy sang trang này trang kia(màn hình) thì phải gọi api (Browser thay đổi theo URL). Sử dụng các kiểu navigation như Stack, Tabs, 

    + RN có các sensor API như: Geolocation(lấy vị trí), Gyroscope, Accelerometer(gia tốc), Device motion, ..
    + Đơn vị khác DOM pixel.
# Degging

# StyleSheet 