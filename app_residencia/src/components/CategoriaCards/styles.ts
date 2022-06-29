import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: 5


    },

    card: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: 150,
        height: 220,
        backgroundColor: '#000000',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "column",
        borderColor: '#fff700',
        borderWidth: 1,

    },
    text: {
        textAlign: 'center',
        color: '#fff700',
        fontSize: 15,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100
    }
})