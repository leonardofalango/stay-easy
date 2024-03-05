import { Button, View, StyleSheet, TextInput, Image, TouchableOpacity, Text, ImageBackground } from 'react-native';
const { UserService } = require('../services/userService')
const logo = require('../assets/completedLogo.png');
const facebook = require('../assets/facebook.png');
const google = require('../assets/google.png');
const background = require('../assets/background.png');
import { useState } from 'react';
import ErrorComponent from '../components/ErrorComponent';


export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const loginFacebook = async () => {

        const response = await UserService.loginFacebook();
        if (response.status == 200)
        {
            sessionStorage.setItem('jwt', response.data.token);
            navigation.navigate("main")
        }
    }
    const [error, setError] = useState({error: false, message: ''});

    const login = async () => {
        try {
            const data = {
                name : email,
                password : pass
            }
            
            const response = await UserService.login(data);
            switch (response.status)
            {
                case 200:
                    setPass("");
                    sessionStorage.setItem('jwt', response.data.token);
                    navigation.navigate("main");
                    break;
                case 400:
                    setError({error: true, message: 'Usuário ou senha incorretos.'})
                    break;
                case 500:
                    setError({error: true, message: 'Erro interno.'})
                    break;

            }
        } catch (e) {
            console.error("Error!")
            console.error(e.message)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.image} resizeMode='cover'>
                <View style={styles.box}>
                    <Image
                        style={styles.logo}
                        source={logo}
                    />
                    <View style={styles.inputs}>
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            placeholder='Email or username'
                            onChange={(e) => { setEmail(e.target.value); setError({ error: false, message: '' }) }}
                            value={email}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            secureTextEntry
                            placeholder='Password'
                            onChange={(e) => { setPass(e.target.value); setError({ error: false, message: '' }) }}
                            value={pass}
                        />
                    </View>
                    <ErrorComponent error={error.error} message={error.message} />
                    <TouchableOpacity
                        style={styles.btnContainer}
                        onPress={() => login()}
                    >
                        <Text 
                            style={{
                                fontFamily: 'Poppins', 
                                fontWeight: '600', 
                                fontSize: '1.24rem'}}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.fLogs}>
                        <Image
                            style={styles.logs}
                            source={google}
                        />
                        <TouchableOpacity
                            onPress={loginFacebook}
                        >
                            <Image
                                style={styles.logs}
                                source={facebook}
                            />
                        </TouchableOpacity>
                    </View>
                        
                    <View>
                        <Text 
                            style={{
                                fontFamily: 'Poppins', 
                                fontWeight: '500', 
                                fontSize: '1rem',
                                display: 'flex',
                                gap: '4px',
                                color: '#aaa',
                                marginTop: '3rem'}}
                        >
                            Doesn`t have an account?
                            <Text
                                onPress={() => navigation.navigate("cadastro")}
                                style={{
                                    fontFamily: 'Poppins', 
                                    fontWeight: '600', 
                                    fontSize: '1rem',
                                    textDecorationLine: '',
                                    color: '#eee'}}
                            >
                                Register
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF881A',
        padding: '30px',
        borderRadius: '12px',
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
        height: '75vh',
        backgroundColor: '#222'

    },
    logo: {
        marginTop: '20px',
        width: '114px',
        height: '70px',
        resizeMode: 'contain',
        
    },
    inputs: {
        width: "80%",
        maxHeight: '12rem',
        flex: 1,
        justifyContent: 'center',
        gap: '20px',
    },
    input: {
        width: "100%",
        backgroundColor: "#191919",
        color: "#fff",
        fontFamily: 'Poppins',
        height: '4rem',
        paddingVertical: '2.3rem',
        borderRadius: '12px',
        paddingLeft: '15px',
        fontSize: '1rem'
    },
    fLogs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '250px',
        flexDirection: 'row',
        gap: 15,
    },
    logs: {
        marginTop: '20px',
        width: '40px',
        height: '40px',
        resizeMode: 'center',
        
    },
   
});