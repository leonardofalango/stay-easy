import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import TopBar from '../components/TopBar';
const userImage = require('../assets/caqui.png');
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function EditProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <TopBar btnFunc={() => navigation.navigate('main')} pageName={'Edit Profile'}/>
            <View style={styles.userPhoto}>
                <View style={styles.photo}>
                    <Image source={userImage} style={{ width: 160, height: 160, resizeMode: 'cover', borderRadius: '50%' }}/>
                </View>
                <View style={styles.iconEdit}>
                    <Icon name="edit" style={{ color: '#FF881A', fontSize: 32 }} />
                </View>
            </View>
            <View style={styles.userIDs}>
                <View style={styles.name}>
                    <Text style={{ fontSize: 25, fontFamily: 'Poppins', color: '#EEEEEE', fontWeight: 600 }}>Kaiky Santos</Text>
                </View>
                <View style={styles.username}>
                    <Text style={styles.grayText}>@caqui</Text> 
                </View>
            </View>
            <View style={styles.userData}>
                <View style={styles.email}>
                    <Text style={styles.grayText}>EMAIL ADDRESS</Text>
                    <View style={styles.inputEmail}>
                        <Text style={styles.whiteText}>kaikysr0000@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.cpf}>
                    <Text style={styles.grayText}>CPF</Text>
                    <View style={styles.inputCPF}>
                        <Text style={styles.whiteText}>144.785.934-00</Text>
                    </View>
                </View>
                <View style={styles.birthday}>
                    <Text style={styles.grayText}>BIRTHDAY</Text>
                    <View style={styles.day}>
                        
                    </View>
                    <View style={styles.mouth}>
                        
                    </View>
                    <View style={styles.year}>
                        
                    </View>
                </View>
            </View>
            <View style={styles.logout}>
                <TouchableOpacity style={{}}>
                    Log Out
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#222222',
        alignItems: 'center',
        gap: 25
    },
    userPhoto: {
        display: 'flex',
        justifyContent: 'center',
    },
    iconEdit: {
        backgroundColor: '#3A3A3A',
        borderRadius: 50,
        padding: 8,
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    userIDs: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grayText: {
        fontSize: 18, 
        fontFamily: 'Poppins', 
        color: '#ABABAB', 
        fontWeight: 600
    },
    whiteText: {
        fontSize: 18, 
        fontFamily: 'Poppins', 
        color: '#EEEEEE', 
        fontWeight: 600
    },
    userData: {
        width: '85%',
        gap: 10
    },
    email: {
        gap: 10
    },
    inputEmail: {
        borderRadius: 15,
        padding: 15,
        borderWidth: 2,
        borderColor: "#ffffff"
    },
    cpf: {
        gap: 10
    },
    inputCPF: {
        borderRadius: 15,
        padding: 15,
        borderWidth: 2,
        borderColor: "#ffffff"
    },
   
});