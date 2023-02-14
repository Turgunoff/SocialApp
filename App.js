import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native"

import SplashScreen from "./src/screens/SplashScreen"
import LoginScreen from "./src/screens/LoginScreen"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
const styles = StyleSheet.create({})
