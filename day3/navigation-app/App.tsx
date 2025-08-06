import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/home";
import { DetailScreen } from "./src/screens/detail";
import { RootStackParamList } from "./src/types/navigation";

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: "Home",
  screenOptions: {
    // headerStyle: { backgroundColor: "tomato" },
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Ana Sayfa",
      },
    },
    Detail: {
      screen: DetailScreen,
      options: ({ route }) => ({
        title: route.params.username,
      }),
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
