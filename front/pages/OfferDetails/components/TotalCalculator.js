import { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TotalCalculator({ totalPriceHelper, total, setTotal }) {
    useEffect(() => {
        let totalPrice = 0;
        let days = (totalPriceHelper.date.checkout - totalPriceHelper.date.checkin) / (1000 * 3600 * 24) + 1
        
        totalPrice = (days * totalPriceHelper.dailyPrice) + (totalPriceHelper.ticket.price * 2);
        setTotal(!isNaN(totalPrice) ? totalPrice : 0.00);
    }, [totalPriceHelper.date, totalPriceHelper.ticket])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.price}>US$ {total.toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2B2B2B',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 24,
        color: '#dddeee',
        fontWeight: 600
    },
    price: {
        fontFamily: 'Poppins',
        fontSize: 28,
        color: '#FF881A',
        fontWeight: 700
    }
});
