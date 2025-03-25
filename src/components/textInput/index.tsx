import React from "react";
import { TextInput, View, Text } from "react-native";
import { s } from "./styles";

type Props = {
  placeholder: string;
  authentication: string;
};

const Input = ({ placeholder, authentication }: Props) => {
  const [login, onChangeLogin] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        onChangeText={onChangeLogin}
        placeholder={placeholder}
        value={login}
        keyboardType="email-address"
        placeholderTextColor="#73808C"
      />
      <View style={s.textContainer}>
        <Text style={s.text}>{authentication}</Text>
      </View>
    </View>
  );
};

export { Input };
