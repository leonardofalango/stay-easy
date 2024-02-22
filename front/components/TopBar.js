import { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TopBar({ btnFunc, pageName }) {
    return (
        <View style={styles.container}>
            <Icon onPress={() => btnFunc()} name="arrow-back-ios" style={styles.icon} />
            <Text style={styles.text}>{pageName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '7%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    },
    icon: {
        position: 'absolute',
        left: 16,
        color: '#fff',
        fontSize: 24,
    },
    text: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 20,
    }
})