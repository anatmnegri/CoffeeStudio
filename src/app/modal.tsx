import { View, Text, Image } from "react-native";
import { colors } from "@/src/styles/theme";
import { Button } from "../components/button";
import {
  IconCoffee,
  IconMilk,
  IconChevronLeft,
} from "@tabler/icons-react-native";
import { s } from "../styles/styles";
import { router } from "expo-router";

export default function Modal() {
  return (
    <View
      style={{
        flex: 1,
        paddingRight: 25,
        paddingLeft: 25,
        backgroundColor: colors.gray[100],
        justifyContent: "space-between",
      }}
    >
      <View style={s.header}>
        <IconChevronLeft
          onPress={() => router.navigate("/home")}
          style={s.headerIcon}
          stroke={colors.main.darkGreen}
        />
        <Text style={s.headerText}>Detalhes</Text>
      </View>
      <Image source={require("../assets/bannerImg.png")} style={s.bannerImg} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={s.headerText}>Produto</Text>
          <Text style={s.textDesc}>Complemento</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <IconCoffee stroke={colors.main.darkGreen} style={s.icon} />
          <IconMilk stroke={colors.main.darkGreen} style={s.icon} />
        </View>
      </View>
      <View style={s.divisor}></View>
      <View style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Text style={s.textTitle}>Descrição</Text>
          <Text style={s.textDesc}>
            Um cappuccino é uma bebida de aproximadamente, sendo 10% de café
            expresso e 32% de leite de fresco e 56% de café, utilizamos grãos
            especiais.
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Text style={s.textTitle}>Tamanhos disponíveis</Text>
          <View style={s.sizes}>
            <Button style={s.btnSize}>
              <Button.Title>P</Button.Title>
            </Button>
            <Button style={s.btnSize}>
              <Button.Title>G</Button.Title>
            </Button>
          </View>
        </View>
      </View>
      <View style={s.footer}>
        <View>
          <Text style={s.textDesc}>Valor</Text>
          <Text style={s.headerText}>R$ 11,50</Text>
        </View>
        <Button style={s.btnAdd}>
          <Button.Title>Adicionar ao carrinho</Button.Title>
        </Button>
      </View>
    </View>
  );
}
