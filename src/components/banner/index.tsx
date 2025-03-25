import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { s } from "./styles";

export type cardProps = {
  id: string;
  name: string;
  tag: string;
  cover: string;
};

type Props = TouchableOpacityProps & {
  data: cardProps;
};

export function Banner({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <View style={s.textContainer}>
        <View style={s.tagContainer}>
          <Text style={s.tag}>{data.tag}</Text>
        </View>
        <Text style={s.name}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
}
