import React from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/AddItem";

const AddItem: React.FC<{ addItem: (text: string) => void }> = ({
    addItem,
}) => {
    const [text, setText] = React.useState("");
    const changeText = (value: string) => {
        setText(value);
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={changeText}
                onSubmitEditing={() => {
                    addItem(text);
                    setText("");
                }}
                defaultValue={text}
            />
            <Icon
                name="plus"
                style={styles.btnIcon}
                size={20}
                onPress={() => {
                    addItem(text);
                    setText("");
                }}
            />
        </View>
    );
};

export default AddItem;
