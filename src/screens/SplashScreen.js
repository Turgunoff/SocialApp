import { StyleSheet, Image, LayoutAnimation } from "react-native"
import { NativeBaseProvider } from "native-base"
import Onboarding from "react-native-onboarding-swiper"
import LottieView from "lottie-react-native"

const SplashScreen = () => {
  return (
    <NativeBaseProvider>
      <Onboarding
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <LottieView
                source={require("../assets/welcome1.json")}
                autoplay
              />
            ),
          },
          {
            backgroundColor: "#fff",
            image: (
              <LottieView
                source={require("../assets/welcome2.json")}
                autoplay
              />
            ),
          },
          {
            backgroundColor: "#fff",
            image: (
              <LottieView
                source={require("../assets/welcome3 .json")}
                autoplay
              />
            ),
          },
        ]}
      />
    </NativeBaseProvider>
  )
}
export default SplashScreen
const styles = StyleSheet.create({})
