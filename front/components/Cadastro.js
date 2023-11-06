import { useState } from 'react';
import { CheckBox } from 'react-native-elements'
import { UserService } from '../services/userService'
const background = require('../assets/background.png');
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';

export default function Cadastro({ navigation }) {
    const [isChecked, setIsChecked] = useState(true);
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = async () => {
        try {

            if (!verifyPasswords())
                return

            const newUser = {
                email : username,
                name : name,
                password : password,
                birthday : birthdate,
                cpf : cpf
            }


            setUsername("")
            setName("")
            setBirthdate("")
            setCpf("")
            setPassword("")
            setConfirmPassword("")

            const response = await UserService.create(newUser)

            console.log(response)

        } catch (e) {
            console.log("Error")
            console.log(e.message)
        }
    }

    const verifyPasswords = () => {
        return true
        if (password != confirmPassword)
            return false
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.image} resizeMode='cover'>
                <View style={styles.box}>
                    
                    <View style={styles.inputs}>
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChange={ (e) => setUsername(e.target.value) }
                            value={ username }
                            placeholder='Email or username'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChange={ (e) => setName(e.target.value) }
                            value={ name }
                            placeholder='Name'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChange={ (e) => setCpf(e.target.value) }
                            value={ cpf }
                            placeholder='CPF'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChange={ (e) => setBirthdate(e.target.value) }
                            value={ birthdate }
                            placeholder='Birthdate'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            secureTextEntry
                            onChange={ (e) => setPassword(e.target.value) }
                            value={ password }
                            placeholder='Password'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            secureTextEntry
                            onChange={ (e) => setConfirmPassword(e.target.value) }
                            value={ confirmPassword }
                            placeholder='Confirm Password'
                        />
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <CheckBox
                                center
                                style={styles.check}
                                checked={isChecked}
                                checkedColor={'#FF902B'}
                                onPress={() => setIsChecked(!isChecked)}
                            />
                            <Text
                                style={{
                                    fontFamily: 'Poppins', 
                                    fontWeight: '600', 
                                    fontSize: '1.05rem'}}
                            >
                                Subscribe to newsletter
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.btnContainer}
                        onPress={ register }
                    >
                        <Text 
                            style={{
                                fontFamily: 'Poppins', 
                                fontWeight: '600', 
                                fontSize: '1.24rem'}}
                        >
                            Register
                        </Text>
                    </TouchableOpacity>

                    <View>
                        <Text 
                            style={{
                                fontFamily: 'Poppins', 
                                fontWeight: '500', 
                                fontSize: '1rem',
                                display: 'flex',
                                gap: '4px',
                                color: '#363636',
                                marginTop: '2.5rem'}}
                        >
                            Already have an account?
                            <Text
                                onPress={() => navigation.navigate("login")}
                                style={{
                                    fontFamily: 'Poppins', 
                                    fontWeight: '600', 
                                    fontSize: '1rem',
                                    textDecorationLine: '',
                                    color: 'black'}}
                            >
                                Login
                            </Text>
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
    },
    container: {
        flex: 1,
        backgroundColor: '#080708',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF881A',
        borderRadius: '12px',
        padding: '30px',
        width: '180px',
        maxHeight: '50px',
        marginTop: '2rem'
    },
    box: {
        flex: 1,
        gap: 20,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0',
        padding: '24px',
        borderRadius: '24px',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        width: '100vw',
        height: '95vh',
        paddingTop: '80px',
        backgroundColor: '#E8E8E8',
    },
    inputs: {
        width: "80%",
        maxHeight: '50rem',
        flex: 1,
        justifyContent: 'center', 
        gap: '20px',
    },
    input: {
        width: "100%",
        backgroundColor: "#242424",
        color: "#fff",
        fontFamily: 'Poppins',
        height: '4rem',
        paddingVertical: '2.3rem',
        borderRadius: '12px',
        paddingLeft: '15px',
        fontSize: '1rem'
    },
    check: {
        backgroundColor: 'FF902B',
        color: 'FF902B',
        width: '100%'
    }
   
});