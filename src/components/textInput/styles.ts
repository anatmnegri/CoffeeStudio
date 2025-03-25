import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const s = StyleSheet.create({
  container: {
    gap: 14,
  },

  input: {
    borderRadius: 8,
    height: 40,
    borderWidth: 1,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: colors.gray[100],
    borderColor: colors.gray[300],
  },
  text: {
    color: colors.main.darkGreen,
  },
  textContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: -8,
  },
});
