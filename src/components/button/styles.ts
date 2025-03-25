import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/theme";

export const s = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.main.darkGreen,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 14,
  },
  title: {
    color: colors.gray[100],
    //fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
  text: {
    color: colors.main.base,
    fontSize: 16,
  },
});
