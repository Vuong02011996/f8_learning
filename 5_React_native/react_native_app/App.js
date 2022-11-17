import { StyleSheet, Text, View, Image, ScrollView, 
    TouchableOpacity,
    Alert,
 } from 'react-native'
import React from 'react'
// import CateItemList from './components/CateItemList.js'

import Icon from "./assets/icon.png"

export default function App() {
  return (
    <View>
      <CateItemList/>
    </View>
  )
}

// StyleSheet
// Cách 1 , viết thẳng vòa props style
function CateItemList()
{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello anc</Text>
            <Image style={styles.categoryImage} source={Icon}/>
        </View>
    )
}

// Cách 2 
const styles = StyleSheet.create({
    categoryImage : {
        height: 64,
        width: 64,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    text: {
        fontSize: 50,
        fontWeight: 500
    }
})


// ScrollView: cuộn lên xuống khi component vượt quá màn hình
export default function App() {
    return (
      <View>
          <ScrollView>
            <CateItemList/>
            <CateItemList/>
            <CateItemList/>
          </ScrollView>
      </View>
    )
  }

// FlatList: dùng để render list như dùng map.

// Xử lí sự kiện
// TouchableOpacity: chạm vào mờ thêm một chút.
// Chỉ cần bao ngoài element muôn touch. Dùng onPress như onClick
export default function App() {
    return (
      <View>
          <ScrollView>
              <TouchableOpacity activeOpacity={0.5} onPress={()=>{Alert.alert("Click")}}>       
                <CateItemList/>
                <CateItemList/>
                <CateItemList/>
              </TouchableOpacity>
          </ScrollView>
      </View>
    )
  }

// React Navigation(stack) : chuyển các màn hình 
// React Navigation(tabs) : chuyển các màn hình.

// Cài thư viện react-navigation https://reactnavigation.org/