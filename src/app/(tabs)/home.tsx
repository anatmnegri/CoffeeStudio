import { View, ScrollView } from "react-native";
import { colors } from "@/src/styles/theme";
import { Cards } from "../../components/cards";
import { Banner } from "../../components/banner";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 25,
        paddingRight: 25,
        paddingLeft: 25,
        gap: 25,
        backgroundColor: colors.main.base,
        justifyContent: "center",
      }}
    >
      <Banner
        data={{
          id: "",
          name: "Clube CS",
          tag: "Novidade",
          cover: "",
        }}
      />
      <ScrollView>
        <Cards data={[]} />
      </ScrollView>
    </View>
  );
}
