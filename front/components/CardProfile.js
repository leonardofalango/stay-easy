import { View, StyleSheet, Text, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
const userImage = require('../assets/caqui.png');
import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import Circle from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


export default function CardProfile({ toggleOptions }) {
    const navigation = useNavigation();

    return (
        <View style={styles.cardProfile}>
            <View style={styles.cardTop}>
                <View style={styles.image}>
                    <Image source={userImage} style={{ width: 100, height: 100, resizeMode: 'cover', borderRadius: '50%' }}/>
                </View>
                <View style={styles.texts}>
                    <Text style={styles.textName}>Kaiky Santos</Text>
                    <Text style={styles.textEmail}>kaikysr2004@gmail.com</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("editprofile"); toggleOptions() } } style={styles.editProfile}>
                        <Text style={styles.textEditProfile}>Edit profile </Text>
                        <ArrowRight  name="arrow-forward-ios" style={{ color: '#EEEEEE', fontSize: 15 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardBot}>
                <Circle  name="circle" style={{ color: '#FF881A', fontSize: 15 }} />
                <Text style={{ fontFamily: 'poppins', fontSize: 14, color: '#EEEEEE'}}>Active reservations:</Text>
                <Text style={{ fontFamily: 'poppins', fontSize: 16, color: '#FF881A'}}>2</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardProfile: {
        backgroundColor: '#222222',
        width: '90%',
        height: '100%',
        borderRadius: '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
    },
    cardTop: {
        backgroundColor: '#3A3A3A',
        width: '100%',
        height: '80%',
        borderTopLeftRadius: '18px',
        borderTopRightRadius: '18px',
        display: 'flex',
        flexDirection: 'row',
    },
    cardBot: {
        backgroundColor: '#3A3A3A',
        width: '100%',
        height: '20%',
        borderBottomLeftRadius: '18px',
        borderBottomRightRadius: '18px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '10px',
        gap: '10px',
    },
    image: {
        width: '35%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texts: {
        width: '65%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textName: {
        fontFamily: 'poppins',
        fontSize: 18,
        color: '#EEEEEE',
    },
    textEmail: {
        fontFamily: 'poppins',
        fontSize: 14,
        color: '#ABABAB',
        textDecorationLine: 'underline'
    },
    editProfile: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    textEditProfile: {
        fontFamily: 'poppins',
        fontSize: 15,
        color: '#EEEEEE',
    },
});