import { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { CheckBox } from 'react-native-elements'
const background = require('../assets/background.png');

export default function Cadastro({ navigation }) {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.image} resizeMode='cover'>
                <View style={styles.box}>
                    
                    <View style={styles.inputs}>
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            placeholder='Email or username'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            secureTextEntry
                            placeholder='Name'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            secureTextEntry
                            placeholder='CPF'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            secureTextEntry
                            placeholder='Birthdate'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            secureTextEntry
                            placeholder='Password'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            secureTextEntry
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
                        onPress={() => navigation.navigate("main")}
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