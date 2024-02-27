import { View, StyleSheet, Text } from "react-native";

export default function HotelDetails({ data }) {
    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.location}>{data.destination}, United States</Text>
            </View>
            <View style={styles.underline}></View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 120,
        backgroundColor: '#2B2B2B',
        borderRadius: 12,
    },
    name: {
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF881A'
    },
    location: {
        color: '#dddeee',
        fontFamily: 'Poppins',
        fontSize: 14
    },
    nameContainer: {
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    underline: {
        width: '100%',
        height: 1,
        padding: 0,
        backgroundColor: '#444'
    }
});