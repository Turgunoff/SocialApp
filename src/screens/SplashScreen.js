import { StyleSheet, Image } from "react-native"
import { NativeBaseProvider } from "native-base"
import Onboarding from "react-native-onboarding-swiper"

const SplashScreen = () => {
  return (
    <NativeBaseProvider>
      <Onboarding
        pages={[
          {
            backgroundColor: "#464646",
            image: <Image source={require("../../assets/splash.png")} />,
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#121212",
            image: <Image source={require("../../assets/splash.png")} />,
            title: "Onboarding 2",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#828282",
            image: <Image source={require("../../assets/splash.png")} />,
            title: "Onboarding 3",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </NativeBaseProvider>
  )
}
export default SplashScreen
const styles = StyleSheet.create({})
