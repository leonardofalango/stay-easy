import { View, StyleSheet, TextInput, TouchableOpacity, Touchable, Text, ImageBackground, Image } from 'react-native';
const hotelImg = require('../assets/hotel.png');
const airImg = require('../assets/icons/air.png');
const bedImg = require('../assets/icons/bed.png');
const wifiImg = require('../assets/icons/wifi.png');
const bathImg = require('../assets/icons/bath.png');
const peopleImg = require('../assets/icons/people.png');
const star = require('../assets/icons/star.png');

export default function Card(props) {
    const renderAir = () => {
        if (props.air)
            return (
                <View style={styles.detail}>
                    <Image source={airImg} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                    <Text style={styles.detailText}>Air Conditioner</Text>
                </View>
            )
    }

    const renderWifi = () => {
        if (props.wifi)
            return (
                <View style={styles.detail}>
                    <Image source={wifiImg} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                    <Text style={styles.detailText}>Wi-Fi</Text>
                </View>
            )
    }

    const renderBath = () => {
        if (props.bath)
            return (
                <View style={styles.detail}>
                    <Image source={bathImg} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                    <Text style={styles.detailText}>Hydromassage</Text>
                </View>
            )
    }

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < props.stars; i++)
            stars.push(<Image source={star} style={{ width: 10, height: 10, resizeMode: 'contain' }} />);
        
        return stars;
    }

    return (
        <View style={styles.box}>
            <View style={styles.imgBox}>
                <Image source={hotelImg} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderBottomLeftRadius: 16, borderTopLeftRadius: 16 }} />
            </View>
            <View style={styles.infoBox}>
                <View style={styles.info}>
                    <Text style={styles.name}>{props.hotel}</Text>
                    <Text style={styles.destination}>{props.destination}</Text>
                </View>
                <View style={styles.details}>
                    {renderAir()}
                    <View style={styles.detail}>
                        <Image source={bedImg} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                        <Text style={styles.detailText}>{props.bed}</Text>
                    </View>
                    {renderWifi()}
                    {renderBath()}
                    <View style={styles.detail}>
                        <Image source={peopleImg} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                        <Text style={styles.detailText}>{props.people} people</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.stars}>
                        {renderStars()}
                    </View>
                    <View style={styles.priceBox}>
                        <Text style={styles.price}>US$ {props.price}</Text>
                        <Text style={styles.perday}>per day</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#3A3A3A',
        height: '15rem',
        borderRadius: 16,
    },
    imgBox: {
        width: '40%',
        height: '100%',
    },
    infoBox: {
        width: '60%',
        height: '100%',
        paddingVertical: '6px',
        paddingHorizontal: '8px',
    },
    info: {
        display: 'flex',
        width: '100%',
    },
    name: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#FF881A'
    },
    destination: {
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: 300,
        color: '#eee'
    },
    details: {
        width: '100%',
        display: 'flex',
        gap: '8px',
        marginTop: '1rem',
    },
    detail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '6px',
        width: '80%',
        height: '1rem'
    },
    detailText: {
        color: '#ddd',
        fontFamily: 'Poppins',
        fontSize: '0.75rem'
    },
    bottom: {
        width: '90%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 10
    },
    priceBox: {
        alignItems: 'flex-end',
        height: '100%'
    },
    price: {
        fontFamily: 'Poppins',
        color: '#fff',
        fontWeight: '500',
        fontSize: '1.25rem',
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        marginTop: '8px'
    },
    perday: {
        color: '#ABABAB',
        fontFamily: 'Poppins'
    }
});