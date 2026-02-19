import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardWrapper: {
        width: "90%",
        height: 100,
        marginHorizontal: "auto",
        marginVertical: 10,
        padding: 5,
        backgroundColor: "#eee",
        flex: 1,
        justifyContent: "space-between"
    },
    taskTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    deleteBtn: {
        
    },
    deleteTask: {
        textAlign: "right",
        color: "red"
    }
})