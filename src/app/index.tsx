import { View } from "react-native";
import { Welcome } from "../components/welcome";
import { colors } from "@/src/styles/theme";
import { Button } from "../components/button/index";
import { Input } from "../components/textInput/index";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        gap: 40,
        backgroundColor: colors.main.base,
        justifyContent: "center",
      }}
    >
      <Welcome />
      <View
        style={{
          gap: 5,
        }}
      >
        <Input placeholder={"Email"} authentication="" />
        <Input placeholder={"Senha"} authentication="Esqueceu a senha?" />
      </View>
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Entrar</Button.Title>
      </Button>
    </View>
  );
}
