import { View, Text, StyleSheet } from "react-native"

const Header = ({ title, bg = "darkslateblue" }: { title: string, bg?: string }) => {
    return (
        <View style={{...styles.header, backgroundColor: bg}}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingBottom: 20
    },
    text: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
    }
})

export default Header