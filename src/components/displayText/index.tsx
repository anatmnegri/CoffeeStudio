import { Text, View } from "react-native";
import { s } from "./style";

export type cardProps = {
  title: string;
  description: string;
};

type Props = {
  data: cardProps;
};

export function Card({ data, ...rest }: Props) {
  return (
    <View>
      <Text style={s.name}>{data.title}</Text>
      <Text style={s.description}>{data.description}</Text>
    </View>
  );
}
