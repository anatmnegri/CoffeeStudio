import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../app/(tabs)/home";
import SettingsScreen from "../../app/index";
import { colors } from "@/src/styles/colors";
import {
  IconHomeFilled,
  IconMapPinFilled,
  IconShoppingCartFilled,
  IconCoffee,
} from "@tabler/icons-react-native";

const Tab = createBottomTabNavigator();

export function Footer() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          //position: "fixed",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 80,
        },
        tabBarLabelStyle: { fontSize: 24 },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <IconHomeFilled
              size={24}
              color={focused ? colors.main.darkGreen : colors.gray[400]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CS"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <IconCoffee
              size={24}
              color={focused ? colors.main.darkGreen : colors.gray[400]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <IconMapPinFilled
              size={24}
              color={focused ? colors.main.darkGreen : colors.gray[400]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Compras"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <IconShoppingCartFilled
              size={24}
              color={focused ? colors.main.darkGreen : colors.gray[400]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
