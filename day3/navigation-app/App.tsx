import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/home";
import { DetailScreen } from "./src/screens/detail";
import { RootStackParamList } from "./src/types/navigation";
import { CustomHeaderTitle } from "./src/components/custom-header-title";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "./src/screens/profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomeStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Ana Sayfa",
        headerTitle: () => <CustomHeaderTitle />,
      },
    },
    Detail: {
      screen: DetailScreen,
      options: ({ route }) => ({
        title: route.params.name,
      }),
    },
  },
});

const Tabs = createBottomTabNavigator({
  screenOptions: {
    tabBarPosition: "bottom",
  },
  screens: {
    Home: {
      screen: HomeStack,
      options: {
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
        title: "Ana Sayfa",
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
        title: "Profil",
        tabBarLabel: "Profil",
        tabBarBadge: 2,
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Tabs,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}
