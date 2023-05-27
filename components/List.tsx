import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native"
import IListItem from "../interfaces/IList"
import Icon from "react-native-vector-icons/MaterialIcons"
import React from "react"
import listStyle from "../styles/ListItem"
import themeColors from "../config/theme"

interface propTypes extends IListItem {
    deleteItem: (id: string | number[]) => void;
    checkItem: (id: string | number[]) => void;
}

const List: React.FC<propTypes> = ({ id, text, time, deleteItem, isCompleted, checkItem }) => {
    return (
        <TouchableOpacity style={{ ...listStyle.container, backgroundColor: isCompleted ? themeColors.checkedList : themeColors.uncheckedList }}>
            <View style={listStyle.wrapper}>
                <View>
                    <Text style={listStyle.text}>{text}</Text>
                </View>

                <View style={listStyle.btnBox}>
                    {!isCompleted && <Icon name="check" size={24} style={listStyle.icon} onPress={() => checkItem(id)} />}
                    <Icon name="delete" onPress={() => deleteItem(id)} size={24} style={listStyle.icon} />
                </View>
            </View>

            <View>
                <Text style={listStyle.timeText}>{time}</Text>
            </View>

        </TouchableOpacity>
    )
}


export default List