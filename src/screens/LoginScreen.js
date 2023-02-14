import { StyleSheet, View } from "react-native"
import { NativeBaseProvider, Text, Button } from "native-base"

const LoginScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View>
        <Text>LoginScreen</Text>
        <Button title='click' onPress={() => navigation.navigate("Splash")} />
      </View>
    </NativeBaseProvider>
  )
}
export default LoginScreen
const styles = StyleSheet.create({})
