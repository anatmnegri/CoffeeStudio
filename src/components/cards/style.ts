import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const s = StyleSheet.create({
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    gap: 10,
  },

  title: {
    fontSize: 16,
    color: colors.main.darkGreen,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
});
