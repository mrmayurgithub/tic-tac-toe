import { StyleSheet } from "react-native";
import colors from "./colors";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  wholeScreen: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  home: {},
  board: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  newGameButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "tomato",
    width: 160,
    height: 48,
  },
  newGameText: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.white,
  },
  container: {
    width: Dimensions.get("window").width / 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    height: 80,
  },
  circle: {
    backgroundColor: colors.primary,
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  cross: {
    color: colors.primary,
    fontSize: 48,
    fontWeight: "bold",
  },
});

export default styles;
