import { StyleSheet } from "react-native";
import themeColors from "../config/theme";


const listStyle = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 10,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        justifyContent: "space-between"
    },
    text: {
        color: "black",
        fontSize: 17,
        paddingHorizontal: 4,
        textTransform: "capitalize"
    },
    icon: {
        backgroundColor: themeColors.primary,
        borderRadius: 100,
        padding: 6,
        color: "white"
    },
    timeText: {
        fontFamily: "serif",
        color: "#000"
    },
    btnBox: {
        flexGrow: 1,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 16,
    }
})

export default listStyle;