import { View, StyleSheet, Text } from "react-native";

export default function ErrorComponent({ error, message }) {
    if(error) return (
        <View>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#FF2929',
        fontFamily: 'Poppins'
    }
})