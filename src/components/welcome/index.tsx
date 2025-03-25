import { Image, Text, View } from "react-native";
import { s } from "./styles";
import { colors } from "@/src/styles/colors";

export function Welcome() {
  return (
    <View>
      <View style={s.titleContainer}>
        <Image source={require("../../assets/LogoDark.png")} style={s.logo} />
      </View>
      <Text style={s.title}>Boas vindas ao Coffee Studio!</Text>
      <Text style={s.subtitle}>
        Acumule pontos e use cupons na sua rede de cafeteria preferida.
      </Text>
    </View>
  );
}
