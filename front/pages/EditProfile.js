import { Modal, View, StyleSheet, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { useState } from 'react';
import TopBar from '../components/TopBar';
const userImage = require('../assets/caqui.png');
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-modern-datepicker';

export default function EditProfile({ navigation }) {
    const { token } = useSelector((store) => store.user);

    const [open, setOpen] = useState(false)
    const [date, setDate] = useState('')

    useEffect(() => {
        const user = async() =>{
            const u = (await userService.getByToken({token : token}))
            setbirthdayUser(u.birthday)
            setName(u.name)
            setUsername(u.name)
            setEmail(u.email)
            setCpf(u.cpf)
        }
        user()
    }, [])
    const [loggedUser, setUser] = useState({})

    const [birthdayUser, setbirthdayUser] = useState('Select date')
    const [name, setName] = useState('Kaiky Santos')
    const [username, setUsername] = useState('@caqui')
    const [email, setEmail] = useState('kaikysr0000@gmail.com')
    const [cpf, setCpf] = useState('124.761.220-47')

    function handleOnPress () {
        setOpen(!open);
    }

    function handleChange (propDate) {
        setDate(propDate);
        setbirthdayUser(propDate);
    }

    function handleChangeName (propName) {
        setName(propName);
    }

    function handleChangeUsername (propUsername) {
        setUsername(propUsername);
    }

    function handleChangeEmail (propEmail) {
        setEmail(propEmail);
    }

    function handleChangeCpf (propCpf) {
        setCpf(propCpf);
    }

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
                    <TextInput style={{ textAlign: 'center', fontSize: 25, fontFamily: 'Poppins', color: '#EEEEEE', fontWeight: 600 }} 
                    onChange={(e) => setName(e.target.value)} value={name}/>
                </View>
                <View style={styles.username}>
                    <TextInput style={{fontSize: 18, fontFamily: 'Poppins', color: '#ABABAB', fontWeight: 600, textAlign: 'center' }} onChange={(e) => setUsername(e.target.value)} value={username}/> 
                </View>
            </View>
            <View style={styles.userData}>
                <View style={styles.email}>
                    <Text style={styles.grayText}>EMAIL ADDRESS</Text>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.whiteText} onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </View>
                </View>
                <View style={styles.cpf}>
                    <Text style={styles.grayText}>CPF</Text>
                    <View style={styles.inputCPF}>
                        <TextInput style={styles.whiteText} onChange={(e) => setCpf(e.target.value)} value={cpf}/>
                    </View>
                </View>
                <View style={styles.birthday}>
                    <Text style={styles.grayText}>BIRTHDAY</Text>
                    <View>
                        <TouchableOpacity style={styles.inputBirthday} onPress={handleOnPress}>
                            <Text style={styles.whiteText}>{birthdayUser}</Text>
                            <Icon2 name="calendar" style={{ color: '#FF881A', fontSize: 25 }} />
                        </TouchableOpacity>
                        <Modal
                        animationType='slide'
                        transparent={true}
                        visible={open}
                        >
                            <View style={styles.centeredView}> 
                                <View style={styles.modalView}>

                                    <DatePicker 
                                    mode={'calendar'}
                                    selected={date}
                                    onDateChange={handleChange}
                                    />

                                    <TouchableOpacity onPress={handleOnPress}><Text>close</Text></TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>
            </View>
            <View style={styles.logout}>
                <TouchableOpacity style={styles.buttonLogout}>
                    <Text style={{color: 'red', fontFamily: 'Poppins', fontSize: 18,  fontWeight: 600}}>Log Out</Text>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    inputBirthday: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 15,
        padding: 15,
        borderWidth: 2,
        borderColor: '#ffffff'
    },
    birthday: {
        gap: 10
    },
    logout: {
        width: '85%',
        marginTop: 10,
        height: 20
    },
    buttonLogout: {
        width: '100%', 
        borderRadius: 15, 
        padding: 15, 
        borderWidth: 2, 
        borderColor: "red", 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '15%'
        
    },
    name: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});