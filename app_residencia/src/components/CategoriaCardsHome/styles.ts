import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-evenly',
        padding: 5
        


    },

    card: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: 60,
        height: 60,
        backgroundColor: '#000000',
        padding: 15,
        borderRadius: 90,
        alignItems: 'center',
        marginVertical: 5,
        flexDirection: "column",
        borderColor: '#fff700',
        borderWidth: 1,

    },
    text: {
        textAlign: 'center',
        color: '#fff700',
        fontFamily: 'Starjout',
        fontSize:10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    }
})