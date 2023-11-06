import { View, StyleSheet, TextInput, TouchableOpacity, Touchable, Text, ImageBackground, Image } from 'react-native';
const filterIcon = require('../assets/icons/filterIcon.png');


export default function Filter() {
    return (
            <View style={styles.box}>
                <TouchableOpacity style={styles.btn}>
                    <Image source={filterIcon} style={{ width: 16, height: 16, resizeMode: 'contain' }} />
                    <Text style={styles.btnText}>Filters</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100vw',
        height: '2rem',
        paddingHorizontal: '2rem',
    },
    btn: {
        backgroundColor: '#3A3A3A',
        width: '7rem',
        height: '2rem',
        borderRadius: 14,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '1rem',
    },
    btnText: {
        fontSize: '1rem',
        color: '#E1E1E1',
        fontFamily: 'Poppins',
        textAlign: 'center'
    }
});