import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { s } from "./styles";
import { Button } from "../button";
import { Link, router } from "expo-router";

export type cardProps = {
  id: string;
  name: string;
  description: string;
  price: string;
  cover: string;
};

type Props = TouchableOpacityProps & {
  data: cardProps;
};

export function Card({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      onPress={() => router.navigate("/modal")}
      style={s.container}
      {...rest}
    >
      <View style={s.image}></View>
      <View>
        <Text style={s.name}>{data.name}</Text>
        <Text style={s.description}>{data.description}</Text>
      </View>
      <View style={s.priceContainer}>
        <Text style={s.price}>{data.price}</Text>
        <Button style={s.button}>
          <Button.Title>+</Button.Title>
        </Button>
      </View>
    </TouchableOpacity>
  );
}
