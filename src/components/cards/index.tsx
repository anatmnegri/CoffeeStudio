import { Card, cardProps } from "../card";
import { s } from "./style";
import { router } from "expo-router";
import { View, Text } from "react-native";
import { IconStar } from "@tabler/icons-react-native";
import { colors } from "@/src/styles/theme";

type Props = {
  data: cardProps[];
};

export function Cards({ data }: Props) {
  return (
    <View style={s.container}>
      <View style={s.titleContainer}>
        <IconStar
          size={24}
          color={colors.main.darkGreen}
          fill={colors.main.darkGreen}
        />
        <Text style={s.title}>Confira os itens mais pedidos!</Text>
      </View>
      <View style={s.cardsContainer}>
        <Card
          data={{
            id: "",
            name: "Nome do item",
            description: "Descrição",
            price: "11,50",
            cover: "",
          }}
        />
        <Card
          data={{
            id: "",
            name: "Nome do item",
            description: "Descrição",
            price: "11,50",
            cover: "",
          }}
        />
        <Card
          data={{
            id: "",
            name: "Nome do item",
            description: "Descrição",
            price: "11,50",
            cover: "",
          }}
        />
        <Card
          data={{
            id: "",
            name: "Nome do item",
            description: "Descrição",
            price: "11,50",
            cover: "",
          }}
        />
        <Card
          data={{
            id: "",
            name: "Nome do item",
            description: "Descrição",
            price: "11,50",
            cover: "",
          }}
        />
        <Card
          data={{
            id: "",
            name: "Nome do item",
            description: "Descrição",
            price: "11,50",
            cover: "",
          }}
        />
      </View>
    </View>
  );
}
