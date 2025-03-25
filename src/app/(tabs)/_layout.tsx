import { Tabs } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import { colors } from "@/src/styles/colors";
import {
  IconHomeFilled,
  IconMapPinFilled,
  IconShoppingCartFilled,
  IconCoffee,
  IconMenu2,
} from "@tabler/icons-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          height: 70,
          backgroundColor: "#ffffff",
          padding: 10,
        },
        headerStyle: {
          backgroundColor: colors.main.darkGreen,
          borderBottomColor: colors.main.darkGreen,
        },
        headerTintColor: "#fff",
        tabBarLabelStyle: { fontSize: 14 },
        tabBarShowLabel: false,
        headerRight: () => (
          <TouchableOpacity onPress={() => console.log("Abrir menu")}>
            <IconMenu2 size={24} color="#fff" style={{ marginRight: 25 }} />
          </TouchableOpacity>
        ),
        headerTitle: () => (
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 12, color: "#fff" }}>Olá!</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}>
              Usuário!
            </Text>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <IconHomeFilled
                size={24}
                fill={focused ? colors.main.darkGreen : colors.gray[400]}
                stroke={"none"}
              />
              {focused && (
                <View
                  style={{
                    width: 8,
                    height: 3,
                    backgroundColor: colors.main.darkGreen,
                    marginTop: 2,
                    borderRadius: 2,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="mapa"
        options={{
          title: "Mapa",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <IconMapPinFilled
                size={24}
                fill={focused ? colors.main.darkGreen : colors.gray[400]}
                stroke={"none"}
              />
              {focused && (
                <View
                  style={{
                    width: 8,
                    height: 3,
                    backgroundColor: colors.main.darkGreen,
                    marginTop: 2,
                    borderRadius: 2,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="compras"
        options={{
          title: "Compras",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <IconShoppingCartFilled
                size={24}
                fill={focused ? colors.main.darkGreen : colors.gray[400]}
                stroke={"none"}
              />
              {focused && (
                <View
                  style={{
                    width: 8,
                    height: 3,
                    backgroundColor: colors.main.darkGreen,
                    marginTop: 2,
                    borderRadius: 2,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="clubeCS"
        options={{
          title: "Clube CS",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <IconCoffee
                size={24}
                fill={focused ? colors.main.darkGreen : colors.gray[400]}
                stroke={"none"}
              />
              {focused && (
                <View
                  style={{
                    width: 8,
                    height: 3,
                    backgroundColor: colors.main.darkGreen,
                    marginTop: 2,
                    borderRadius: 2,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
