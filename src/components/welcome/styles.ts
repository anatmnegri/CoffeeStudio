import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const s = StyleSheet.create({
  logo: {
    width: 210,
    height: 68,
    //marginTop: 24,
    marginBottom: 40,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    //fontFamily: fontFamily.bold,
    color: colors.main.darkGreen,
  },
  subtitle: {
    fontSize: 16,
    //fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
});
