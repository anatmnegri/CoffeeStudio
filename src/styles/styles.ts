import { StyleSheet } from "react-native";
import { colors } from "../styles/theme";

export const s = StyleSheet.create({
  sizes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 12,
  },
  btnSize: {
    width: 90,
    height: 43,
  },
  icon: {
    backgroundColor: colors.main.base,
    padding: 8,
    borderRadius: 14,
  },
  bannerImg: {
    width: "100%",
    height: 200,
    borderRadius: 16,
  },
  divisor: {
    height: 1,
    backgroundColor: colors.main.base,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    paddingTop: 20,
    paddingBottom: 8,
  },
  headerIcon: {
    position: "absolute",
    left: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.gray[600],
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.gray[600],
  },
  textDesc: {
    fontSize: 14,
    color: colors.gray[300],
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
    paddingTop: 8,
    paddingBottom: 20,
  },
  btnAdd: { width: 217, height: 62 },
});
