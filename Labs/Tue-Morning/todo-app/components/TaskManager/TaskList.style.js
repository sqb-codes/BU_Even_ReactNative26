import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        height: 120,
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 20,
        justifyContent: "space-between",
        borderRadius: 10,
        marginBottom: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: '500'
    },
    deleteText: {
        color: "white",
        fontSize: 17,
        fontWeight: "500",
        backgroundColor: "red",
        width: "35%",
        textAlign: "center",
        padding: 5,
        borderRadius: 10,
    }
});