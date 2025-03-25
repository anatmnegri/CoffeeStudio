import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const s = StyleSheet.create({
  container: {
    height: 253,
    width: "48%",
    padding: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
    flexDirection: "column",
    gap: 16,
    alignItems: "flex-start",
    backgroundColor: colors.gray[100],
    justifyContent: "space-between",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "50%",
    backgroundColor: colors.main.darkGreen,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 14,
    color: colors.gray[600],
  },
  description: {
    fontSize: 12,
    color: colors.gray[500],
  },
  price: {
    fontSize: 16,
    color: colors.gray[600],
  },
  button: {
    height: 33,
    width: 33,
    backgroundColor: colors.main.darkPink,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    gap: 7,
    marginTop: 10,
  },
});
