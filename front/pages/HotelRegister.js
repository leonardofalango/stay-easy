import { useState } from 'react';
import { CheckBox } from 'react-native-elements'
import { HotelService } from '../services/hotelService'
const background = require('../assets/background.png');
import { View, StyleSheet, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import MultipleImagePicker from '../components/ImagesPicker';

export default function HotelRegister({ navigation }) {
    const [hotelName, setHotelName] = useState("");
    const [hotelDescription, setHotelDescription] = useState("");
    const [destination, setDestination] = useState("");
    const [amenities, setAmenities] = useState([]);
    const [beds, setBeds] = useState('');
    const [people, setPeople] = useState('');
    const [stars, setStars] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);

    const [error, setError] = useState({error: false, message: ''});

    const verifyNumericInput = (numericInput) => {
        try {
            eval(numericInput)
            return numericInput
        } catch {
            return numericInput.substring(0, numericInput.length - 1)
        }

        // return isNaN(parseFloat(numericInput)) ? '' : numericInput
    }

    const register = async () => {
        try {

            const newHotel= {
                name: hotelName,
                hotelDescription: hotelDescription,
                destination: destination,
                amenities: amenities,
                bed: beds,
                people: people,
                stars: stars,
                price: price,
                images: images
            }

            const response = await HotelService.create(newHotel)

            console.log(response)
            if (response.status == 200)
            {
                setAmenities('')
                setBeds('')
                setDestination('')
                setHotelDescription('')
                setHotelName('')
                setImages('')
                setPeople('')
                setPrice('')
                setStars('')
            }
            
        } catch (e) {
            console.log(e.message)
            setError({
                error: true,
                message: "Erro interno"
            })
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.image} resizeMode='cover'>
                <View style={styles.box}>
                    
                    <View style={styles.inputs}>
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChangeText={(text) => setHotelName(text)}
                            value={hotelName}
                            placeholder='Hotel Name'
                        />


                        <TextInput 
                            style={[styles.input, {height:'12rem'}]}
                            placeholderTextColor="#fff" 
                            onChangeText={(text) => setHotelDescription(text)}
                            value={hotelDescription}
                            placeholder='Hotel Description'
                            multiline

                        />

                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChangeText={(text) => setAmenities(text.split(','))}
                            value={amenities.join(',')}
                            placeholder='Amenities (comma separated)'
                        />

                        
                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChangeText={(text) => setDestination(text)}
                            value={destination}
                            placeholder='Destination'

                        />

                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChangeText={(text) => setBeds(verifyNumericInput(text))}
                            value={beds}
                            placeholder='Number of Beds'
                            
                        />

                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChangeText={(text) => setPeople(verifyNumericInput(text))}
                            value={people}
                            placeholder='Number of People'
                            
                        />

                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChangeText={(text) => setStars(verifyNumericInput(text))}
                            value={stars}
                            placeholder='Stars'
                            
                        />

                        <TextInput 
                            style={styles.input}
                            placeholderTextColor="#fff" 
                            onChangeText={(text) => setPrice(text)}
                            value={price}
                            placeholder='Price per night'
                            
                        />
                        <MultipleImagePicker />
                        
                        <TouchableOpacity onPress={register}
                            style={styles.btnContainer}
                        >
                            <Text style={{
                                fontFamily: 'Poppins', 
                                fontWeight: '600', 
                                fontSize: '1.24rem'}}>
                                Register
                            </Text>
                        </TouchableOpacity>
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
        height: 100
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
        backgroundColor: '#222',
    },
    inputs: {
        width: "80%",
        height: "150%",
        flex: 1,
        justifyContent: 'center', 
        gap: '20px',
    },
    input: {
        width: "100%",
        backgroundColor: "#191919",
        color: "#fff",
        fontFamily: 'Poppins',
        paddingVertical: '2.4rem',
        height: '4rem',
        borderRadius: '12px',
        paddingLeft: '15px',
        fontSize: '1rem'
    },
   
});