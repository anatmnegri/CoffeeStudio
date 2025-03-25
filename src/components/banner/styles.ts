import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const s = StyleSheet.create({
  container: {
    height: 140,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: "column",
    gap: 16,
    alignItems: "flex-start",
    backgroundColor: colors.gray[100],
    justifyContent: "space-between",
    display: "flex",
    boxShadow: "0 3px 4px -1px rgb(0 0 0 / 0.06)",
  },
  textContainer: {
    justifyContent: "space-between",
    padding: 15,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  tagContainer: {
    backgroundColor: colors.main.darkPink,
    borderRadius: 8,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 32,
    color: colors.gray[300],
  },
  tag: {
    fontSize: 14,
    display: "flex",
    color: colors.gray[100],
    justifyContent: "center",
    padding: 5,
  },
  price: {
    fontSize: 16,
    color: colors.gray[600],
  },
  button: {
    height: 33,
    width: 33,
    backgroundColor: colors.main.darkPink,
  },
  footer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 10,
  },
});
