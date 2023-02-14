import { Button } from "native-base"
import { StyleSheet, View } from "react-native"
import { NativeBaseProvider, Text } from "native-base"
const SplashScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View>
        <Text>SplashScreen</Text>
        <Button title='click' onPress={() => navigation.navigate("Login")} />
      </View>
    </NativeBaseProvider>
  )
}
export default SplashScreen
const styles = StyleSheet.create({})
