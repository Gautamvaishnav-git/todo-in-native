import { StyleSheet } from "react-native";
import themeColors from "../config/theme";

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 16,
    borderColor: "#c2bad8",
    borderWidth: 1,
    flexGrow: 1,
    borderRadius: 5,
    marginLeft: 5,
  },
  btnIcon: {
    backgroundColor: themeColors.primary,
    padding: 10,
    color: "#fff",
    marginRight: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});

export default styles;
